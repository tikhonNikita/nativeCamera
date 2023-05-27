package com.nativecamera

import android.view.View
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.nativecamera.camera.CameraScreen
import java.io.File
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors

class CameraViewManager: SimpleViewManager<View>() {
    private lateinit var outputDirectory: File
    private lateinit var cameraExecutor: ExecutorService
    override fun getName(): String = "CameraView"

    override fun createViewInstance(reactApplicationContext: ThemedReactContext): View {
        return ComposeView(reactApplicationContext).apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                CameraScreen(reactApplicationContext, cameraExecutor, outputDirectory)
            }
            cameraExecutor = Executors.newSingleThreadExecutor()
            outputDirectory = getOutputDirectory(reactApplicationContext)
        }
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