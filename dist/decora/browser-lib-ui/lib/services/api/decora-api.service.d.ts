import { OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserAuthData, LoginData, FacebookLoginData, ServiceConfig, DecFilter } from './decora-api.model';
export declare type CallOptions = {
    headers?: HttpHeaders;
    withCredentials?: boolean;
    params?: {
        [prop: string]: any;
    };
} & {
    [prop: string]: any;
};
export declare type HttpRequestTypes = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
export declare class DecApiService implements OnDestroy {
    private http;
    private config;
    user: UserAuthData;
    user$: BehaviorSubject<UserAuthData>;
    private sessionToken;
    private userSubscripion;
    readonly host: string;
    constructor(http: HttpClient, config: ServiceConfig);
    ngOnDestroy(): void;
    auth: (loginData: LoginData) => Observable<any>;
    authFacebook: (loginData: FacebookLoginData) => Observable<any>;
    logout: (redirectToLoginPage?: boolean) => Observable<any>;
    fetchCurrentLoggedUser: () => Observable<any>;
    get: <T>(endpoint: any, search?: DecFilter, options?: CallOptions) => Observable<any>;
    delete: <T>(endpoint: any, options?: CallOptions) => Observable<any>;
    patch: <T>(endpoint: any, payload?: any, options?: CallOptions) => Observable<any>;
    post: <T>(endpoint: any, payload?: any, options?: CallOptions) => Observable<any>;
    put: <T>(endpoint: any, payload?: any, options?: CallOptions) => Observable<any>;
    upsert: <T>(endpoint: any, payload?: any, options?: CallOptions) => Observable<any>;
    upload(endpoint: string, files: File[], options?: CallOptions): Observable<any>;
    private transformDecFilterInParams(filter);
    private filterObjectToQueryString(obj);
    private getFilterWithValuesAsArray(filterGroups);
    private getMethod<T>(url, search?, options?);
    private patchMethod<T>(url, body?, options?);
    private postMethod<T>(url, body?, options?);
    private putMethod<T>(url, body?, options?);
    private deleteMethod<T>(url, options?);
    private requestMethod<T>(type, url, body?, options?);
    private handleError;
    private createFilesFormData(files);
    private goToLoginPage();
    private getParamsDivider();
    private tryToLoadSignedInUser();
    private newHeaderWithSessionToken(type?, headers?);
    private extratSessionToken(res);
    private getResourceUrl(path);
    private subscribeToUser();
    private unsubscribeToUser();
    private shareObservable(call);
}
