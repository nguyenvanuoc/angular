import { HttpEvent, HttpRequest, HttpInterceptor, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import * as i0 from "@angular/core";
export declare class InterceptedHttp implements HttpInterceptor {
    auth: AuthService;
    private origin;
    private apiURL;
    constructor(auth: AuthService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    sendRequest(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private isCacheEnabled;
    private isErrorPassing;
    private isNoToken;
    private generateCacheKey;
    getCache(req: HttpRequest<any>): HttpResponse<any> | undefined;
    putCache(req: HttpRequest<any>, response: HttpResponse<any>): void;
    static ɵfac: i0.ɵɵFactoryDef<InterceptedHttp, never>;
    static ɵprov: i0.ɵɵInjectableDef<InterceptedHttp>;
}
//# sourceMappingURL=http.interceptor.d.ts.map