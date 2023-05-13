//
//  CameraViewManager.swift
//  nativeCamera
//
//  Created by Nikita Tikhonov on 06.05.2023.
//

import Foundation

@objc(CameraViewManager)
final class CameraViewManager: RCTViewManager {
  
  private var cameraView: CameraView?
  
  @objc func sayHelloTo(_ name: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
      resolve("Hello, \(name)")
  }
  
  @objc func takePhoto() -> Void {
    if let camera = cameraView {
      camera.takePhoto()
    }
  }
  
  override func view() -> UIView! {
    cameraView = CameraView()
    return cameraView
  }
  
  @objc override static func requiresMainQueueSetup() -> Bool {
      return false
  }
  
  
}

