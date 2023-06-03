package com.nativecamera.camera.components

import androidx.compose.foundation.layout.*
import androidx.compose.material.Button
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.alpha
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.unit.dp
import com.google.accompanist.permissions.*

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun PermissionView(
    cameraPermissionState: PermissionState,
    content: @Composable () -> Unit
) {
    val textToShow = if (cameraPermissionState.status.shouldShowRationale) {
        stringResource(id = com.nativecamera.R.string.camera_rationale)
    } else {
        stringResource(id = com.nativecamera.R.string.camera_rationale_extended)
    }

    Box(modifier = Modifier.alpha(if (cameraPermissionState.status.isGranted) 1f else 0f)) {
        content()
    }

    if (!cameraPermissionState.status.isGranted) {
        Column(
            modifier = Modifier
                .fillMaxSize()
                .padding(16.dp),
            verticalArrangement = Arrangement.Bottom,
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Spacer(modifier = Modifier.height(48.dp))
            Text(
                modifier = Modifier.fillMaxWidth(),
                text = stringResource(id = com.nativecamera.R.string.rationale_title),
                style = MaterialTheme.typography.h4,
            )
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f),
                verticalArrangement = Arrangement.Center
            ) {
                Text(textToShow, style = MaterialTheme.typography.body2)
                Spacer(modifier = Modifier.height(48.dp))
                Button(onClick = { cameraPermissionState.launchPermissionRequest() }) {
                    Text(text = stringResource(id = com.nativecamera.R.string.request_permission))
                }
            }
        }
    }
}