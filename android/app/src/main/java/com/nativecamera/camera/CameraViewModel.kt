package com.nativecamera.camera

import androidx.lifecycle.ViewModel
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

class CameraViewModel: ViewModel() {
    val _state  = MutableStateFlow(CameraState(test = "test"))
    val state:StateFlow<CameraState> = _state.asStateFlow()
    fun changeTest() {
        _state.value = _state.value.copy(test = "test2")
    }
}