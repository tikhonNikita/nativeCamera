package com.nativecamera

import androidx.compose.material.Surface
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

// Jetpack Compose text

@Composable
fun MyComposeText() {
    Surface {
        Text("Hello Compose", fontWeight = FontWeight.Bold, fontSize = 40.sp)
    }
}