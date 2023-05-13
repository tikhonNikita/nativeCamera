//
//  RNTMapManager.m
//  nativeCamera
//
//  Created by Nikita Tikhonov on 04.05.2023.
//

#import <Foundation/Foundation.h>


#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE(RNTMap)

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
