package com.nativecamera

import android.view.View
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.nativecamera.camera.CameraScreen

class CameraViewManager: SimpleViewManager<View>() {
    override fun getName(): String = "CameraView"

    override fun createViewInstance(reactApplicationContext: ThemedReactContext): View {
        return ComposeView(reactApplicationContext).apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                CameraScreen()
            }
        }
    }
}