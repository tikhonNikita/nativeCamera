package com.nativecamera.camera

import android.Manifest
import android.net.Uri
import android.util.Log
import androidx.camera.core.ImageCaptureException
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.*
import com.google.accompanist.permissions.*
import com.nativecamera.BaseComposeView
import com.nativecamera.camera.components.Camera
import com.nativecamera.camera.components.PermissionView
import java.io.File
import java.util.concurrent.ExecutorService


@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraScreen(
    cameraExecutor: ExecutorService,
    outputDirectory: File,
    handleImageCapture: (Uri) -> Unit,
    handleError: (ImageCaptureException) -> Unit
) {

    val cameraPermissionState = rememberPermissionState(
        Manifest.permission.CAMERA
    )

    DisposableEffect(Unit) {
        onDispose {
            cameraExecutor.shutdown()
        }
    }

    //TODO: move init logic to viewModel

    BaseComposeView {
        if (cameraPermissionState.status.isGranted) {
            Camera(
                outputDirectory = outputDirectory,
                executor = cameraExecutor,
                onImageCaptured = handleImageCapture,
                onError = handleError
            )
        } else {
            PermissionView(cameraPermissionState)
        }
    }
}