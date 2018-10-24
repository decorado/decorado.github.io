/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { DecScriptLoaderService } from './../../services/script-loader/dec-script-loader.service';
/** @type {?} */
var SKETCHFAB_SCRIPT_URL = 'https://static.sketchfab.com/api/sketchfab-viewer-1.0.0.js';
var DecSketchfabViewComponent = /** @class */ (function () {
    function DecSketchfabViewComponent(decScriptLoaderService) {
        this.decScriptLoaderService = decScriptLoaderService;
        this.materialSelected = new EventEmitter();
        this.sendMaterials = new EventEmitter();
    }
    Object.defineProperty(DecSketchfabViewComponent.prototype, "sketchfabId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sketchfabId;
        },
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (id) {
                this._sketchfabId = id;
                this.startSketchfab(id);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecSketchfabViewComponent.prototype, "configs", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v) {
                this._configs = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecSketchfabViewComponent.prototype, "materialName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._materialName;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v && this._materialName !== v) {
                this._materialName = v;
                /** @type {?} */
                var material = this.selectMaterialByName(v, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecSketchfabViewComponent.prototype, "material", {
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v && this.update) {
                this.updateMaterials(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecSketchfabViewComponent.prototype, "editMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._editMode;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v) {
                this.addClickEvent();
                this._editMode = v;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DecSketchfabViewComponent.prototype, "getAllMaterials", {
        get: /**
         * @return {?}
         */
        function () {
            return this._getAllMaterials;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            if (v) {
                this._getAllMaterials = v;
                this.sendAllMaterials();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} id
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.startSketchfab = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var _this = this;
        this.decScriptLoaderService.load(SKETCHFAB_SCRIPT_URL, 'Sketchfab')
            .then(function (Sketchfab) {
            /** @type {?} */
            var iframe = _this.apiFrame.nativeElement;
            /** @type {?} */
            var client = new Sketchfab('1.0.0', iframe);
            client.init(_this.sketchfabId, {
                success: function (api) {
                    api.start();
                    _this.api = api;
                    api.addEventListener('viewerready', function () {
                        _this.getMaterials();
                        if (_this.editMode) {
                            _this.addClickEvent();
                        }
                    });
                }
            });
        });
    };
    /**
     * @param {?} material
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.updateMaterials = /**
     * @param {?} material
     * @return {?}
     */
    function (material) {
        this.api.setMaterial(material, function () {
            // console.log(`Material ${material.name} Updated`);
        });
    };
    /**
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.getMaterials = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.api.getMaterialList(function (err, materialList) {
            _this.materials = materialList;
        });
    };
    /**
     * @param {?} name
     * @param {?} emit
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.selectMaterialByName = /**
     * @param {?} name
     * @param {?} emit
     * @return {?}
     */
    function (name, emit) {
        /** @type {?} */
        var material = this.materials.find(function (m) { return m.name === name; });
        if (emit) {
            this.materialSelected.emit(material);
        }
        return material;
    };
    /**
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.addClickEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.api) {
            console.log('add event listener');
            this.api.addEventListener('click', function (e) {
                _this._materialName = e.material.name;
                _this.selectEffect(e.material);
                _this.selectMaterialByName(e.material.name, true);
            });
        }
    };
    /**
     * @param {?} material
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.selectEffect = /**
     * @param {?} material
     * @return {?}
     */
    function (material) {
        var _this = this;
        material.shadeless = true;
        this.api.setMaterial(material, function () {
            setTimeout(function () {
                material.shadeless = false;
                _this.api.setMaterial(material, function () {
                });
            }, 200);
        });
    };
    /**
     * @return {?}
     */
    DecSketchfabViewComponent.prototype.sendAllMaterials = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.api.getMaterialList(function (err, materialList) {
            _this.sendMaterials.emit(materialList);
        });
    };
    DecSketchfabViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dec-sketchfab-view',
                    template: "<iframe src=\"\" \n  #apiFrame \n  id=\"api-frame\" \n  height=\"620\"\n  width=\"620\" \n  allowfullscreen \n  mozallowfullscreen=\"true\" \n  webkitallowfullscreen=\"true\"></iframe>",
                    styles: [""]
                },] },
    ];
    /** @nocollapse */
    DecSketchfabViewComponent.ctorParameters = function () { return [
        { type: DecScriptLoaderService }
    ]; };
    DecSketchfabViewComponent.propDecorators = {
        sketchfabId: [{ type: Input }],
        configs: [{ type: Input }],
        materialName: [{ type: Input }],
        material: [{ type: Input }],
        editMode: [{ type: Input }],
        getAllMaterials: [{ type: Input }],
        update: [{ type: Input }],
        textures: [{ type: Input }],
        materialSelected: [{ type: Output }],
        sendMaterials: [{ type: Output }],
        apiFrame: [{ type: ViewChild, args: ['apiFrame',] }]
    };
    return DecSketchfabViewComponent;
}());
export { DecSketchfabViewComponent };
if (false) {
    /** @type {?} */
    DecSketchfabViewComponent.prototype.update;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.textures;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.materialSelected;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.sendMaterials;
    /** @type {?} */
    DecSketchfabViewComponent.prototype._sketchfabId;
    /** @type {?} */
    DecSketchfabViewComponent.prototype._configs;
    /** @type {?} */
    DecSketchfabViewComponent.prototype._materialName;
    /** @type {?} */
    DecSketchfabViewComponent.prototype._editMode;
    /** @type {?} */
    DecSketchfabViewComponent.prototype._getAllMaterials;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.channels;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.api;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.materials;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.apiFrame;
    /** @type {?} */
    DecSketchfabViewComponent.prototype.decScriptLoaderService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjLXNrZXRjaGZhYi12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BkZWNvcmEvYnJvd3Nlci1saWItdWkvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9za2V0Y2hmYWItdmlldy9kZWMtc2tldGNoZmFiLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMERBQTBELENBQUM7O0FBRWxHLElBQU0sb0JBQW9CLEdBQUcsNERBQTRELENBQUM7O0lBaUd4RixtQ0FBb0Isc0JBQThDO1FBQTlDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7Z0NBZnJDLElBQUksWUFBWSxFQUFFOzZCQUVyQixJQUFJLFlBQVksRUFBRTtLQWEyQjtJQWpGdkUsc0JBQ0ksa0RBQVc7Ozs7UUFPZjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7OztRQVZELFVBQ2dCLEVBQUU7WUFDaEIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN6QjtTQUNGOzs7T0FBQTtJQU1ELHNCQUNJLDhDQUFPOzs7OztRQURYLFVBQ1ksQ0FBQztZQUNYLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDbkI7U0FDRjs7O09BQUE7SUFFRCxzQkFDSSxtREFBWTs7OztRQU9oQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO1NBQzNCOzs7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R0FBRyxDQUFDLGVBQWUsQ0FBQyxVQUFDLEdBQUcsRUFBRSxZQUFZO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3ZDLENBQUMsQ0FBQTtLQUNIOztnQkF2S0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwwTEFPNkI7b0JBQ3ZDLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztpQkFDYjs7OztnQkFmUSxzQkFBc0I7Ozs4QkFrQjVCLEtBQUs7MEJBWUwsS0FBSzsrQkFPTCxLQUFLOzJCQVlMLEtBQUs7MkJBT0wsS0FBSztrQ0FZTCxLQUFLO3lCQVlMLEtBQUs7MkJBRUwsS0FBSzttQ0FFTCxNQUFNO2dDQUVOLE1BQU07MkJBV04sU0FBUyxTQUFDLFVBQVU7O29DQWxHdkI7O1NBaUJhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjU2NyaXB0TG9hZGVyU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvc2NyaXB0LWxvYWRlci9kZWMtc2NyaXB0LWxvYWRlci5zZXJ2aWNlJztcblxuY29uc3QgU0tFVENIRkFCX1NDUklQVF9VUkwgPSAnaHR0cHM6Ly9zdGF0aWMuc2tldGNoZmFiLmNvbS9hcGkvc2tldGNoZmFiLXZpZXdlci0xLjAuMC5qcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlYy1za2V0Y2hmYWItdmlldycsXG4gIHRlbXBsYXRlOiBgPGlmcmFtZSBzcmM9XCJcIiBcbiAgI2FwaUZyYW1lIFxuICBpZD1cImFwaS1mcmFtZVwiIFxuICBoZWlnaHQ9XCI2MjBcIlxuICB3aWR0aD1cIjYyMFwiIFxuICBhbGxvd2Z1bGxzY3JlZW4gXG4gIG1vemFsbG93ZnVsbHNjcmVlbj1cInRydWVcIiBcbiAgd2Via2l0YWxsb3dmdWxsc2NyZWVuPVwidHJ1ZVwiPjwvaWZyYW1lPmAsXG4gIHN0eWxlczogW2BgXVxufSlcbmV4cG9ydCBjbGFzcyBEZWNTa2V0Y2hmYWJWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKVxuICBzZXQgc2tldGNoZmFiSWQoaWQpIHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIHRoaXMuX3NrZXRjaGZhYklkID0gaWQ7XG4gICAgICB0aGlzLnN0YXJ0U2tldGNoZmFiKGlkKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2tldGNoZmFiSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NrZXRjaGZhYklkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNvbmZpZ3Modikge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLl9jb25maWdzID0gdjtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbWF0ZXJpYWxOYW1lKHYpIHtcbiAgICBpZiAodiAmJiB0aGlzLl9tYXRlcmlhbE5hbWUgIT09IHYpIHtcbiAgICAgIHRoaXMuX21hdGVyaWFsTmFtZSA9IHY7XG4gICAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMuc2VsZWN0TWF0ZXJpYWxCeU5hbWUodiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1hdGVyaWFsTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWF0ZXJpYWxOYW1lO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1hdGVyaWFsICh2KXtcbiAgICBpZiAodiAmJiB0aGlzLnVwZGF0ZSkge1xuICAgICAgdGhpcy51cGRhdGVNYXRlcmlhbHModik7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRNb2RlKHYpIHtcbiAgICBpZiAodikge1xuICAgICAgdGhpcy5hZGRDbGlja0V2ZW50KCk7XG4gICAgICB0aGlzLl9lZGl0TW9kZSA9IHY7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGVkaXRNb2RlKCkge1xuICAgIHJldHVybiB0aGlzLl9lZGl0TW9kZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBnZXRBbGxNYXRlcmlhbHModikge1xuICAgIGlmICh2KSB7XG4gICAgICB0aGlzLl9nZXRBbGxNYXRlcmlhbHMgPSB2O1xuICAgICAgdGhpcy5zZW5kQWxsTWF0ZXJpYWxzKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGdldEFsbE1hdGVyaWFscygpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0QWxsTWF0ZXJpYWxzO1xuICB9XG5cbiAgQElucHV0KCkgdXBkYXRlOiBhbnk7XG5cbiAgQElucHV0KCkgdGV4dHVyZXM6IGFueTtcblxuICBAT3V0cHV0KCkgbWF0ZXJpYWxTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgc2VuZE1hdGVyaWFscyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwcml2YXRlIF9za2V0Y2hmYWJJZDogc3RyaW5nO1xuICBwcml2YXRlIF9jb25maWdzOiBhbnk7XG4gIHByaXZhdGUgX21hdGVyaWFsTmFtZTogc3RyaW5nO1xuICBwcml2YXRlIF9lZGl0TW9kZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfZ2V0QWxsTWF0ZXJpYWxzOiBib29sZWFuO1xuICBwcml2YXRlIGNoYW5uZWxzOiBhbnk7XG4gIHByaXZhdGUgYXBpOiBhbnk7XG4gIHByaXZhdGUgbWF0ZXJpYWxzO1xuXG4gIEBWaWV3Q2hpbGQoJ2FwaUZyYW1lJykgYXBpRnJhbWU6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWNTY3JpcHRMb2FkZXJTZXJ2aWNlOiBEZWNTY3JpcHRMb2FkZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIHN0YXJ0U2tldGNoZmFiKGlkKSB7XG4gICAgdGhpcy5kZWNTY3JpcHRMb2FkZXJTZXJ2aWNlLmxvYWQoU0tFVENIRkFCX1NDUklQVF9VUkwsICdTa2V0Y2hmYWInKVxuICAgICAgLnRoZW4oKFNrZXRjaGZhYjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlmcmFtZSA9IHRoaXMuYXBpRnJhbWUubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgY2xpZW50ID0gbmV3IFNrZXRjaGZhYignMS4wLjAnLCBpZnJhbWUpO1xuICAgICAgICBjbGllbnQuaW5pdCh0aGlzLnNrZXRjaGZhYklkLCB7XG4gICAgICAgICAgc3VjY2VzczogKGFwaSkgPT4ge1xuICAgICAgICAgICAgYXBpLnN0YXJ0KCk7XG4gICAgICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgICAgIGFwaS5hZGRFdmVudExpc3RlbmVyKCd2aWV3ZXJyZWFkeScsICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRNYXRlcmlhbHMoKTtcbiAgICAgICAgICAgICAgaWYodGhpcy5lZGl0TW9kZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xpY2tFdmVudCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICB1cGRhdGVNYXRlcmlhbHMobWF0ZXJpYWwpIHtcbiAgICB0aGlzLmFwaS5zZXRNYXRlcmlhbChtYXRlcmlhbCwgKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coYE1hdGVyaWFsICR7bWF0ZXJpYWwubmFtZX0gVXBkYXRlZGApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0TWF0ZXJpYWxzKCkge1xuICAgIHRoaXMuYXBpLmdldE1hdGVyaWFsTGlzdCgoZXJyLCBtYXRlcmlhbExpc3QpID0+IHtcbiAgICAgIHRoaXMubWF0ZXJpYWxzID0gbWF0ZXJpYWxMaXN0O1xuICAgIH0pXG4gIH1cblxuXG4gIHNlbGVjdE1hdGVyaWFsQnlOYW1lKG5hbWUsIGVtaXQpIHtcbiAgICBjb25zdCBtYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWxzLmZpbmQobSA9PiBtLm5hbWUgPT09IG5hbWUpO1xuICAgIGlmKGVtaXQpIHtcbiAgICAgIHRoaXMubWF0ZXJpYWxTZWxlY3RlZC5lbWl0KG1hdGVyaWFsKTtcbiAgICB9XG4gICAgcmV0dXJuIG1hdGVyaWFsO1xuICB9XG5cbiAgYWRkQ2xpY2tFdmVudCgpIHtcbiAgICBpZiAodGhpcy5hcGkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGQgZXZlbnQgbGlzdGVuZXInKTtcbiAgICAgIHRoaXMuYXBpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgdGhpcy5fbWF0ZXJpYWxOYW1lID0gZS5tYXRlcmlhbC5uYW1lO1xuICAgICAgICB0aGlzLnNlbGVjdEVmZmVjdChlLm1hdGVyaWFsKTtcbiAgICAgICAgdGhpcy5zZWxlY3RNYXRlcmlhbEJ5TmFtZShlLm1hdGVyaWFsLm5hbWUsIHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0RWZmZWN0KG1hdGVyaWFsKSB7XG4gICAgbWF0ZXJpYWwuc2hhZGVsZXNzID0gdHJ1ZTtcbiAgICB0aGlzLmFwaS5zZXRNYXRlcmlhbChtYXRlcmlhbCwgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG1hdGVyaWFsLnNoYWRlbGVzcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmFwaS5zZXRNYXRlcmlhbChtYXRlcmlhbCwgKCkgPT4ge1xuICAgICAgICB9KTtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cblxuICBzZW5kQWxsTWF0ZXJpYWxzKCkge1xuICAgIHRoaXMuYXBpLmdldE1hdGVyaWFsTGlzdCgoZXJyLCBtYXRlcmlhbExpc3QpID0+IHtcbiAgICAgIHRoaXMuc2VuZE1hdGVyaWFscy5lbWl0KG1hdGVyaWFsTGlzdCk7XG4gICAgfSlcbiAgfVxufVxuIl19