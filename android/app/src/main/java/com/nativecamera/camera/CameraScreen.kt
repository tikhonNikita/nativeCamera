package com.nativecamera.camera

import android.Manifest
import androidx.compose.foundation.layout.*
import androidx.compose.runtime.Composable
import com.google.accompanist.permissions.*
import com.nativecamera.BaseComposeView
import com.nativecamera.camera.components.Camera
import com.nativecamera.camera.components.PermissionView

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraScreen() {
    val cameraPermissionState = rememberPermissionState(
        Manifest.permission.CAMERA
    )
    BaseComposeView {
        if (cameraPermissionState.status.isGranted) {
            Camera()
        } else {
            PermissionView(cameraPermissionState)
        }
    }
}
