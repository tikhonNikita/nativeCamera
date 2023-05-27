package com.nativecamera.camera

import android.Manifest
import android.net.Uri
import android.util.Log
import androidx.camera.camera2.internal.annotation.CameraExecutor
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import androidx.compose.runtime.livedata.observeAsState
import androidx.compose.runtime.saveable.rememberSaveable
import com.facebook.react.uimanager.ThemedReactContext
import com.google.accompanist.permissions.*
import com.nativecamera.BaseComposeView
import com.nativecamera.camera.components.Camera
import com.nativecamera.camera.components.PermissionView
import java.io.File
import java.util.concurrent.ExecutorService
import java.util.concurrent.Executors


@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraScreen(reactApplicationContext: ThemedReactContext, cameraExecutor: ExecutorService, outputDirectory:File ) {

    val cameraPermissionState = rememberPermissionState(
        Manifest.permission.CAMERA
    )

    DisposableEffect(Unit) {
        onDispose {
            cameraExecutor.shutdown()
        }
    }

    BaseComposeView {
        if (cameraPermissionState.status.isGranted) {
            Camera(
                outputDirectory = outputDirectory,
                executor = cameraExecutor,
                onImageCaptured = ::handleImageCapture,
                onError = {Log.e("Camera", it.toString())}
            )
        } else {
            PermissionView(cameraPermissionState)
        }
    }
}

private fun handleImageCapture(uri: Uri): Unit {
    Log.d("KOSMOSILDLO", uri.toString())
}