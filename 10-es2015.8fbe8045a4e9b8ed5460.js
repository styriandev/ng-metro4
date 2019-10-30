(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DllT:function(t,n){t.exports='<h1>Get controls</h1>\n\n<app-doc-component header="Example"\n                   description="If you ever have the need to query the form-controls of your form for example, you can do this with the following method.">\n  <![CDATA[\n  <m4-input></m4-input>\\n\n  <m4-spinner></m4-spinner>\\n\n  <m4-slider></m4-slider>\\n\n  <m4-checkbox></m4-checkbox>\\n\n  <m4-switch></m4-switch>\\n\n  <m4-file-input></m4-file-input>\n  ]]>\n  <div lang>\n    <![CDATA[\n    \\f:(ts)\n    @ViewChildren(ControlBase) controls: QueryList<ControlBase<any>>;\n    ]]>\n  </div>\n</app-doc-component>\n\n<div class="remark info">\n  ng-metro4 provides a type alias <code>ControlBase</code> for all form-control elements to give you this option.\n</div>\n'},EpOr:function(t,n,e){"use strict";e.r(n);var i=e("8Y7J"),o=e("iInd"),r=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};let l=class{constructor(){}ngOnInit(){}};l=function(t,n,e,i){var o,r=arguments.length,l=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l}([Object(i.n)({selector:"app-get-controls",template:e("DllT"),styles:[e("h+iu")]}),r("design:paramtypes",[])],l);var c=e("2460"),a=function(t,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,n)};let s=class{constructor(){this.lists=c.g}ngOnInit(){}};const p=[{path:"get-controls",component:l},{path:"lists",component:s=function(t,n,e,i){var o,r=arguments.length,l=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l}([Object(i.n)({selector:"app-lists",template:e("oL2u"),styles:[e("HYNW")]}),a("design:paramtypes",[])],s)}];let f=class{};f=function(t,n,e,i){var o,r=arguments.length,l=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l}([Object(i.J)({imports:[o.f.forChild(p)],exports:[o.f]})],f);var y=e("PCNd");e.d(n,"MoreModule",function(){return u});let u=class{};u=function(t,n,e,i){var o,r=arguments.length,l=r<3?n:null===i?i=Object.getOwnPropertyDescriptor(n,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,n,e,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(n,e,l):o(n,e))||l);return r>3&&l&&Object.defineProperty(n,e,l),l}([Object(i.J)({declarations:[l,s],imports:[y.a,f]})],u)},HYNW:function(t,n){t.exports=""},"h+iu":function(t,n){t.exports=""},oL2u:function(t,n){t.exports='<h1>Lists</h1>\n\n<div class="remark success">\n  ng-metro4 provides dictionaries for all type of data. You can simply query information if you need them.\n</div>\n\n<h2>Available lists</h2>\n\n<ul>\n  <li>iconDictionary</li>\n  <li>iconCategoryDictionary</li>\n  <li>colorDictionary</li>\n  <li>animationDictionary</li>\n  <li>accentDictionary</li>\n  <li>inputDictionary</li>\n  <li>calendarButtonDictionary</li>\n  <li>widePointDictionary</li>\n  <li>positionHorizontalDictionary</li>\n  <li>spinnerButtonPositionDictionary</li>\n  <li>positionVerticalDictionary</li>\n  <li>positionBaseDictionary</li>\n  <li>positionDictionary</li>\n  <li>sizeDictionary</li>\n  <li>gravatarDictionary</li>\n  <li>activityDictionary</li>\n  <li>activityStyleDictionary</li>\n  <li>buttonShapeDictionary</li>\n  <li>buttonSpecialDictionary</li>\n  <li>popoverTriggerDictionary</li>\n  <li>progressTypeDictionary</li>\n  <li>roundTypeDictionary</li>\n  <li>thinDictionary</li>\n  <li>easingDictionary</li>\n</ul>\n\n<app-doc-component header="Example usage" [values]="{ lists: lists }">\n  <![CDATA[\n  <span [innerHTML]="lists.colors() | json"></span>\n  ]]>\n</app-doc-component>\n'}}]);