(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"Mr+X":function(e,n,l){"use strict";l.d(n,"a",function(){return u}),l.d(n,"b",function(){return i});var t=l("CcnG"),u=(l("SMsm"),l("Fzqc"),l("Wf4p"),t["\u0275crt"]({encapsulation:2,styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1,1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],data:{}}));function i(e){return t["\u0275vid"](2,[t["\u0275ncd"](null,0)],null,null)}},T7ZM:function(e,n,l){"use strict";l.d(n,"a",function(){return t});var t=function(){function e(){var e=this;this.ensureTabName=function(){if(!e.name)throw new Error("DecTabComponentError: The <dec-tab> component must have an unique name. Please, ensure that you have passed an unique namme to the component.")}}return e.prototype.ngAfterViewInit=function(){this.ensureTabName()},e}()},WwSl:function(e,n,l){"use strict";l.d(n,"a",function(){return t});var t=function(){}},"gT+e":function(e,n,l){"use strict";l.d(n,"a",function(){return t});var t=function(){}},iAka:function(e,n,l){"use strict";var t=l("CcnG");l("T7ZM"),l.d(n,"a",function(){return u});var u=function(){function e(e,n){var l=this;this.route=e,this.router=n,this.persist=!0,this.destroyOnBlur=!1,this.padding=!0,this.activeTabChange=new t.EventEmitter,this.activatedTabs={},this.pathFromRoot="",this.ensureUniqueName=function(){if(!l.name)throw new Error("DecTabComponentError: The tab component must have an unique name. Please, ensure that you have passed an unique namme to the component.")},this.ensureUniqueTabNames=function(){return new Promise(function(e,n){var t={};l.tabs.toArray().forEach(function(e){if(t[e.name])throw new Error("DecTabComponentError: The <dec-tabs> component must have an unique name. The name "+e.name+" was used more than once.");t[e.name]=!0}),e()})},this.selectTab=function(e){l.tabs&&(l.activeTab=e,l.activatedTabs[e]=!0,l._activeTabObject=l.tabs.toArray().filter(function(n){return n.name===e})[0],l._activeTabIndex=l.tabs.toArray().indexOf(l._activeTabObject),l.activeTabChange.emit(e))}}return Object.defineProperty(e.prototype,"activeTab",{get:function(){return this._activeTab},set:function(e){e&&this._activeTab!==e&&(this._activeTab=e,this.persistTab(e))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeTabIndex",{get:function(){return this._activeTabIndex},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeTabObject",{get:function(){return this._activeTabObject},enumerable:!0,configurable:!0}),e.prototype.ngOnInit=function(){this.ensureUniqueName(),this.watchTabInUrlQuery()},e.prototype.ngAfterViewInit=function(){var e=this;this.ensureUniqueTabNames().then(function(){var n=Object.assign({},e.route.snapshot.queryParams);if(n&&n[e.componentTabName()]){var l=n[e.componentTabName()];e.selectTab(l)}else e.startSelectedTab()})},e.prototype.ngOnDestroy=function(){this.stopWatchingTabInUrlQuery()},e.prototype.shoulTabBeDisplayed=function(e){return this._activeTabObject===e||!this.destroyOnBlur&&this.activatedTabs[e.name]},e.prototype.onChangeTab=function(e){var n=this.tabs.toArray()[e.index];this.activeTab=n.name},e.prototype.parseTotal=function(e){return null!==e&&e>=0?e:"?"},e.prototype.reset=function(){var e=this;this.hidden=!0,setTimeout(function(){e.hidden=!1},10)},e.prototype.componentTabName=function(){return this.name+"-tab"},e.prototype.persistTab=function(e){if(this.persist){var n=Object.assign({},this.route.snapshot.queryParams);n[this.componentTabName()]=e,this.router.navigate(["."],{relativeTo:this.route,queryParams:n,replaceUrl:!0})}},e.prototype.startSelectedTab=function(){var e=this,n=this.activeTab||this.tabs.toArray()[0].name;setTimeout(function(){e.selectTab(n)},1)},e.prototype.watchTabInUrlQuery=function(){var e=this;this.queryParamsSubscription=this.route.queryParams.subscribe(function(n){var l=n[e.componentTabName()];e.selectTab(l)})},e.prototype.stopWatchingTabInUrlQuery=function(){this.queryParamsSubscription.unsubscribe()},e}()},tePd:function(e,n,l){"use strict";l.r(n);var t=l("CcnG"),u=function(){},i=l("pMnS"),o=l("ROxW"),r=l("wKc5"),d=l("mFVR"),a=l("TNlK"),c=l("9bNa"),m=l("vbVF"),s=l("ZYCi"),p=l("IciN"),k=l("LV51"),b=l("KMFf"),v=l("u3X1"),f=l("QI/u"),L=l("Mr+X"),h=l("SMsm"),y=l("OpP7"),g=l("jtiw"),R=l("AytR"),_=function(){function e(){}return e.admin_client_edit="admin.users.clienteditor.edituser",e.admin_client_delete="admin.users.clienteditor.deleteuser",e.admin_client_new="admin.users.clienteditor.newuser",e.admin_client_view="admin.users.clienteditor.view",e.admin_internal_edit="admin.users.usereditor.edituser",e.admin_internal_delete="admin.users.usereditor.deleteuser",e.admin_internal_new="admin.users.usereditor.newuser",e.admin_internal_view="admin.users.usereditor.view",e.admin_professional_edit="admin.users.professionaleditor.edituser",e.admin_professional_delete="admin.users.professionaleditor.deleteuser",e.admin_professional_new="admin.users.professionaleditor.newuser",e.admin_view=(e.admin_user_view=[e.admin_client_view,e.admin_internal_view,e.admin_professional_view="admin.users.professionaleditor.view"]).slice(),e}(),q=function(){function e(){this.permissions=_,this.progressBarVisible=!1,this.leftMenuVisible=!0,this.rightMenuVisible=!1,this.leftMenuMode="side",this.rightMenuMode="push",this.environment=R.a}return e.prototype.ngOnInit=function(){},e}(),C=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function T(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,246,"div",[["class","app-sidenav"]],null,null,null,null,null)),(e()(),t["\u0275eld"](1,0,null,null,245,"dec-sidenav",[],null,null,null,o.b,o.a)),t["\u0275did"](2,4243456,[["mainSidenav",4]],3,r.a,[d.a],{loading:[0,"loading"]},null),t["\u0275qud"](335544320,1,{toolbar:0}),t["\u0275qud"](335544320,2,{leftMenu:0}),t["\u0275qud"](335544320,3,{rightMenu:0}),(e()(),t["\u0275eld"](6,0,null,0,6,"dec-sidenav-toolbar",[["color","default"]],null,null,null,a.b,a.a)),t["\u0275did"](7,4308992,[[1,4]],1,c.a,[],{color:[0,"color"],environment:[1,"environment"]},null),t["\u0275qud"](335544320,4,{customTitle:0}),(e()(),t["\u0275eld"](9,0,null,0,3,"dec-sidenav-toolbar-title",[["class","click"],["routerLink","/"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,10).onClick()&&u),u},m.b,m.a)),t["\u0275did"](10,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](11,114688,[[4,4]],0,p.a,[],{routerLink:[0,"routerLink"]},null),(e()(),t["\u0275ted"](-1,0,["Decora Browser Lib UI"])),(e()(),t["\u0275eld"](13,0,null,1,229,"dec-sidenav-menu-left",[],null,[[null,"openedChange"]],function(e,n,l){var t=!0;return"openedChange"===n&&(t=!1!==(e.component.leftMenuVisible=l)&&t),t},k.b,k.a)),t["\u0275did"](14,49152,[[2,4]],2,b.a,[d.a],{open:[0,"open"],mode:[1,"mode"],persistVisibilityMode:[2,"persistVisibilityMode"]},{openedChange:"openedChange"}),t["\u0275qud"](603979776,5,{items:1}),t["\u0275qud"](335544320,6,{customTitle:0}),(e()(),t["\u0275eld"](17,0,null,null,7,"dec-sidenav-menu-item",[["routerLink","/"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,18).onClick()&&u),u},v.b,v.a)),t["\u0275did"](18,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](19,4243456,[[7,4],[5,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,7,{_subitems:1}),(e()(),t["\u0275eld"](21,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](22,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["home"])),(e()(),t["\u0275ted"](-1,0,[" Home "])),(e()(),t["\u0275eld"](25,0,null,null,21,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](26,4243456,[[8,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,8,{_subitems:1}),(e()(),t["\u0275eld"](28,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](29,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["Best practices"])),(e()(),t["\u0275ted"](-1,0,[" Best practices "])),(e()(),t["\u0275eld"](32,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/best-practices/component-styles"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,33).onClick()&&u),u},v.b,v.a)),t["\u0275did"](33,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](34,4243456,[[9,4],[8,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,9,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Component styles"])),(e()(),t["\u0275eld"](37,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/best-practices/forms"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,38).onClick()&&u),u},v.b,v.a)),t["\u0275did"](38,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](39,4243456,[[10,4],[8,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,10,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Forms"])),(e()(),t["\u0275eld"](42,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/best-practices/presentation-components"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,43).onClick()&&u),u},v.b,v.a)),t["\u0275did"](43,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](44,4243456,[[11,4],[8,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,11,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Presentation component"])),(e()(),t["\u0275eld"](47,0,null,null,100,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](48,4243456,[[12,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,12,{_subitems:1}),(e()(),t["\u0275eld"](50,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](51,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["view_quilt"])),(e()(),t["\u0275ted"](-1,0,[" Components "])),(e()(),t["\u0275eld"](54,0,null,0,43,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](55,4243456,[[13,4],[12,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,13,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,[" Autocomplete "])),(e()(),t["\u0275eld"](58,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,59).onClick()&&u),u},v.b,v.a)),t["\u0275did"](59,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](60,4243456,[[14,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,14,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Basic autocomplete"])),(e()(),t["\u0275eld"](63,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-account"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,64).onClick()&&u),u},v.b,v.a)),t["\u0275did"](64,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](65,4243456,[[15,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,15,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Account"])),(e()(),t["\u0275eld"](68,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-country"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,69).onClick()&&u),u},v.b,v.a)),t["\u0275did"](69,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](70,4243456,[[16,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,16,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Country"])),(e()(),t["\u0275eld"](73,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-company"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,74).onClick()&&u),u},v.b,v.a)),t["\u0275did"](74,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](75,4243456,[[17,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,17,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Company"])),(e()(),t["\u0275eld"](78,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-department"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,79).onClick()&&u),u},v.b,v.a)),t["\u0275did"](79,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](80,4243456,[[18,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,18,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Department"])),(e()(),t["\u0275eld"](83,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-project"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,84).onClick()&&u),u},v.b,v.a)),t["\u0275did"](84,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](85,4243456,[[19,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,19,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Project"])),(e()(),t["\u0275eld"](88,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-quote"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,89).onClick()&&u),u},v.b,v.a)),t["\u0275did"](89,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](90,4243456,[[20,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,20,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Quote"])),(e()(),t["\u0275eld"](93,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/autocomplete-role"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,94).onClick()&&u),u},v.b,v.a)),t["\u0275did"](94,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](95,4243456,[[21,4],[13,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,21,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Roles"])),(e()(),t["\u0275eld"](98,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/list"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,99).onClick()&&u),u},v.b,v.a)),t["\u0275did"](99,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](100,4243456,[[22,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,22,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["List"])),(e()(),t["\u0275eld"](103,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/mock-server"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,104).onClick()&&u),u},v.b,v.a)),t["\u0275did"](104,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](105,4243456,[[23,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,23,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Mock server"])),(e()(),t["\u0275eld"](108,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/breadcrumb"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,109).onClick()&&u),u},v.b,v.a)),t["\u0275did"](109,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](110,4243456,[[24,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,24,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Breadcrumb"])),(e()(),t["\u0275eld"](113,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/gallery"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,114).onClick()&&u),u},v.b,v.a)),t["\u0275did"](114,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](115,4243456,[[25,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,25,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Gallery"])),(e()(),t["\u0275eld"](118,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/page-forbiden"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,119).onClick()&&u),u},v.b,v.a)),t["\u0275did"](119,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](120,4243456,[[26,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,26,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Page forbiden"])),(e()(),t["\u0275eld"](123,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/product-spin"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,124).onClick()&&u),u},v.b,v.a)),t["\u0275did"](124,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](125,4243456,[[27,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,27,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Product spin"])),(e()(),t["\u0275eld"](128,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/sidenav"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,129).onClick()&&u),u},v.b,v.a)),t["\u0275did"](129,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](130,4243456,[[28,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,28,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Sidenav"])),(e()(),t["\u0275eld"](133,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/steps-list"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,134).onClick()&&u),u},v.b,v.a)),t["\u0275did"](134,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](135,4243456,[[29,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,29,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Steps List"])),(e()(),t["\u0275eld"](138,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/tabs"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,139).onClick()&&u),u},v.b,v.a)),t["\u0275did"](139,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](140,4243456,[[30,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,30,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Tabs"])),(e()(),t["\u0275eld"](143,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/component/upload"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,144).onClick()&&u),u},v.b,v.a)),t["\u0275did"](144,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](145,4243456,[[31,4],[12,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,31,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Upload"])),(e()(),t["\u0275eld"](148,0,null,null,16,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](149,4243456,[[32,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,32,{_subitems:1}),(e()(),t["\u0275eld"](151,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](152,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["view_quilt"])),(e()(),t["\u0275ted"](-1,0,[" Directives "])),(e()(),t["\u0275eld"](155,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/directive/image"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,156).onClick()&&u),u},v.b,v.a)),t["\u0275did"](156,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](157,4243456,[[33,4],[32,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,33,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Image"])),(e()(),t["\u0275eld"](160,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/directive/permission"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,161).onClick()&&u),u},v.b,v.a)),t["\u0275did"](161,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](162,4243456,[[34,4],[32,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,34,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Permission"])),(e()(),t["\u0275eld"](165,0,null,null,21,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](166,4243456,[[35,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,35,{_subitems:1}),(e()(),t["\u0275eld"](168,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](169,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["settings_input_component"])),(e()(),t["\u0275ted"](-1,0,[" Patterns "])),(e()(),t["\u0275eld"](172,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/patterns/structure"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,173).onClick()&&u),u},v.b,v.a)),t["\u0275did"](173,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](174,4243456,[[36,4],[35,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,36,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Folder structure"])),(e()(),t["\u0275eld"](177,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/patterns/style-guide"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,178).onClick()&&u),u},v.b,v.a)),t["\u0275did"](178,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](179,4243456,[[37,4],[35,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,37,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Style-Guide"])),(e()(),t["\u0275eld"](182,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/patterns/typography"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,183).onClick()&&u),u},v.b,v.a)),t["\u0275did"](183,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](184,4243456,[[38,4],[35,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,38,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Typography"])),(e()(),t["\u0275eld"](187,0,null,null,11,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](188,4243456,[[39,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,39,{_subitems:1}),(e()(),t["\u0275eld"](190,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](191,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["opacity"])),(e()(),t["\u0275ted"](-1,0,[" Style "])),(e()(),t["\u0275eld"](194,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/bootstrap/overview"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,195).onClick()&&u),u},v.b,v.a)),t["\u0275did"](195,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](196,4243456,[[40,4],[39,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,40,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Bootstrap"])),(e()(),t["\u0275eld"](199,0,null,null,26,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](200,4243456,[[41,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,41,{_subitems:1}),(e()(),t["\u0275eld"](202,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](203,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["play_circle_outline"])),(e()(),t["\u0275ted"](-1,0,[" Services "])),(e()(),t["\u0275eld"](206,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/service/api"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,207).onClick()&&u),u},v.b,v.a)),t["\u0275did"](207,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](208,4243456,[[42,4],[41,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,42,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Api"])),(e()(),t["\u0275eld"](211,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/service/permission-guard"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,212).onClick()&&u),u},v.b,v.a)),t["\u0275did"](212,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](213,4243456,[[43,4],[41,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,43,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Permission Guard"])),(e()(),t["\u0275eld"](216,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/service/snack-bar"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,217).onClick()&&u),u},v.b,v.a)),t["\u0275did"](217,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](218,4243456,[[44,4],[41,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,44,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Snackbar"])),(e()(),t["\u0275eld"](221,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/demo/service/websocket"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,222).onClick()&&u),u},v.b,v.a)),t["\u0275did"](222,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](223,4243456,[[45,4],[41,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,45,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Websocket"])),(e()(),t["\u0275eld"](226,0,null,null,11,"dec-sidenav-menu-item",[],null,null,null,v.b,v.a)),t["\u0275did"](227,4243456,[[46,4],[5,4]],1,f.a,[s.l],null,null),t["\u0275qud"](603979776,46,{_subitems:1}),(e()(),t["\u0275eld"](229,0,null,0,2,"mat-icon",[["class","mat-icon"],["role","img"]],[[2,"mat-icon-inline",null]],null,null,L.b,L.a)),t["\u0275did"](230,638976,null,0,h.a,[t.ElementRef,h.c,[8,null]],null,null),(e()(),t["\u0275ted"](-1,0,["build"])),(e()(),t["\u0275ted"](-1,0,[" Tools "])),(e()(),t["\u0275eld"](233,0,null,0,4,"dec-sidenav-menu-item",[["routerLink","/tools/object-sort"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,234).onClick()&&u),u},v.b,v.a)),t["\u0275did"](234,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](235,4243456,[[47,4],[46,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,47,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Object Sort"])),(e()(),t["\u0275eld"](238,0,null,null,4,"dec-sidenav-menu-item",[["routerLink","http://decoracontent.com/platform"]],null,[[null,"click"]],function(e,n,l){var u=!0;return"click"===n&&(u=!1!==t["\u0275nov"](e,239).onClick()&&u),u},v.b,v.a)),t["\u0275did"](239,16384,null,0,s.m,[s.l,s.a,[8,null],t.Renderer2,t.ElementRef],{routerLink:[0,"routerLink"]},null),t["\u0275did"](240,4243456,[[48,4],[5,4]],1,f.a,[s.l],{routerLink:[0,"routerLink"]},null),t["\u0275qud"](603979776,48,{_subitems:1}),(e()(),t["\u0275ted"](-1,0,["Legacy Platform"])),(e()(),t["\u0275eld"](243,0,null,2,3,"dec-sidenav-content",[],null,null,null,y.b,y.a)),t["\u0275did"](244,114688,null,0,g.a,[],null,null),(e()(),t["\u0275eld"](245,16777216,null,0,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](246,212992,null,0,s.q,[s.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],function(e,n){var l=n.component;e(n,2,0,l.progressBarVisible),e(n,7,0,"default",l.environment.profile),e(n,10,0,"/"),e(n,11,0,"/"),e(n,14,0,l.leftMenuVisible,l.leftMenuMode,!0),e(n,18,0,"/"),e(n,19,0,"/"),e(n,22,0),e(n,29,0),e(n,33,0,"/best-practices/component-styles"),e(n,34,0,"/best-practices/component-styles"),e(n,38,0,"/best-practices/forms"),e(n,39,0,"/best-practices/forms"),e(n,43,0,"/best-practices/presentation-components"),e(n,44,0,"/best-practices/presentation-components"),e(n,51,0),e(n,59,0,"/demo/component/autocomplete"),e(n,60,0,"/demo/component/autocomplete"),e(n,64,0,"/demo/component/autocomplete-account"),e(n,65,0,"/demo/component/autocomplete-account"),e(n,69,0,"/demo/component/autocomplete-country"),e(n,70,0,"/demo/component/autocomplete-country"),e(n,74,0,"/demo/component/autocomplete-company"),e(n,75,0,"/demo/component/autocomplete-company"),e(n,79,0,"/demo/component/autocomplete-department"),e(n,80,0,"/demo/component/autocomplete-department"),e(n,84,0,"/demo/component/autocomplete-project"),e(n,85,0,"/demo/component/autocomplete-project"),e(n,89,0,"/demo/component/autocomplete-quote"),e(n,90,0,"/demo/component/autocomplete-quote"),e(n,94,0,"/demo/component/autocomplete-role"),e(n,95,0,"/demo/component/autocomplete-role"),e(n,99,0,"/demo/component/list"),e(n,100,0,"/demo/component/list"),e(n,104,0,"/demo/component/mock-server"),e(n,105,0,"/demo/component/mock-server"),e(n,109,0,"/demo/component/breadcrumb"),e(n,110,0,"/demo/component/breadcrumb"),e(n,114,0,"/demo/component/gallery"),e(n,115,0,"/demo/component/gallery"),e(n,119,0,"/demo/component/page-forbiden"),e(n,120,0,"/demo/component/page-forbiden"),e(n,124,0,"/demo/component/product-spin"),e(n,125,0,"/demo/component/product-spin"),e(n,129,0,"/demo/component/sidenav"),e(n,130,0,"/demo/component/sidenav"),e(n,134,0,"/demo/component/steps-list"),e(n,135,0,"/demo/component/steps-list"),e(n,139,0,"/demo/component/tabs"),e(n,140,0,"/demo/component/tabs"),e(n,144,0,"/demo/component/upload"),e(n,145,0,"/demo/component/upload"),e(n,152,0),e(n,156,0,"/demo/directive/image"),e(n,157,0,"/demo/directive/image"),e(n,161,0,"/demo/directive/permission"),e(n,162,0,"/demo/directive/permission"),e(n,169,0),e(n,173,0,"/patterns/structure"),e(n,174,0,"/patterns/structure"),e(n,178,0,"/patterns/style-guide"),e(n,179,0,"/patterns/style-guide"),e(n,183,0,"/patterns/typography"),e(n,184,0,"/patterns/typography"),e(n,191,0),e(n,195,0,"/demo/bootstrap/overview"),e(n,196,0,"/demo/bootstrap/overview"),e(n,203,0),e(n,207,0,"/demo/service/api"),e(n,208,0,"/demo/service/api"),e(n,212,0,"/demo/service/permission-guard"),e(n,213,0,"/demo/service/permission-guard"),e(n,217,0,"/demo/service/snack-bar"),e(n,218,0,"/demo/service/snack-bar"),e(n,222,0,"/demo/service/websocket"),e(n,223,0,"/demo/service/websocket"),e(n,230,0),e(n,234,0,"/tools/object-sort"),e(n,235,0,"/tools/object-sort"),e(n,239,0,"http://decoracontent.com/platform"),e(n,240,0,"http://decoracontent.com/platform"),e(n,244,0),e(n,246,0)},function(e,n){e(n,21,0,t["\u0275nov"](n,22).inline),e(n,28,0,t["\u0275nov"](n,29).inline),e(n,50,0,t["\u0275nov"](n,51).inline),e(n,151,0,t["\u0275nov"](n,152).inline),e(n,168,0,t["\u0275nov"](n,169).inline),e(n,190,0,t["\u0275nov"](n,191).inline),e(n,202,0,t["\u0275nov"](n,203).inline),e(n,229,0,t["\u0275nov"](n,230).inline)})}var w=t["\u0275ccf"]("app-pages",q,function(e){return t["\u0275vid"](0,[(e()(),t["\u0275eld"](0,0,null,null,1,"app-pages",[],null,null,null,T,C)),t["\u0275did"](1,114688,null,0,q,[],null,null)],function(e,n){e(n,1,0)},null)},{},{},[]),E=l("w9k/"),M=l("Ip0R"),P=l("t/Na"),O=(l("+h/V"),function(){}),N=l("Fzqc"),S=l("Wf4p"),j=l("dWZg"),F=l("qAlS"),I=l("Nsh5"),A=l("LC5p"),D=l("0/Q6"),V=l("8mMr"),U=l("Z+uX"),x=l("A7o+"),B=l("qoLw"),W=l("UodH"),X=l("cvXK"),G=l("v0kF"),Q=l("3bkF");l.d(n,"PagesModuleNgFactory",function(){return K});var K=t["\u0275cmf"](u,[],function(e){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,w,E.a]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,M.NgLocalization,M.NgLocaleLocalization,[t.LOCALE_ID,[2,M["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,P.m,P.s,[M.DOCUMENT,t.PLATFORM_ID,P.q]),t["\u0275mpd"](4608,P.t,P.t,[P.m,P.r]),t["\u0275mpd"](5120,P.a,function(e){return[e]},[P.t]),t["\u0275mpd"](4608,P.p,P.p,[]),t["\u0275mpd"](6144,P.n,null,[P.p]),t["\u0275mpd"](4608,P.l,P.l,[P.n]),t["\u0275mpd"](6144,P.b,null,[P.l]),t["\u0275mpd"](4608,P.g,P.o,[P.b,t.Injector]),t["\u0275mpd"](4608,P.c,P.c,[P.g]),t["\u0275mpd"](4608,d.a,d.a,[]),t["\u0275mpd"](1073742336,M.CommonModule,M.CommonModule,[]),t["\u0275mpd"](1073742336,s.p,s.p,[[2,s.v],[2,s.l]]),t["\u0275mpd"](1073742336,O,O,[]),t["\u0275mpd"](1073742336,N.a,N.a,[]),t["\u0275mpd"](1073742336,S.l,S.l,[[2,S.e]]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,F.b,F.b,[]),t["\u0275mpd"](1073742336,I.h,I.h,[]),t["\u0275mpd"](1073742336,S.m,S.m,[]),t["\u0275mpd"](1073742336,S.w,S.w,[]),t["\u0275mpd"](1073742336,S.u,S.u,[]),t["\u0275mpd"](1073742336,A.a,A.a,[]),t["\u0275mpd"](1073742336,D.c,D.c,[]),t["\u0275mpd"](1073742336,h.b,h.b,[]),t["\u0275mpd"](1073742336,V.b,V.b,[]),t["\u0275mpd"](1073742336,U.b,U.b,[]),t["\u0275mpd"](1073742336,P.e,P.e,[]),t["\u0275mpd"](1073742336,P.d,P.d,[]),t["\u0275mpd"](1073742336,x.g,x.g,[]),t["\u0275mpd"](1073742336,B.a,B.a,[]),t["\u0275mpd"](1073742336,W.c,W.c,[]),t["\u0275mpd"](1073742336,X.a,X.a,[]),t["\u0275mpd"](1073742336,G.a,G.a,[]),t["\u0275mpd"](1073742336,u,u,[]),t["\u0275mpd"](1024,s.j,function(){return[[{path:"",component:q,children:[{path:"",loadChildren:"./overview/overview.module#OverviewModule"},{path:"demo",loadChildren:"./demo/demo.module#DemoModule"},{path:"mock-server",loadChildren:"./mock-server-demo/decora-mock-server-demo.module#DecoraMockServerDemoModule"},{path:"tools",loadChildren:"./tools/tools.module#ToolsModule"},{path:"best-practices",loadChildren:"./best-practices/best-practices.module#BestPracticesModule"},{path:"patterns",children:[{path:"typography",loadChildren:"./patterns/typography/typography.module#TypographyModule"},{path:"style-guide",loadChildren:"./patterns/style-guide/style-guide.module#StyleGuideModule"},{path:"structure",loadChildren:"./patterns/folder-structure/folder-structure.module#FolderStructureModule"}]},{path:"**",loadChildren:"./page-not-found/page-not-found.module#PageNotFoundModule"},{path:"forbiden",component:Q.a}]}]]},[]),t["\u0275mpd"](256,P.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,P.r,"X-XSRF-TOKEN",[])])})}}]);