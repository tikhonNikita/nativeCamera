package com.nativecamera.camera

import android.net.Uri
import android.view.View
import androidx.camera.core.ImageCaptureException
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import java.io.File
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

const val onPhotoEvent = "onPhotoTaken"
const val onPhotoErrorEvent = "onPhotoErrorEvent"

fun Uri.toRnArgs(): WritableMap {
    val args = Arguments.createMap()
    args.putString("resultUri", this.toString())
    return args
}

class CameraViewManager : SimpleViewManager<View>() {
    private lateinit var outputDirectory: File
    private lateinit var cameraExecutor: ExecutorService
    private lateinit var context: ReactContext

    override fun getName(): String = "CameraView"

    private fun handleImageCapture(uri: Uri) {
        sendEvent(context, uri.toRnArgs(), onPhotoEvent)
    }

    private fun handleError(exception: ImageCaptureException) {
        val args = Arguments.createMap()
        args.putString("error", exception.message)
        sendEvent(context, args, onPhotoErrorEvent)
    }


    override fun createViewInstance(reactApplicationContext: ThemedReactContext): View {
        context = reactApplicationContext
        return ComposeView(reactApplicationContext).apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            outputDirectory = getOutputDirectory(reactApplicationContext)
            cameraExecutor = Executors.newSingleThreadExecutor()
            setContent {
                CameraScreen(
                    cameraExecutor,
                    outputDirectory,
                    ::handleImageCapture,
                    ::handleError
                )
            }
        }
    }

    private fun sendEvent(reactContext: ReactContext, params: WritableMap?, eventName: String) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    private fun getOutputDirectory(reactApplicationContext: ThemedReactContext): File {
        reactApplicationContext.apply {
            val mediaDir = externalMediaDirs.firstOrNull()?.let {
                File(it, "NativeCamera").apply { mkdirs() }
            }
            return if (mediaDir != null && mediaDir.exists())
                mediaDir else reactApplicationContext.filesDir
        }
    }
}