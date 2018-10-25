/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ContentChild } from '@angular/core';
import { DecSidenavToolbarTitleComponent } from './../dec-sidenav-toolbar-title/dec-sidenav-toolbar-title.component';
export class DecSidenavToolbarComponent {
    constructor() {
        this.notProduction = true;
        this.ribbon = '';
        this.label = '';
        this.leftMenuTriggerVisible = true;
        this.rightMenuTriggerVisible = true;
        this.progressBarVisible = false;
        this.toggleLeftMenu = new EventEmitter();
        this.toggleRightMenu = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => {
            this.initialized = true;
        }, 1);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.environment === 'local') {
            this.ribbon = 'ribbon-green';
            this.label = 'label.local';
        }
        else if (this.environment === 'development') {
            this.ribbon = 'ribbon-blue';
            this.label = 'label.development';
        }
        else if (this.environment === 'qa') {
            this.ribbon = 'ribbon-red';
            this.label = 'label.qa';
        }
        else if (this.environment === 'active') {
            this.ribbon = 'ribbon-green';
            this.label = 'label.active';
        }
        else {
            this.notProduction = false;
            this.ribbon = 'ribbon-hidden';
        }
    }
}
DecSidenavToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'dec-sidenav-toolbar',
                template: `<mat-toolbar [color]="color" *ngIf="initialized" class="dec-sidenav-toolbar">

  <span class="items-icon item-left" *ngIf="leftMenuTriggerVisible" (click)="toggleLeftMenu.emit()">
    &#9776;
  </span>

  <span *ngIf="customTitle">
    <ng-content select="dec-sidenav-toolbar-title"></ng-content>
  </span>

  <div class="ribbon {{ribbon}}" *ngIf="notProduction">
    <span>{{label | translate}}</span>
  </div>

  <span class="dec-sidenav-toolbar-custom-content">
    <ng-content></ng-content>
  </span>

  <span class="items-spacer"></span>

  <span class="items-icon item-right" *ngIf="rightMenuTriggerVisible" (click)="toggleRightMenu.emit()">
    &#9776;
  </span>


  <!-- PROGRESS BAR -->
  <div class="progress-bar-wrapper" *ngIf="progressBarVisible">
    <div class="progress-bar-message" *ngIf="progressBarVisible !== true">
      {{ progressBarVisible }}
    </div>
    <mat-progress-bar mode="indeterminate" color="accent"></mat-progress-bar>
  </div>
  <!-- / PROGRESS BAR -->
</mat-toolbar>
`,
                styles: [`.items-spacer{flex:1 1 auto}.items-icon{cursor:pointer;-webkit-transform:scale(1.2,.8);transform:scale(1.2,.8)}.items-icon.item-right{padding-left:14px}.items-icon.item-left{padding-right:14px}.dec-sidenav-toolbar-custom-content{padding:0 16px;width:100%}.ribbon{transition:all .3s ease;text-transform:lowercase;text-align:center;position:relative;line-height:64px;margin-left:4px;padding:0 20px;height:64px;width:155px;color:#fff;left:20px;top:0}.ribbon.ribbon-hidden{display:none}.ribbon::before{content:'';position:fixed;width:100vw;height:4px;z-index:2;top:64px;left:0}@media screen and (max-width:599px){.ribbon::before{top:56px}}.mat-toolbar{position:relative}.mat-toolbar .progress-bar-wrapper{position:absolute;bottom:0;width:inherit;margin-left:-16px}.mat-toolbar .progress-bar-wrapper .progress-bar-message{text-align:center;font-size:12px;line-height:12px}`]
            },] },
];
/** @nocollapse */
DecSidenavToolbarComponent.ctorParameters = () => [];
DecSidenavToolbarComponent.propDecorators = {
    color: [{ type: Input }],
    environment: [{ type: Input }],
    leftMenuTriggerVisible: [{ type: Input }],
    rightMenuTriggerVisible: [{ type: Input }],
    progressBarVisible: [{ type: Input }],
    toggleLeftMenu: [{ type: Output }],
    toggleRightMenu: [{ type: Output }],
    customTitle: [{ type: ContentChild, args: [DecSidenavToolbarTitleComponent,] }]
};
if (false) {
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.initialized;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.notProduction;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.ribbon;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.label;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.color;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.environment;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.leftMenuTriggerVisible;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.rightMenuTriggerVisible;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.progressBarVisible;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.toggleLeftMenu;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.toggleRightMenu;
    /** @type {?} */
    DecSidenavToolbarComponent.prototype.customTitle;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjLXNpZGVuYXYtdG9vbGJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AZGVjb3JhL2Jyb3dzZXItbGliLXVpLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvc2lkZW5hdi9kZWMtc2lkZW5hdi10b29sYmFyL2RlYy1zaWRlbmF2LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sb0VBQW9FLENBQUM7QUF5Q3JILE1BQU07SUF3Qko7NkJBcEJnQixJQUFJO3NCQUNYLEVBQUU7cUJBQ0gsRUFBRTtzQ0FNd0IsSUFBSTt1Q0FFSCxJQUFJO2tDQUVTLEtBQUs7OEJBRVAsSUFBSSxZQUFZLEVBQU87K0JBRXRCLElBQUksWUFBWSxFQUFPO0tBSXJEOzs7O0lBRWpCLGVBQWU7UUFDYixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekIsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUNQOzs7O0lBRUQsUUFBUTtRQUNOLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLGNBQWMsQ0FBQztZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxtQkFBbUIsQ0FBQztTQUNsQztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7U0FDekI7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsY0FBYyxDQUFDO1NBQzdCO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLGVBQWUsQ0FBQztTQUMvQjtLQUNGOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtDWDtnQkFDQyxNQUFNLEVBQUUsQ0FBQyxxMkJBQXEyQixDQUFDO2FBQ2gzQjs7Ozs7b0JBU0UsS0FBSzswQkFFTCxLQUFLO3FDQUVMLEtBQUs7c0NBRUwsS0FBSztpQ0FFTCxLQUFLOzZCQUVMLE1BQU07OEJBRU4sTUFBTTswQkFFTixZQUFZLFNBQUMsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ29udGVudENoaWxkLCBBZnRlclZpZXdJbml0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVjU2lkZW5hdlRvb2xiYXJUaXRsZUNvbXBvbmVudCB9IGZyb20gJy4vLi4vZGVjLXNpZGVuYXYtdG9vbGJhci10aXRsZS9kZWMtc2lkZW5hdi10b29sYmFyLXRpdGxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlYy1zaWRlbmF2LXRvb2xiYXInLFxuICB0ZW1wbGF0ZTogYDxtYXQtdG9vbGJhciBbY29sb3JdPVwiY29sb3JcIiAqbmdJZj1cImluaXRpYWxpemVkXCIgY2xhc3M9XCJkZWMtc2lkZW5hdi10b29sYmFyXCI+XG5cbiAgPHNwYW4gY2xhc3M9XCJpdGVtcy1pY29uIGl0ZW0tbGVmdFwiICpuZ0lmPVwibGVmdE1lbnVUcmlnZ2VyVmlzaWJsZVwiIChjbGljayk9XCJ0b2dnbGVMZWZ0TWVudS5lbWl0KClcIj5cbiAgICAmIzk3NzY7XG4gIDwvc3Bhbj5cblxuICA8c3BhbiAqbmdJZj1cImN1c3RvbVRpdGxlXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZGVjLXNpZGVuYXYtdG9vbGJhci10aXRsZVwiPjwvbmctY29udGVudD5cbiAgPC9zcGFuPlxuXG4gIDxkaXYgY2xhc3M9XCJyaWJib24ge3tyaWJib259fVwiICpuZ0lmPVwibm90UHJvZHVjdGlvblwiPlxuICAgIDxzcGFuPnt7bGFiZWwgfCB0cmFuc2xhdGV9fTwvc3Bhbj5cbiAgPC9kaXY+XG5cbiAgPHNwYW4gY2xhc3M9XCJkZWMtc2lkZW5hdi10b29sYmFyLWN1c3RvbS1jb250ZW50XCI+XG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICA8L3NwYW4+XG5cbiAgPHNwYW4gY2xhc3M9XCJpdGVtcy1zcGFjZXJcIj48L3NwYW4+XG5cbiAgPHNwYW4gY2xhc3M9XCJpdGVtcy1pY29uIGl0ZW0tcmlnaHRcIiAqbmdJZj1cInJpZ2h0TWVudVRyaWdnZXJWaXNpYmxlXCIgKGNsaWNrKT1cInRvZ2dsZVJpZ2h0TWVudS5lbWl0KClcIj5cbiAgICAmIzk3NzY7XG4gIDwvc3Bhbj5cblxuXG4gIDwhLS0gUFJPR1JFU1MgQkFSIC0tPlxuICA8ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIiAqbmdJZj1cInByb2dyZXNzQmFyVmlzaWJsZVwiPlxuICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXItbWVzc2FnZVwiICpuZ0lmPVwicHJvZ3Jlc3NCYXJWaXNpYmxlICE9PSB0cnVlXCI+XG4gICAgICB7eyBwcm9ncmVzc0JhclZpc2libGUgfX1cbiAgICA8L2Rpdj5cbiAgICA8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiIGNvbG9yPVwiYWNjZW50XCI+PC9tYXQtcHJvZ3Jlc3MtYmFyPlxuICA8L2Rpdj5cbiAgPCEtLSAvIFBST0dSRVNTIEJBUiAtLT5cbjwvbWF0LXRvb2xiYXI+XG5gLFxuICBzdHlsZXM6IFtgLml0ZW1zLXNwYWNlcntmbGV4OjEgMSBhdXRvfS5pdGVtcy1pY29ue2N1cnNvcjpwb2ludGVyOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMiwuOCk7dHJhbnNmb3JtOnNjYWxlKDEuMiwuOCl9Lml0ZW1zLWljb24uaXRlbS1yaWdodHtwYWRkaW5nLWxlZnQ6MTRweH0uaXRlbXMtaWNvbi5pdGVtLWxlZnR7cGFkZGluZy1yaWdodDoxNHB4fS5kZWMtc2lkZW5hdi10b29sYmFyLWN1c3RvbS1jb250ZW50e3BhZGRpbmc6MCAxNnB4O3dpZHRoOjEwMCV9LnJpYmJvbnt0cmFuc2l0aW9uOmFsbCAuM3MgZWFzZTt0ZXh0LXRyYW5zZm9ybTpsb3dlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7cG9zaXRpb246cmVsYXRpdmU7bGluZS1oZWlnaHQ6NjRweDttYXJnaW4tbGVmdDo0cHg7cGFkZGluZzowIDIwcHg7aGVpZ2h0OjY0cHg7d2lkdGg6MTU1cHg7Y29sb3I6I2ZmZjtsZWZ0OjIwcHg7dG9wOjB9LnJpYmJvbi5yaWJib24taGlkZGVue2Rpc3BsYXk6bm9uZX0ucmliYm9uOjpiZWZvcmV7Y29udGVudDonJztwb3NpdGlvbjpmaXhlZDt3aWR0aDoxMDB2dztoZWlnaHQ6NHB4O3otaW5kZXg6Mjt0b3A6NjRweDtsZWZ0OjB9QG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1OTlweCl7LnJpYmJvbjo6YmVmb3Jle3RvcDo1NnB4fX0ubWF0LXRvb2xiYXJ7cG9zaXRpb246cmVsYXRpdmV9Lm1hdC10b29sYmFyIC5wcm9ncmVzcy1iYXItd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDt3aWR0aDppbmhlcml0O21hcmdpbi1sZWZ0Oi0xNnB4fS5tYXQtdG9vbGJhciAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIgLnByb2dyZXNzLWJhci1tZXNzYWdle3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEycHh9YF1cbn0pXG5leHBvcnQgY2xhc3MgRGVjU2lkZW5hdlRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkluaXQge1xuXG4gIGluaXRpYWxpemVkO1xuXG4gIG5vdFByb2R1Y3Rpb24gPSB0cnVlO1xuICByaWJib24gPSAnJztcbiAgbGFiZWwgPSAnJztcblxuICBASW5wdXQoKSBjb2xvcjtcblxuICBASW5wdXQoKSBlbnZpcm9ubWVudDtcblxuICBASW5wdXQoKSBsZWZ0TWVudVRyaWdnZXJWaXNpYmxlID0gdHJ1ZTtcblxuICBASW5wdXQoKSByaWdodE1lbnVUcmlnZ2VyVmlzaWJsZSA9IHRydWU7XG5cbiAgQElucHV0KCkgcHJvZ3Jlc3NCYXJWaXNpYmxlOiBzdHJpbmcgfCBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIHRvZ2dsZUxlZnRNZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSB0b2dnbGVSaWdodE1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQENvbnRlbnRDaGlsZChEZWNTaWRlbmF2VG9vbGJhclRpdGxlQ29tcG9uZW50KSBjdXN0b21UaXRsZTogRGVjU2lkZW5hdlRvb2xiYXJUaXRsZUNvbXBvbmVudDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZW52aXJvbm1lbnQgPT09ICdsb2NhbCcpIHtcbiAgICAgIHRoaXMucmliYm9uID0gJ3JpYmJvbi1ncmVlbic7XG4gICAgICB0aGlzLmxhYmVsID0gJ2xhYmVsLmxvY2FsJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZW52aXJvbm1lbnQgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIHRoaXMucmliYm9uID0gJ3JpYmJvbi1ibHVlJztcbiAgICAgIHRoaXMubGFiZWwgPSAnbGFiZWwuZGV2ZWxvcG1lbnQnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbnZpcm9ubWVudCA9PT0gJ3FhJykge1xuICAgICAgdGhpcy5yaWJib24gPSAncmliYm9uLXJlZCc7XG4gICAgICB0aGlzLmxhYmVsID0gJ2xhYmVsLnFhJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuZW52aXJvbm1lbnQgPT09ICdhY3RpdmUnKSB7XG4gICAgICB0aGlzLnJpYmJvbiA9ICdyaWJib24tZ3JlZW4nO1xuICAgICAgdGhpcy5sYWJlbCA9ICdsYWJlbC5hY3RpdmUnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm5vdFByb2R1Y3Rpb24gPSBmYWxzZTtcbiAgICAgIHRoaXMucmliYm9uID0gJ3JpYmJvbi1oaWRkZW4nO1xuICAgIH1cbiAgfVxufVxuIl19