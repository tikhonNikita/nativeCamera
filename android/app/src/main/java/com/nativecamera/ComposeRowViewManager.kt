package com.nativecamera

import android.view.View
import androidx.compose.material.MaterialTheme
import androidx.compose.ui.platform.ComposeView
import androidx.compose.ui.platform.ViewCompositionStrategy
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class ComposeRowViewManager: SimpleViewManager<View>() {
    override fun getName(): String = "ComposeRowView"

    override fun createViewInstance(reactApplicationContext: ThemedReactContext): View {
        return ComposeView(reactApplicationContext).apply {
            setViewCompositionStrategy(ViewCompositionStrategy.DisposeOnViewTreeLifecycleDestroyed)
            setContent {
                MaterialTheme {
                    MyComposeText()
                }
            }
        }
    }
}