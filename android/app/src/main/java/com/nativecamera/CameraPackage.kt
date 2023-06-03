package com.nativecamera

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.nativecamera.camera.CameraViewManager

class CameraPackage: ReactPackage {
    override fun createNativeModules(p0: ReactApplicationContext): List<NativeModule> {
        return emptyList()
    }

    override fun createViewManagers(p0: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(CameraViewManager())
    }
}