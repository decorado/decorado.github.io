/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { catchError, share } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/** @typedef {?} */
var CallOptions;
export { CallOptions };
export class DecSketchfabService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.handleError = (error) => {
            /** @type {?} */
            const message = error.message;
            /** @type {?} */
            const bodyMessage = (error && error.error) ? error.error.message : '';
            /** @type {?} */
            const status = error.status;
            /** @type {?} */
            const statusText = error.statusText;
            return throwError({ status, statusText, message, bodyMessage });
        };
    }
    /**
     * @param {?} uid
     * @param {?} configs
     * @return {?}
     */
    pachConfigs(uid, configs) {
        /** @type {?} */
        const options = {};
        /** @type {?} */
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        options.headers = headers;
        /** @type {?} */
        const url = 'https://api.sketchfab.com/v2/models/' + uid + '?token=b230fac2222243258a36619600ba78c1';
        /** @type {?} */
        const callObservable = this.http.patch(url, configs, options)
            .pipe(catchError(this.handleError));
        return this.shareObservable(callObservable);
    }
    /**
     * @param {?} uid
     * @return {?}
     */
    getAllTextures(uid) {
        /** @type {?} */
        const options = {};
        /** @type {?} */
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        options.headers = headers;
        /** @type {?} */
        const url = `https://sketchfab.com/i/models/${uid}/textures`;
        /** @type {?} */
        const callObservable = this.http.get(url, options)
            .pipe(catchError(this.handleError));
        return this.shareObservable(callObservable);
    }
    /**
     * @param {?} call
     * @return {?}
     */
    shareObservable(call) {
        return call.pipe(share());
    }
}
DecSketchfabService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
DecSketchfabService.ctorParameters = () => [
    { type: HttpClient }
];
if (false) {
    /** @type {?} */
    DecSketchfabService.prototype.handleError;
    /** @type {?} */
    DecSketchfabService.prototype.http;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjLXNrZXRjaGZhYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGRlY29yYS9icm93c2VyLWxpYi11aS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2RlYy1za2V0Y2hmYWIvZGVjLXNrZXRjaGZhYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFPLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFjLFVBQVUsRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBMkIsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQWF4RixNQUFNOzs7O0lBRUosWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTsyQkEwQmQsQ0FBQyxLQUFVLEVBQUUsRUFBRTs7WUFDbkMsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7WUFDOUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOztZQUN0RSxNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDOztZQUM1QixNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2pFO0tBaEN3Qzs7Ozs7O0lBRXpDLFdBQVcsQ0FBQyxHQUFXLEVBQUUsT0FBWTs7UUFDbkMsTUFBTSxPQUFPLEdBQWdCLEVBQUUsQ0FBQzs7UUFDaEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ3RFLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztRQUMxQixNQUFNLEdBQUcsR0FBRyxzQ0FBc0MsR0FBRyxHQUFHLEdBQUcseUNBQXlDLENBQUM7O1FBQ3JHLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO2FBQzVELElBQUksQ0FDSCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBRUQsY0FBYyxDQUFDLEdBQVc7O1FBQ3hCLE1BQU0sT0FBTyxHQUFnQixFQUFFLENBQUM7O1FBQ2hDLE1BQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUN0RSxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7UUFDMUIsTUFBTSxHQUFHLEdBQUcsa0NBQWtDLEdBQUcsV0FBVyxDQUFDOztRQUM3RCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO2FBQ2pELElBQUksQ0FDSCxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUM3QixDQUFDO1FBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUM7S0FDN0M7Ozs7O0lBVU8sZUFBZSxDQUFDLElBQXFCO1FBQzNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7Ozs7WUF0QzdCLFVBQVU7Ozs7WUFaRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3J9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMsIEh0dHBSZXF1ZXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgdHlwZSBDYWxsT3B0aW9ucyA9IHtcbiAgaGVhZGVycz86IEh0dHBIZWFkZXJzO1xuICB3aXRoQ3JlZGVudGlhbHM/OiBib29sZWFuO1xuICBwYXJhbXM/OiB7XG4gICAgW3Byb3A6IHN0cmluZ106IGFueTtcbiAgfTtcbn0gJiB7XG4gIFtwcm9wOiBzdHJpbmddOiBhbnk7XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVjU2tldGNoZmFiU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cblxuICBwYWNoQ29uZmlncyh1aWQ6IHN0cmluZywgY29uZmlnczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvcHRpb25zOiBDYWxsT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL2FwaS5za2V0Y2hmYWIuY29tL3YyL21vZGVscy8nICsgdWlkICsgJz90b2tlbj1iMjMwZmFjMjIyMjI0MzI1OGEzNjYxOTYwMGJhNzhjMSc7XG4gICAgY29uc3QgY2FsbE9ic2VydmFibGUgPSB0aGlzLmh0dHAucGF0Y2godXJsLCBjb25maWdzLCBvcHRpb25zKVxuICAgIC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVPYnNlcnZhYmxlKGNhbGxPYnNlcnZhYmxlKTtcbiAgfVxuXG4gIGdldEFsbFRleHR1cmVzKHVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBvcHRpb25zOiBDYWxsT3B0aW9ucyA9IHt9O1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICBvcHRpb25zLmhlYWRlcnMgPSBoZWFkZXJzO1xuICAgIGNvbnN0IHVybCA9IGBodHRwczovL3NrZXRjaGZhYi5jb20vaS9tb2RlbHMvJHt1aWR9L3RleHR1cmVzYDtcbiAgICBjb25zdCBjYWxsT2JzZXJ2YWJsZSA9IHRoaXMuaHR0cC5nZXQodXJsLCBvcHRpb25zKVxuICAgIC5waXBlKFxuICAgICAgY2F0Y2hFcnJvcih0aGlzLmhhbmRsZUVycm9yKVxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuc2hhcmVPYnNlcnZhYmxlKGNhbGxPYnNlcnZhYmxlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRXJyb3IgPSAoZXJyb3I6IGFueSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuICAgIGNvbnN0IGJvZHlNZXNzYWdlID0gKGVycm9yICYmIGVycm9yLmVycm9yKSA/IGVycm9yLmVycm9yLm1lc3NhZ2UgOiAnJztcbiAgICBjb25zdCBzdGF0dXMgPSBlcnJvci5zdGF0dXM7XG4gICAgY29uc3Qgc3RhdHVzVGV4dCA9IGVycm9yLnN0YXR1c1RleHQ7XG4gICAgcmV0dXJuIHRocm93RXJyb3IoeyBzdGF0dXMsIHN0YXR1c1RleHQsIG1lc3NhZ2UsIGJvZHlNZXNzYWdlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzaGFyZU9ic2VydmFibGUoY2FsbDogT2JzZXJ2YWJsZTxhbnk+KSB7XG4gICAgcmV0dXJuIGNhbGwucGlwZShzaGFyZSgpKTtcbiAgfVxufVxuIl19