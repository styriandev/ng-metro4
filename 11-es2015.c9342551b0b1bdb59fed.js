(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"17IC":function(t,e,n){"use strict";n.r(e),e.default='<h1>Lists</h1>\n\n<div class="remark success">\n  ng-metro4 provides dictionaries for all type of data. You can simply query information if you need them.\n</div>\n\n<h2>Available lists</h2>\n\n<ul>\n  <li>iconDictionary</li>\n  <li>iconCategoryDictionary</li>\n  <li>colorDictionary</li>\n  <li>animationDictionary</li>\n  <li>accentDictionary</li>\n  <li>inputDictionary</li>\n  <li>calendarButtonDictionary</li>\n  <li>widePointDictionary</li>\n  <li>positionHorizontalDictionary</li>\n  <li>spinnerButtonPositionDictionary</li>\n  <li>positionVerticalDictionary</li>\n  <li>positionBaseDictionary</li>\n  <li>positionDictionary</li>\n  <li>sizeDictionary</li>\n  <li>gravatarDictionary</li>\n  <li>activityDictionary</li>\n  <li>activityStyleDictionary</li>\n  <li>buttonShapeDictionary</li>\n  <li>buttonSpecialDictionary</li>\n  <li>popoverTriggerDictionary</li>\n  <li>progressTypeDictionary</li>\n  <li>roundTypeDictionary</li>\n  <li>thinDictionary</li>\n  <li>easingDictionary</li>\n</ul>\n\n<app-doc-component header="Example usage" [values]="{ lists: lists }">\n  <![CDATA[\n  <span [innerHTML]="lists.colors() | json"></span>\n  ]]>\n</app-doc-component>\n'},Eipx:function(t,e,n){"use strict";n.r(e),e.default='<h1>Get controls</h1>\n\n<app-doc-component header="Example"\n                   description="If you ever have the need to query the form-controls of your form for example, you can do this with the following method.">\n  <![CDATA[\n  <m4-input></m4-input>\\n\n  <m4-spinner></m4-spinner>\\n\n  <m4-slider></m4-slider>\\n\n  <m4-checkbox></m4-checkbox>\\n\n  <m4-switch></m4-switch>\\n\n  <m4-file-input></m4-file-input>\n  ]]>\n  <div lang>\n    <![CDATA[\n    \\f:(ts)\n    @ViewChildren(ControlBase) controls: QueryList<ControlBase<any>>;\n    ]]>\n  </div>\n</app-doc-component>\n\n<div class="remark info">\n  ng-metro4 provides a type alias <code>ControlBase</code> for all form-control elements to give you this option.\n</div>\n'},EpOr:function(t,e,n){"use strict";n.r(e);var i=n("fXoL"),o=n("tyNb"),r=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(t){return t&&t.__esModule?t:{default:t}};let c=class{constructor(){}ngOnInit(){}};c=function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l}([Object(i.n)({selector:"app-get-controls",template:l(n("Eipx")).default,styles:[l(n("h+iu")).default]}),r("design:paramtypes",[])],c);var a=n("2460"),s=function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(t){return t&&t.__esModule?t:{default:t}};let p=class{constructor(){this.lists=a.g}ngOnInit(){}};p=function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l}([Object(i.n)({selector:"app-lists",template:f(n("17IC")).default,styles:[f(n("HYNW")).default]}),s("design:paramtypes",[])],p);const u=[{path:"get-controls",component:c},{path:"lists",component:p}];let y=class{};y=function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l}([Object(i.L)({imports:[o.f.forChild(u)],exports:[o.f]})],y);var d=n("PCNd");n.d(e,"MoreModule",(function(){return m}));let m=class{};m=function(t,e,n,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,i);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(l=(r<3?o(l):r>3?o(e,n,l):o(e,n))||l);return r>3&&l&&Object.defineProperty(e,n,l),l}([Object(i.L)({declarations:[c,p],imports:[d.a,y]})],m)},HYNW:function(t,e,n){"use strict";n.r(e),e.default=""},"h+iu":function(t,e,n){"use strict";n.r(e),e.default=""}}]);