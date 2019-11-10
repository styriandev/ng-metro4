(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{DllT:function(n,t){n.exports='<h1>Get controls</h1>\r\n\r\n<app-doc-component header="Example"\r\n                   description="If you ever have the need to query the form-controls of your form for example, you can do this with the following method.">\r\n  <![CDATA[\r\n  <m4-input></m4-input>\\n\r\n  <m4-spinner></m4-spinner>\\n\r\n  <m4-slider></m4-slider>\\n\r\n  <m4-checkbox></m4-checkbox>\\n\r\n  <m4-switch></m4-switch>\\n\r\n  <m4-file-input></m4-file-input>\r\n  ]]>\r\n  <div lang>\r\n    <![CDATA[\r\n    \\f:(ts)\r\n    @ViewChildren(ControlBase) controls: QueryList<ControlBase<any>>;\r\n    ]]>\r\n  </div>\r\n</app-doc-component>\r\n\r\n<div class="remark info">\r\n  ng-metro4 provides a type alias <code>ControlBase</code> for all form-control elements to give you this option.\r\n</div>\r\n'},EpOr:function(n,t,e){"use strict";e.r(t);var i=e("CcnG"),r=e("ZYCi"),o=function(n,t,e,i){var r,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,t,e,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(c=(o<3?r(c):o>3?r(t,e,c):r(t,e))||c);return o>3&&c&&Object.defineProperty(t,e,c),c},c=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},l=function(){function n(){}return n.prototype.ngOnInit=function(){},n=o([Object(i.n)({selector:"app-get-controls",template:e("DllT"),styles:[e("h+iu")]}),c("design:paramtypes",[])],n)}(),a=e("UTH0"),p=function(n,t,e,i){var r,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,t,e,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(c=(o<3?r(c):o>3?r(t,e,c):r(t,e))||c);return o>3&&c&&Object.defineProperty(t,e,c),c},s=function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)},f=function(){function n(){this.lists=a.g}return n.prototype.ngOnInit=function(){},n=p([Object(i.n)({selector:"app-lists",template:e("oL2u"),styles:[e("HYNW")]}),s("design:paramtypes",[])],n)}(),u=function(n,t,e,i){var r,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,t,e,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(c=(o<3?r(c):o>3?r(t,e,c):r(t,e))||c);return o>3&&c&&Object.defineProperty(t,e,c),c},y=[{path:"get-controls",component:l},{path:"lists",component:f}],d=function(){function n(){}return n=u([Object(i.J)({imports:[r.f.forChild(y)],exports:[r.f]})],n)}(),m=e("PCNd");e.d(t,"MoreModule",function(){return D});var h=function(n,t,e,i){var r,o=arguments.length,c=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(n,t,e,i);else for(var l=n.length-1;l>=0;l--)(r=n[l])&&(c=(o<3?r(c):o>3?r(t,e,c):r(t,e))||c);return o>3&&c&&Object.defineProperty(t,e,c),c},D=function(){function n(){}return n=h([Object(i.J)({declarations:[l,f],imports:[m.a,d]})],n)}()},HYNW:function(n,t){n.exports=""},"h+iu":function(n,t){n.exports=""},oL2u:function(n,t){n.exports='<h1>Lists</h1>\r\n\r\n<div class="remark success">\r\n  ng-metro4 provides dictionaries for all type of data. You can simply query information if you need them.\r\n</div>\r\n\r\n<h2>Available lists</h2>\r\n\r\n<ul>\r\n  <li>iconDictionary</li>\r\n  <li>iconCategoryDictionary</li>\r\n  <li>colorDictionary</li>\r\n  <li>animationDictionary</li>\r\n  <li>accentDictionary</li>\r\n  <li>inputDictionary</li>\r\n  <li>calendarButtonDictionary</li>\r\n  <li>widePointDictionary</li>\r\n  <li>positionHorizontalDictionary</li>\r\n  <li>spinnerButtonPositionDictionary</li>\r\n  <li>positionVerticalDictionary</li>\r\n  <li>positionBaseDictionary</li>\r\n  <li>positionDictionary</li>\r\n  <li>sizeDictionary</li>\r\n  <li>gravatarDictionary</li>\r\n  <li>activityDictionary</li>\r\n  <li>activityStyleDictionary</li>\r\n  <li>buttonShapeDictionary</li>\r\n  <li>buttonSpecialDictionary</li>\r\n  <li>popoverTriggerDictionary</li>\r\n  <li>progressTypeDictionary</li>\r\n  <li>roundTypeDictionary</li>\r\n  <li>thinDictionary</li>\r\n  <li>easingDictionary</li>\r\n</ul>\r\n\r\n<app-doc-component header="Example usage" [values]="{ lists: lists }">\r\n  <![CDATA[\r\n  <span [innerHTML]="lists.colors() | json"></span>\r\n  ]]>\r\n</app-doc-component>\r\n'}}]);