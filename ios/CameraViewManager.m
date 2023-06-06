//
//  Camera.m
//  nativeCamera
//
//  Created by Nikita Tikhonov on 06.05.2023.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import <React/RCTViewManager.h>


@interface RCT_EXTERN_REMAP_MODULE(ArCamera, CameraViewManager, RCTViewManager)
RCT_EXTERN_METHOD(sayHelloTo:(NSString)name resolve:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject)
RCT_EXPORT_VIEW_PROPERTY(onResultImageExported, RCTBubblingEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onImageCaptureError, RCTBubblingEventBlock)
RCT_EXTERN_METHOD(takePhoto)
@end

