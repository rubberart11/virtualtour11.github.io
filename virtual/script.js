(function(){
    var script = {
 "start": "this.playAudioList([this.audio_B0DB17FB_A779_F9D6_41DE_92D8C4765C66]); this.init(); this.syncPlaylists([this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist,this.mainPlayList]); this.playList_DD963973_D335_6097_41E1_54484792E394.set('selectedIndex', 0)",
 "vrPolyfillScale": 0.5,
 "data": {
  "name": "Player43899"
 },
 "children": [
  "this.MainViewer",
  {
   "layout": "horizontal",
   "children": [
    "this.Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F"
   ],
   "scrollBarWidth": 10,
   "left": "0%",
   "backgroundOpacity": 0,
   "width": "100%",
   "paddingBottom": 0,
   "borderRadius": 0,
   "paddingRight": 0,
   "overflow": "scroll",
   "paddingLeft": 0,
   "borderSize": 0,
   "verticalAlign": "middle",
   "minHeight": 1,
   "propagateClick": false,
   "bottom": "0%",
   "scrollBarColor": "#000000",
   "horizontalAlign": "center",
   "minWidth": 1,
   "height": 142,
   "scrollBarVisible": "rollOver",
   "gap": 10,
   "scrollBarMargin": 2,
   "scrollBarOpacity": 0.5,
   "contentOpaque": false,
   "paddingTop": 0,
   "class": "Container",
   "shadow": false,
   "data": {
    "name": "Container44746"
   }
  },
  "this.MapViewer",
  "this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5",
  "this.IconButton_DE7EF478_D143_2A14_41D4_672EC7D0B517",
  "this.IconButton_DE82CF8F_D147_16B5_41E4_9DA8FC1E4A16"
 ],
 "id": "rootPlayer",
 "layout": "absolute",
 "width": "100%",
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "visible",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundPreloadEnabled": true,
 "buttonToggleMute": "this.IconButton_51591DCE_5F03_66DC_41D1_463245584CF7",
 "definitions": [{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "x": 517.52,
   "angle": 22.14,
   "y": 330.57,
   "class": "PanoramaMapLocation"
  }
 ],
 "id": "panorama_AC22C048_A74B_7645_41E4_106B265AA400",
 "hfov": 360,
 "overlays": [
  "this.overlay_B54AF5F7_A749_39DF_41C1_75A3A864A5B9",
  "this.overlay_B3201C25_A749_6E72_41D7_7AB37421D38C",
  "this.overlay_B3B49D88_A74F_2E32_41D5_E5F65AA7DFB5"
 ],
 "label": "PANO_20220320_155213_10",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.75,
   "yaw": 39.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC"
  },
  {
   "backwardYaw": 141.94,
   "yaw": -37.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -139.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DC3429F0_D335_6391_41D2_0BA27E3A96C1",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "x": 357.3,
   "angle": 178.45,
   "y": 477.1,
   "class": "PanoramaMapLocation"
  }
 ],
 "id": "panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC",
 "hfov": 360,
 "overlays": [
  "this.overlay_B5E31969_A74B_56F3_41DB_E807A86FA0FC",
  "this.overlay_B6B56E8D_A74B_EA32_41C5_D7106BEC54F9"
 ],
 "label": "PANO_20220320_155932_13",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 39.92,
   "yaw": -82.75,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400"
  },
  {
   "backwardYaw": -2.87,
   "yaw": -0.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DD833993_D335_6390_4182_EE32861D9841",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -140.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DD98D983_D335_6077_41E0_0ED6EA161C72",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "audio": {
  "mp3Url": "media/audio_B0DB17FB_A779_F9D6_41DE_92D8C4765C66.mp3",
  "oggUrl": "media/audio_B0DB17FB_A779_F9D6_41DE_92D8C4765C66.ogg",
  "class": "AudioResource"
 },
 "data": {
  "label": "X2Download.com - Bali World Music, Gus Teja, Hero (64 kbps)"
 },
 "id": "audio_B0DB17FB_A779_F9D6_41DE_92D8C4765C66",
 "class": "MediaAudio",
 "autoplay": true
},
{
 "buttonZoomIn": "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
 "viewerArea": "this.MapViewer",
 "buttonZoomOut": "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer",
 "movementMode": "constrained"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -38.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DDFF19B2_D335_6391_41DC_9FE8770BEF4F",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "x": 357.72,
   "angle": 0,
   "y": 672.22,
   "class": "PanoramaMapLocation"
  }
 ],
 "id": "panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D",
 "hfov": 360,
 "overlays": [
  "this.overlay_B610E661_A759_DAF2_41E0_CCF9996BC97B",
  "this.overlay_B3A59A8C_A759_2A31_41DD_60461680A430",
  "this.overlay_B6FE1102_A757_5631_41D7_3117908DF9A9"
 ],
 "label": "PANO_20220320_155500_11",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.45,
   "yaw": -2.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC"
  },
  {
   "backwardYaw": -100.67,
   "yaw": 40.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DDE0A9C1_D335_63F3_41E7_A775409FFAEA",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 97.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DD88E9A2_D335_63B1_41D4_CD19FEECF247",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 142.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DDD379D1_D335_6393_41E6_5D41E0E108DF",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 179.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DC262A00_D335_6071_41C8_EEA4BF75E868",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC22C048_A74B_7645_41E4_106B265AA400_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "buttonPause": "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
 "buttonZoomIn": "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
 "viewerArea": "this.MainViewer",
 "buttonZoomOut": "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
 "buttonRestart": "this.IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "buttonPlayLeft": "this.IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
 "mouseControlMode": "drag_acceleration",
 "buttonMoveRight": "this.IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
 "touchControlMode": "drag_rotation",
 "buttonMoveLeft": "this.IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
 "displayPlaybackBar": true,
 "buttonMoveUp": "this.IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244",
 "buttonMoveDown": "this.IconButton_51591DCE_5F03_66DC_417A_1D999521FA63",
 "buttonPlayRight": "this.IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
 "gyroscopeVerticalDraggingEnabled": true
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_B4920673_A74E_DAD6_41E4_71917FE5305E",
 "width": 400,
 "paddingBottom": 0,
 "footerBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconWidth": 12,
 "modal": true,
 "backgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 600,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "headerPaddingLeft": 10,
 "titleTextDecoration": "none",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "title": "BALE DANGIN",
 "gap": 10,
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.4vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "children": [
  "this.htmlText_B48DD673_A74E_DAD6_41E0_D72078BEC8D9",
  "this.image_uidDDA8B973_D335_6097_41E9_714C6E4CA8DA_1"
 ],
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titleFontWeight": "bold",
 "overflow": "scroll",
 "propagateClick": false,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "horizontalAlign": "center",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial Black",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "closeButtonBackgroundColorRatios": [],
 "class": "Window",
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "data": {
  "name": "Window16464"
 }
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "x": 709.07,
   "angle": 0,
   "y": 649.89,
   "class": "PanoramaMapLocation"
  }
 ],
 "id": "panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6",
 "hfov": 360,
 "overlays": [
  "this.overlay_B3554F09_A749_EA32_41B4_3A667DC55AB0",
  "this.overlay_B49C6BEB_A749_69F7_41D4_1F39EE501119"
 ],
 "label": "PANO_20220320_155701_12",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -2.61,
   "yaw": -1.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456"
  },
  {
   "backwardYaw": 40.7,
   "yaw": -100.67,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "items": [
  {
   "camera": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_camera",
   "media": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_camera",
   "media": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400_camera",
   "media": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_camera",
   "media": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "camera": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_camera",
   "media": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist",
 "class": "PlayList"
},
{
 "duration": 5000,
 "height": 4032,
 "label": "IMG_20220317_112256",
 "id": "photo_B50097D1_A757_59D3_41E1_B411290C72FD",
 "class": "Photo",
 "width": 3024,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/photo_B50097D1_A757_59D3_41E1_B411290C72FD.jpg"
   }
  ]
 },
 "thumbnailUrl": "media/photo_B50097D1_A757_59D3_41E1_B411290C72FD_t.jpg"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 177.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DDC4C9E1_D335_63B0_41E2_181E79819B6B",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "fieldOfViewOverlayInsideColor": "#33FF00",
 "fieldOfViewOverlayInsideOpacity": 0.44,
 "label": "mini-map",
 "id": "map_AB27593E_A749_F63D_41E0_98D5D434A61D",
 "overlays": [
  "this.overlay_A92E4230_A759_3A51_41D0_843EDA443C45",
  "this.overlay_A8CA47D4_A75B_39D2_41E1_611B7C191967",
  "this.overlay_A9BA9A21_A75B_2A73_41E2_9FECEEC513BC",
  "this.overlay_A8EA76A5_A75A_DA72_41E3_26370C14326B",
  "this.overlay_A8964738_A759_FA52_41C9_1D64500368B1"
 ],
 "width": 1000,
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D.png",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 900
   },
   {
    "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_lq.png",
    "width": 269,
    "tags": "preload",
    "class": "ImageResourceLevel",
    "height": 243
   }
  ]
 },
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.11,
 "thumbnailUrl": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_t.png",
 "initialZoomFactor": 1,
 "fieldOfViewOverlayOutsideColor": "#00FF00",
 "scaleMode": "fit_inside",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 900
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 79.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_DC160A10_D335_6090_41A7_C5970ADE43F6",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "footerHeight": 5,
 "shadowBlurRadius": 6,
 "id": "window_B40F481A_A757_3651_41BD_2172AFA4BAEA",
 "width": 400,
 "paddingBottom": 0,
 "footerBackgroundColorDirection": "vertical",
 "scrollBarWidth": 10,
 "closeButtonBorderRadius": 11,
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyPaddingLeft": 5,
 "closeButtonPressedIconColor": "#FFFFFF",
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 20,
 "headerBackgroundOpacity": 1,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonIconWidth": 12,
 "modal": true,
 "backgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "titlePaddingBottom": 5,
 "minWidth": 20,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "height": 600,
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "headerPaddingLeft": 10,
 "titleTextDecoration": "none",
 "bodyPaddingBottom": 5,
 "headerVerticalAlign": "middle",
 "title": "GAPURA",
 "gap": 10,
 "backgroundColor": [],
 "closeButtonIconHeight": 12,
 "shadowHorizontalLength": 3,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "bodyBackgroundColorDirection": "vertical",
 "headerPaddingBottom": 10,
 "paddingTop": 0,
 "titleFontSize": "1.4vmin",
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "closeButtonBackgroundColor": [],
 "veilColorRatios": [
  0,
  1
 ],
 "headerBackgroundColorDirection": "vertical",
 "shadow": true,
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "titlePaddingTop": 5,
 "veilColorDirection": "horizontal",
 "layout": "vertical",
 "children": [
  "this.htmlText_B401481A_A757_3651_4196_C136C4BF9098",
  "this.image_uidDDAA3973_D335_6097_41DF_EFA5307D8E2D_1"
 ],
 "veilOpacity": 0.4,
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "shadowVerticalLength": 0,
 "shadowColor": "#000000",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingRight": 0,
 "closeButtonIconLineWidth": 2,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonRollOverIconColor": "#FFFFFF",
 "titleFontWeight": "bold",
 "overflow": "scroll",
 "propagateClick": false,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titlePaddingLeft": 5,
 "headerBorderColor": "#000000",
 "horizontalAlign": "center",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "titleFontFamily": "Arial Black",
 "closeButtonIconColor": "#000000",
 "scrollBarMargin": 2,
 "closeButtonBackgroundColorRatios": [],
 "class": "Window",
 "contentOpaque": false,
 "headerPaddingTop": 10,
 "headerBorderSize": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "bodyPaddingRight": 5,
 "titlePaddingRight": 5,
 "data": {
  "name": "Window10394"
 }
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_DD961973_D335_6097_41C6_F17EA628C2E2",
 "class": "PlayList"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_DD963973_D335_6097_41E1_54484792E394",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/f/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/u/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/r/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/b/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/d/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/l/0/{row}_{column}.jpg",
      "rowCount": 7,
      "colCount": 7,
      "width": 3584,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 3584
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_t.jpg"
  }
 ],
 "mapLocations": [
  {
   "map": "this.map_AB27593E_A749_F63D_41E0_98D5D434A61D",
   "x": 704.52,
   "angle": 175.19,
   "y": 424.21,
   "class": "PanoramaMapLocation"
  }
 ],
 "id": "panorama_AC22F38B_A74A_DADB_41DE_48EC29259456",
 "hfov": 360,
 "overlays": [
  "this.overlay_B4AE2001_A74B_7633_41D7_52D5F98FFD68",
  "this.overlay_B3EE0541_A74B_DE32_4198_7DF9638C7C66"
 ],
 "label": "PANO_20220320_154742_8",
 "pitch": 0,
 "thumbnailUrl": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -1.92,
   "yaw": -2.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6"
  },
  {
   "backwardYaw": -37.37,
   "yaw": 141.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400"
  }
 ],
 "vfov": 180,
 "hfovMax": 130,
 "partial": false,
 "class": "Panorama"
},
{
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_camera",
 "class": "PanoramaCamera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ]
 }
},
{
 "items": [
  "this.PanoramaPlayListItem_DD970973_D335_6097_41E3_696C35086B2A",
  "this.PanoramaPlayListItem_DD979973_D335_6097_41DE_DABC9B3D9769",
  "this.PanoramaPlayListItem_DD940973_D335_6097_41E1_67FC855B82C3",
  "this.PanoramaPlayListItem_DD946973_D335_6097_41E7_23184E2C0C1C",
  "this.PanoramaPlayListItem_DD94C973_D335_6097_41D2_6B70538595A1"
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 4,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 50,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 100,
 "playbackBarBottom": 10,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "height": "100%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 20,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 4,
 "shadow": false,
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "layout": "horizontal",
 "children": [
  "this.IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
  "this.IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB",
  "this.IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
  "this.IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
  "this.Container_51591DCE_5F03_66DC_41B6_F31ADEE62661",
  "this.IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
  "this.IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
  "this.IconButton_51591DCE_5F03_66DC_41D1_463245584CF7",
  "this.IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03"
 ],
 "id": "Container_51591DCE_5F03_66DC_41D4_A095ADE9DE4F",
 "backgroundOpacity": 0.42,
 "width": 416,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 7,
 "paddingRight": 0,
 "overflow": "hidden",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 20,
 "propagateClick": false,
 "backgroundColorRatios": [
  0.61
 ],
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 392,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarVisible": "rollOver",
 "gap": 4,
 "backgroundColorDirection": "vertical",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "shadow": false,
 "height": "100%",
 "data": {
  "name": "Container11537"
 }
},
{
 "toolTipPaddingRight": 6,
 "data": {
  "name": "mini map"
 },
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingBottom": 0,
 "progressBorderRadius": 4,
 "right": "0.22%",
 "width": "20.38%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBorderRadius": 3,
 "progressBarBorderColor": "#000000",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#AAAAAA",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarHeadHeight": 30,
 "playbackBarHeadShadowVerticalLength": 0,
 "minWidth": 1,
 "playbackBarBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "toolTipBorderColor": "#767676",
 "displayTooltipInTouchScreens": true,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "height": "30.017%",
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 20,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "transitionDuration": 500,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "paddingTop": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 4,
 "shadow": false,
 "playbackBarBorderRadius": 4,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "toolTipFontStyle": "normal",
 "paddingRight": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 10,
 "playbackBarBorderSize": 2,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0.33%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 10,
 "transitionMode": "blending",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 20,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "class": "ViewerArea",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "id": "ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5",
 "left": "0%",
 "width": 241,
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#FFFFFF",
 "selectedItemLabelFontWeight": "bold",
 "playList": "this.ThumbnailList_AA12FF1D_A74F_2BFF_41DD_7FC7A9C095D5_playlist",
 "borderRadius": 5,
 "itemLabelGap": 8,
 "itemBackgroundColorDirection": "vertical",
 "paddingLeft": 20,
 "borderSize": 0,
 "verticalAlign": "top",
 "minHeight": 20,
 "itemThumbnailShadowColor": "#000000",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemPaddingBottom": 3,
 "itemThumbnailHeight": 75,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarColor": "#FFFFFF",
 "minWidth": 20,
 "itemLabelFontStyle": "normal",
 "selectedItemLabelFontColor": "#FFCC00",
 "backgroundColor": [
  "#000000"
 ],
 "itemOpacity": 1,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "gap": 13,
 "scrollBarOpacity": 0.5,
 "itemMode": "normal",
 "height": "20.572%",
 "itemLabelFontFamily": "Arial",
 "itemThumbnailWidth": 75,
 "paddingTop": 10,
 "itemThumbnailShadowOpacity": 0.27,
 "shadow": false,
 "itemHorizontalAlign": "center",
 "itemBorderRadius": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "layout": "vertical",
 "itemThumbnailShadow": true,
 "itemThumbnailShadowSpread": 1,
 "backgroundOpacity": 0.33,
 "itemBackgroundOpacity": 0,
 "itemThumbnailBorderRadius": 5,
 "paddingRight": 20,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "propagateClick": false,
 "itemBackgroundColorRatios": [],
 "bottom": "0%",
 "horizontalAlign": "left",
 "rollOverItemBackgroundOpacity": 0,
 "itemThumbnailOpacity": 1,
 "rollOverItemLabelFontWeight": "bold",
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "itemThumbnailShadowVerticalLength": 3,
 "itemThumbnailShadowBlurRadius": 8,
 "class": "ThumbnailList",
 "itemVerticalAlign": "middle",
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "data": {
  "name": "ThumbnailList35762"
 }
},
{
 "maxHeight": 52,
 "maxWidth": 53,
 "id": "IconButton_DE7EF478_D143_2A14_41D4_672EC7D0B517",
 "backgroundOpacity": 0,
 "width": 53,
 "paddingBottom": 0,
 "right": "20.65%",
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 1,
 "propagateClick": false,
 "bottom": "32.01%",
 "verticalAlign": "middle",
 "horizontalAlign": "center",
 "minWidth": 1,
 "mode": "push",
 "height": 52,
 "click": "this.openLink('https://virtualtour11.github.io', '_top')",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_DE7EF478_D143_2A14_41D4_672EC7D0B517.png",
 "cursor": "hand",
 "data": {
  "name": "IconButton7640"
 }
},
{
 "id": "IconButton_DE82CF8F_D147_16B5_41E4_9DA8FC1E4A16",
 "left": "27.81%",
 "backgroundOpacity": 0,
 "width": 32,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_DE82CF8F_D147_16B5_41E4_9DA8FC1E4A16_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "bottom": "33.17%",
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 32,
 "click": "this.openLink('https://goo.gl/maps/YV2ZKjTexmRfLLtf8', '_blank')",
 "pressedIconURL": "skin/IconButton_DE82CF8F_D147_16B5_41E4_9DA8FC1E4A16_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_DE82CF8F_D147_16B5_41E4_9DA8FC1E4A16.png",
 "cursor": "hand",
 "data": {
  "name": "Button31989"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41D1_463245584CF7",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_463245584CF7_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_463245584CF7.png",
 "cursor": "hand",
 "data": {
  "name": "Button11548"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_B4920673_A74E_DAD6_41E4_71917FE5305E, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "bale dangin"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A58DF6_A777_E9DE_41E1_9B0BF9497C98",
   "yaw": 4.62,
   "pitch": 28.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 5.1
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 5.1,
   "yaw": 4.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 28.95
  }
 ],
 "id": "overlay_B54AF5F7_A749_39DF_41C1_75A3A864A5B9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC, this.camera_DD88E9A2_D335_63B1_41D4_CD19FEECF247); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "keluar rumah 1"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A51DF6_A777_E9DE_41CF_9BEE6992F685",
   "yaw": 39.92,
   "pitch": -24.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 30.81
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.81,
   "yaw": 39.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.86
  }
 ],
 "id": "overlay_B3201C25_A749_6E72_41D7_7AB37421D38C",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456, this.camera_DDFF19B2_D335_6391_41DC_9FE8770BEF4F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "masuk rumah 3"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A54DF6_A777_E9DE_41DF_12FF037ECA4F",
   "yaw": -37.37,
   "pitch": -22.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 29.96
  }
 ],
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 29.96,
   "yaw": -37.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.59
  }
 ],
 "id": "overlay_B3B49D88_A74F_2E32_41D5_E5F65AA7DFB5",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D, this.camera_DD833993_D335_6390_4182_EE32861D9841); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "keluar rumah"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A4FDF6_A777_E9DE_41C3_8783D9072795",
   "yaw": -0.45,
   "pitch": -41.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 27.56
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 27.56,
   "yaw": -0.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.54
  }
 ],
 "id": "overlay_B5E31969_A74B_56F3_41DB_E807A86FA0FC",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC22C048_A74B_7645_41E4_106B265AA400, this.camera_DD98D983_D335_6077_41E0_0ED6EA161C72); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "masuk rumah 2"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A44DF6_A777_E9DE_41D2_1C2F1AB4D64B",
   "yaw": -82.75,
   "pitch": -40.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 30.8
  }
 ],
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.8,
   "yaw": -82.75,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.43
  }
 ],
 "id": "overlay_B6B56E8D_A74B_EA32_41C5_D7106BEC54F9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D1_3D7BC0B88E03.png",
 "cursor": "hand",
 "data": {
  "name": "Button11549"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41C4_50743EFED275",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C4_50743EFED275.png",
 "cursor": "hand",
 "data": {
  "name": "Button11538"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC, this.camera_DC262A00_D335_6071_41C8_EEA4BF75E868); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "masuk rumah"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4D84DE7_A777_E9FF_41C8_63961AFFD704",
   "yaw": -2.87,
   "pitch": -3.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 19.3
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.3,
   "yaw": -2.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -3.71
  }
 ],
 "id": "overlay_B610E661_A759_DAF2_41E0_CCF9996BC97B",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6, this.camera_DC160A10_D335_6090_41A7_C5970ADE43F6); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "masuk merajan 1"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4D9ADE7_A777_E9FF_41B2_071EEA0BABE1",
   "yaw": 40.7,
   "pitch": -14.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 19.11
  }
 ],
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 19.11,
   "yaw": 40.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.6
  }
 ],
 "id": "overlay_B3A59A8C_A759_2A31_41DD_60461680A430",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showWindow(this.window_B40F481A_A757_3651_41BD_2172AFA4BAEA, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "gapura"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4D90DE7_A777_E9FF_41D9_7EE0D27B4780",
   "yaw": -2.97,
   "pitch": 30.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 4.19
  }
 ],
 "data": {
  "label": "Info 02"
 },
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 4.19,
   "yaw": -2.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 30.85
  }
 ],
 "id": "overlay_B6FE1102_A757_5631_41D7_3117908DF9A9",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "toggle",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6.png",
 "cursor": "hand",
 "data": {
  "name": "Button11544"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41BA_EA0B3C243BDB.png",
 "cursor": "hand",
 "data": {
  "name": "Button11539"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_419C_7D6D6CC8D05C.png",
 "cursor": "hand",
 "data": {
  "name": "Button11540"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41A2_85C1F5F35509.png",
 "cursor": "hand",
 "data": {
  "name": "Button11546"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41AA_3827647B13A5.png",
 "cursor": "hand",
 "data": {
  "name": "Button11541"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244.png",
 "cursor": "hand",
 "data": {
  "name": "Button11543"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_417A_1D999521FA63",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_417A_1D999521FA63.png",
 "cursor": "hand",
 "data": {
  "name": "Button11545"
 }
},
{
 "id": "IconButton_51591DCE_5F03_66DC_41C7_93849E226521",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_rollover.png",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "mode": "push",
 "height": 40,
 "pressedIconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521_pressed.png",
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "shadow": false,
 "iconURL": "skin/IconButton_51591DCE_5F03_66DC_41C7_93849E226521.png",
 "cursor": "hand",
 "data": {
  "name": "Button11547"
 }
},
{
 "id": "htmlText_B48DD673_A74E_DAD6_41E0_D72078BEC8D9",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "10%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "class": "HTMLText",
 "shadow": false,
 "data": {
  "name": "HTMLText16465"
 }
},
{
 "id": "image_uidDDA8B973_D335_6097_41E9_714C6E4CA8DA_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_B50097D1_A757_59D3_41E1_B411290C72FD.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "height": "89%",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "class": "Image",
 "shadow": false,
 "data": {
  "name": "Image2303"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456, this.camera_DDC4C9E1_D335_63B0_41E2_181E79819B6B); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "keluar merajan 1"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A63DF6_A777_E9DE_41BE_47D516202286",
   "yaw": -1.92,
   "pitch": -17.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 14.54
  }
 ],
 "data": {
  "label": "Arrow 06b"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 14.54,
   "yaw": -1.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.37
  }
 ],
 "id": "overlay_B3554F09_A749_EA32_41B4_3A667DC55AB0",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D, this.camera_DC3429F0_D335_6391_41D2_0BA27E3A96C1); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "keluar merajan 2"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A66DF6_A777_E9DE_41E3_10817A82AACB",
   "yaw": -100.67,
   "pitch": -16.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 16.7
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 16.7,
   "yaw": -100.67,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.25
  }
 ],
 "id": "overlay_B49C6BEB_A749_69F7_41D4_1F39EE501119",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 55.54,
  "x": 329.95,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_0_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 644.44,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 55.54,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "1"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 329.95,
  "y": 644.44,
  "class": "HotspotMapOverlayImage",
  "width": 55.54,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_0.png",
     "width": 55,
     "class": "ImageResourceLevel",
     "height": 55
    }
   ]
  },
  "height": 55.54
 },
 "useHandCursor": true,
 "id": "overlay_A92E4230_A759_3A51_41D0_843EDA443C45",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 48.41,
  "x": 333.09,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_1_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 452.9,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 48.41,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "2"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 333.09,
  "y": 452.9,
  "class": "HotspotMapOverlayImage",
  "width": 48.41,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_1.png",
     "width": 48,
     "class": "ImageResourceLevel",
     "height": 48
    }
   ]
  },
  "height": 48.41
 },
 "useHandCursor": true,
 "id": "overlay_A8CA47D4_A75B_39D2_41E1_611B7C191967",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 51.23,
  "x": 491.91,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_2_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 304.95,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 51.23,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "3"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 491.91,
  "y": 304.95,
  "class": "HotspotMapOverlayImage",
  "width": 51.23,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_2.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ]
  },
  "height": 51.23
 },
 "useHandCursor": true,
 "id": "overlay_A9BA9A21_A75B_2A73_41E2_9FECEEC513BC",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 54.7,
  "x": 677.17,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_3_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 396.86,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 54.7,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "4"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 677.17,
  "y": 396.86,
  "class": "HotspotMapOverlayImage",
  "width": 54.7,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_3.png",
     "width": 54,
     "class": "ImageResourceLevel",
     "height": 54
    }
   ]
  },
  "height": 54.7
 },
 "useHandCursor": true,
 "id": "overlay_A8EA76A5_A75A_DA72_41E3_26370C14326B",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "map": {
  "width": 51.48,
  "x": 683.33,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_4_map.gif",
     "width": 16,
     "class": "ImageResourceLevel",
     "height": 16
    }
   ]
  },
  "y": 624.15,
  "offsetY": 0,
  "class": "HotspotMapOverlayMap",
  "height": 51.48,
  "offsetX": 0
 },
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotMapOverlayArea",
   "toolTip": "5"
  }
 ],
 "data": {
  "label": "Image"
 },
 "image": {
  "x": 683.33,
  "y": 624.15,
  "class": "HotspotMapOverlayImage",
  "width": 51.48,
  "image": {
   "class": "ImageResource",
   "levels": [
    {
     "url": "media/map_AB27593E_A749_F63D_41E0_98D5D434A61D_HS_4.png",
     "width": 51,
     "class": "ImageResourceLevel",
     "height": 51
    }
   ]
  },
  "height": 51.48
 },
 "useHandCursor": true,
 "id": "overlay_A8964738_A759_FA52_41C9_1D64500368B1",
 "class": "AreaHotspotMapOverlay",
 "rollOverDisplay": false
},
{
 "id": "htmlText_B401481A_A757_3651_4196_C136C4BF9098",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 10,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "paddingLeft": 10,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "height": "10%",
 "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "paddingTop": 10,
 "class": "HTMLText",
 "shadow": false,
 "data": {
  "name": "HTMLText10395"
 }
},
{
 "id": "image_uidDDAA3973_D335_6097_41DF_EFA5307D8E2D_1",
 "backgroundOpacity": 0,
 "width": "100%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "media/photo_B50097D1_A757_59D3_41E1_B411290C72FD.jpg",
 "paddingLeft": 0,
 "borderSize": 0,
 "minHeight": 0,
 "propagateClick": false,
 "horizontalAlign": "center",
 "minWidth": 0,
 "height": "89%",
 "paddingTop": 0,
 "scaleMode": "fit_inside",
 "class": "Image",
 "shadow": false,
 "data": {
  "name": "Image2302"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6, this.camera_DDE0A9C1_D335_63F3_41E7_A775409FFAEA); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "masuk merajan 2"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A69DF6_A777_E9DE_41C0_08B4D95C3862",
   "yaw": -2.61,
   "pitch": -20.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100,
   "hfov": 30.51
  }
 ],
 "data": {
  "label": "Arrow 06a"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 30.51,
   "yaw": -2.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.99
  }
 ],
 "id": "overlay_B4AE2001_A74B_7633_41D7_52D5F98FFD68",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_AC22C048_A74B_7645_41E4_106B265AA400, this.camera_DDD379D1_D335_6393_41E6_5D41E0E108DF); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "toolTip": "keluar rumah 2"
  }
 ],
 "items": [
  {
   "image": "this.AnimatedImageResource_B4A6EDF6_A777_E9DE_41C7_9C8886EBF3A9",
   "yaw": 141.94,
   "pitch": -32.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "hfov": 25.94
  }
 ],
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "enabledInCardboard": true,
 "useHandCursor": true,
 "maps": [
  {
   "hfov": 25.94,
   "yaw": 141.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.06
  }
 ],
 "id": "overlay_B3EE0541_A74B_DE32_4198_7DF9638C7C66",
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false
},
{
 "camera": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_camera",
 "media": "this.panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_DD970973_D335_6097_41E3_696C35086B2A, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_DD970973_D335_6097_41E3_696C35086B2A",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_camera",
 "media": "this.panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_DD979973_D335_6097_41DE_DABC9B3D9769, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_DD979973_D335_6097_41DE_DABC9B3D9769",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400_camera",
 "media": "this.panorama_AC22C048_A74B_7645_41E4_106B265AA400",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_DD940973_D335_6097_41E1_67FC855B82C3, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 2, 3)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_DD940973_D335_6097_41E1_67FC855B82C3",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_camera",
 "media": "this.panorama_AC22F38B_A74A_DADB_41DE_48EC29259456",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_DD946973_D335_6097_41E7_23184E2C0C1C, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 3, 4)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_DD946973_D335_6097_41E7_23184E2C0C1C",
 "class": "PanoramaPlayListItem"
},
{
 "camera": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_camera",
 "media": "this.panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6",
 "end": "this.trigger('tourEnded')",
 "begin": "this.setMapLocation(this.PanoramaPlayListItem_DD94C973_D335_6097_41D2_6B70538595A1, this.MapViewerMapPlayer); this.setEndToItemIndex(this.mainPlayList, 4, 0)",
 "player": "this.MainViewerPanoramaPlayer",
 "id": "PanoramaPlayListItem_DD94C973_D335_6097_41D2_6B70538595A1",
 "class": "PanoramaPlayListItem"
},
{
 "layout": "vertical",
 "children": [
  "this.IconButton_51591DCE_5F03_66DC_41BF_A58F28B56244",
  "this.IconButton_51591DCE_5F03_66DC_41D7_1E28B681CAE6",
  "this.IconButton_51591DCE_5F03_66DC_417A_1D999521FA63"
 ],
 "id": "Container_51591DCE_5F03_66DC_41B6_F31ADEE62661",
 "backgroundOpacity": 0,
 "width": 40,
 "paddingBottom": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "paddingRight": 0,
 "overflow": "hidden",
 "paddingLeft": 0,
 "borderSize": 0,
 "verticalAlign": "middle",
 "minHeight": 20,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "horizontalAlign": "center",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "gap": 4,
 "scrollBarMargin": 2,
 "height": "100%",
 "contentOpaque": false,
 "paddingTop": 0,
 "class": "Container",
 "shadow": false,
 "data": {
  "name": "Container11542"
 }
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A58DF6_A777_E9DE_41E1_9B0BF9497C98",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_0_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A51DF6_A777_E9DE_41CF_9BEE6992F685",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A54DF6_A777_E9DE_41DF_12FF037ECA4F",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC22C048_A74B_7645_41E4_106B265AA400_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A4FDF6_A777_E9DE_41C3_8783D9072795",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A44DF6_A777_E9DE_41D2_1C2F1AB4D64B",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_ACC446E0_A74B_DA45_41D0_C8504DE78DCC_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4D84DE7_A777_E9FF_41C8_63961AFFD704",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4D9ADE7_A777_E9FF_41B2_071EEA0BABE1",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4D90DE7_A777_E9FF_41D9_7EE0D27B4780",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC8BAF66_A74B_6A4D_41B3_F389DEDD348D_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A63DF6_A777_E9DE_41BE_47D516202286",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A66DF6_A777_E9DE_41E3_10817A82AACB",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC20F331_A749_3BC7_418B_5787CD2E40A6_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A69DF6_A777_E9DE_41C0_08B4D95C3862",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "frameDuration": 41,
 "id": "AnimatedImageResource_B4A6EDF6_A777_E9DE_41C7_9C8886EBF3A9",
 "colCount": 4,
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_AC22F38B_A74A_DADB_41DE_48EC29259456_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
}],
 "scrollBarColor": "#000000",
 "desktopMipmappingEnabled": false,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "mouseWheelEnabled": true,
 "scripts": {
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "registerKey": function(key, value){  window[key] = value; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getKey": function(key){  return window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "unregisterKey": function(key){  delete window[key]; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "paddingTop": 0,
 "class": "Player",
 "shadow": false,
 "height": "100%",
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
