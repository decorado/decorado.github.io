(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{"2jjj":function(l,n,e){"use strict";e.r(n);var u=e("CcnG"),t=function(){},o=e("pMnS"),a=e("ZYCi"),d=e("Ip0R"),s=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),r=u["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function i(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["How to create and maintain translation keys"])),(l()(),u["\u0275ted"](-1,null,[" Translation keys should be created using the following rules: "])),(l()(),u["\u0275eld"](3,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Always in English"])),(l()(),u["\u0275ted"](-1,null,["\nEnglish is our reference so the key should always be in English: "])),(l()(),u["\u0275eld"](6,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](7,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Name = Nome"])),(l()(),u["\u0275eld"](9,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Best_Regards = Melhores cumprimentos"])),(l()(),u["\u0275eld"](11,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Same case"])),(l()(),u["\u0275ted"](-1,null,["\nThe key should have the same case as the phrase: "])),(l()(),u["\u0275eld"](14,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](15,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Best_Regards = Best Regards"])),(l()(),u["\u0275eld"](17,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Best_regards = Best regards"])),(l()(),u["\u0275eld"](19,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Underline as space"])),(l()(),u["\u0275ted"](-1,null,["\nUse underline to represent spaces (as there is no word that uses underline) "])),(l()(),u["\u0275eld"](22,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](23,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Best_Regards = Best Regards"])),(l()(),u["\u0275eld"](25,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Welcome_to_Decora = Welcome to Decora"])),(l()(),u["\u0275eld"](27,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Hiphen as hiphen"])),(l()(),u["\u0275ted"](-1,null,["\nHiphen should be use for represent hiphen only and never to represent spaces "])),(l()(),u["\u0275eld"](30,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](31,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Send_e-mail = Send e-mail"])),(l()(),u["\u0275eld"](33,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["UPPERCASE keys are only for keys provided by back-end"])),(l()(),u["\u0275ted"](-1,null,[" Regular words are not written in uppercase and than should be the keys. The only exceptions are for those keys returned by the back-end that should have a reference in the translation files. "])),(l()(),u["\u0275eld"](36,0,null,null,4,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](37,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["DONE = Done"])),(l()(),u["\u0275eld"](39,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["WAITING_QA = Waiting qa"])),(l()(),u["\u0275eld"](41,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Button should use UPPERCASED values"])),(l()(),u["\u0275ted"](-1,null,[" For buttons we can use the regular version and apply the pipe/class uppercase to transform it to the uppercase version "])),(l()(),u["\u0275eld"](44,0,null,null,2,"ul",[],null,null,null,null,null)),(l()(),u["\u0275eld"](45,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Send_e-mail = Send e-mail would become SEND E-MAIL when used with the uppercase pipe/class"])),(l()(),u["\u0275eld"](47,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Always modify both files"])),(l()(),u["\u0275ted"](-1,null,["\nAlways create/remove the keys in all language files to avoid differences and remove garbage.\n"])),(l()(),u["\u0275eld"](50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["\nIt is a best practice to edit all language files even in development. This way you avoid missing some file and ensure the files have the same keys of each other. "])),(l()(),u["\u0275eld"](52,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),u["\u0275ted"](-1,null,["Use the Object Sort"])),(l()(),u["\u0275ted"](-1,null,["\nAlways use the "])),(l()(),u["\u0275eld"](55,0,null,null,2,"a",[["class","dec-color-accent"],["routerLink","/tools/object-sort"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u["\u0275nov"](l,56).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t},null,null)),u["\u0275did"](56,671744,null,0,a.o,[a.l,a.a,d.LocationStrategy],{routerLink:[0,"routerLink"]},null),(l()(),u["\u0275ted"](-1,null,["Object Sort"])),(l()(),u["\u0275ted"](-1,null,[" function to sort the keys to make it easy for everyone to find the needed key. "]))],function(l,n){l(n,56,0,"/tools/object-sort")},function(l,n){l(n,55,0,u["\u0275nov"](n,56).target,u["\u0275nov"](n,56).href)})}var c=u["\u0275ccf"]("app-translation",s,function(l){return u["\u0275vid"](0,[(l()(),u["\u0275eld"](0,0,null,null,1,"app-translation",[],null,null,null,i,r)),u["\u0275did"](1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),h=function(){};e.d(n,"TranslationModuleNgFactory",function(){return p});var p=u["\u0275cmf"](t,[],function(l){return u["\u0275mod"]([u["\u0275mpd"](512,u.ComponentFactoryResolver,u["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,c]],[3,u.ComponentFactoryResolver],u.NgModuleRef]),u["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[u.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),u["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),u["\u0275mpd"](1073742336,a.p,a.p,[[2,a.v],[2,a.l]]),u["\u0275mpd"](1073742336,h,h,[]),u["\u0275mpd"](1073742336,t,t,[]),u["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:s}]]},[])])})}}]);