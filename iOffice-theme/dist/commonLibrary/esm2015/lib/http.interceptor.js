// import {ConnectionBackend, RequestOptions, Request, HttpRequest, Response, Http, Headers} from '@angular/http';
import { HttpResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Base, Cache } from '@vnpt/oneui-core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import { RequestOptions } from './request-options';
import { md5 } from '@vnpt/oneui-core';
import 'rxjs/add/operator/catch';
import * as i0 from "@angular/core";
import * as i1 from "./auth.service";
export class InterceptedHttp {
    constructor(auth) {
        this.auth = auth;
        this.apiURL = localStorage.getItem('api:url:base');
        this.origin = localStorage.getItem('enviroment:origin');
    }
    intercept(req, next) {
        if (!/^(http|https):/i.test(req.url)) {
            req = req.clone({ url: this.apiURL + req.url });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
        }
        if (this.isCacheEnabled(req)) {
            const cachedResponse = this.getCache(req);
            return cachedResponse
                ? Observable.of(cachedResponse)
                : this.sendRequest(req, next);
        }
        return this.sendRequest(req, next);
    }
    sendRequest(req, next) {
        //get token
        if (!this.isNoToken(req)) {
            let accessToken = this.auth.getUserToken();
            if (accessToken) {
                if (req.headers == null || req.headers === undefined) {
                    req = req.clone({
                        setHeaders: {
                            'Content-Type': 'application/json; charset=utf-8',
                            Authorization: 'Bearer ' + accessToken,
                        },
                    });
                }
                else {
                    req = req.clone({
                        setHeaders: {
                            'Content-Type': 'application/json; charset=utf-8',
                            Authorization: 'Bearer ' + accessToken,
                        },
                    });
                }
            }
        }
        if (!/^(http|https):/i.test(req.url)) {
            req = req.clone({ url: this.apiURL + req.url });
        }
        else {
            req = req.clone({
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
            });
        }
        return next
            .handle(req)
            .pipe(tap((event) => {
            if (event instanceof HttpResponse) {
                if (this.isCacheEnabled(req)) {
                    this.putCache(req, event);
                }
            }
        }))
            .catch((error) => {
            Base.hideLoading();
            if (error.status || (error.error && error.error.code)) {
                if (error.status === 401 || error.error.code === 401) {
                    Base.showNotification('Bạn chưa đăng nhập, vui lòng đăng nhập', Base.NOTI_ERROR, 'Lỗi đăng nhập');
                    this.auth.logout();
                    return Observable.throw(error);
                }
                else if (error.status === 403 || error.error.code === 403) {
                    Base.showNotification('Bạn không có quyền truy cập vào chức năng này', Base.NOTI_ERROR, 'Lỗi truy nhập');
                    this.auth.backtoDashboard();
                    return Observable.throw(error);
                }
                else {
                    if (error.error && error.error.code) {
                        Base.showNotification('Lỗi: ' + error.error.code + ': ' + error.error.message + '', Base.NOTI_ERROR, 'Lỗi kết nối');
                    }
                    else {
                        if (error.status && !this.isErrorPassing(req)) {
                            this.auth.errorPage(error.status, req.url + ' Response: ' + error.message);
                        }
                    }
                    return Observable.throw(error);
                }
            }
            else {
                if (!this.isErrorPassing(req)) {
                    if (error.message)
                        this.auth.errorPage(0, req.url + ' Response: ' + error.message);
                    else
                        this.auth.errorPage(0, 'Lỗi không xác định');
                }
                return Observable.throw(error);
            }
        });
    }
    isCacheEnabled(req) {
        return req.params instanceof RequestOptions && req.params.cache;
    }
    isErrorPassing(req) {
        return req.params instanceof RequestOptions && req.params.errorPassing;
    }
    isNoToken(req) {
        return req.params instanceof RequestOptions && req.params.noToken;
    }
    generateCacheKey(url) {
        let str = [];
        str.push(url.urlWithParams);
        if (!!url.body) {
            str.push(JSON.stringify(url.body));
        }
        return md5(str.join(':'));
    }
    getCache(req) {
        let cacheData = Cache.getCache(this.generateCacheKey(req));
        if (cacheData) {
            let cachedResponse = new HttpResponse();
            Object.assign(cachedResponse, JSON.parse(cacheData));
            return cachedResponse;
        }
        return undefined;
    }
    putCache(req, response) {
        let cacheTtl = 10 * 60 * 1000;
        if (req.params instanceof RequestOptions && req.params.ttl > 0) {
            cacheTtl = req.params.ttl;
        }
        Cache.addCache(this.generateCacheKey(req), JSON.stringify(response), Cache.STORAGE, new Date().getTime() + cacheTtl);
    }
}
InterceptedHttp.ɵfac = function InterceptedHttp_Factory(t) { return new (t || InterceptedHttp)(i0.ɵɵinject(i1.AuthService)); };
InterceptedHttp.ɵprov = i0.ɵɵdefineInjectable({ token: InterceptedHttp, factory: InterceptedHttp.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(InterceptedHttp, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.AuthService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2NvbW1vbkxpYnJhcnkvc3JjL2xpYi9odHRwLmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtIQUFrSDtBQUNsSCxPQUFPLEVBS0wsWUFBWSxHQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN2QyxPQUFPLHlCQUF5QixDQUFDOzs7QUFHakMsTUFBTSxPQUFPLGVBQWU7SUFHMUIsWUFBbUIsSUFBaUI7UUFBakIsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELFNBQVMsQ0FDUCxHQUFxQixFQUNyQixJQUFpQjtRQUVqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FB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LEdBQXFCO1FBQzVCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLGNBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1lBQzdDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRCxPQUFPLGNBQWMsQ0FBQztTQUN2QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFFRCxRQUFRLENBQUMsR0FBcUIsRUFBRSxRQUEyQjtRQUN6RCxJQUFJLFFBQVEsR0FBVyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztRQUN0QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLFlBQVksY0FBYyxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRTtZQUM5RCxRQUFRLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7U0FDM0I7UUFDRCxLQUFLLENBQUMsUUFBUSxDQUNaLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsRUFDeEIsS0FBSyxDQUFDLE9BQU8sRUFDYixJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLFFBQVEsQ0FDaEMsQ0FBQztJQUNKLENBQUM7OzhFQXpLVSxlQUFlO3VEQUFmLGVBQWUsV0FBZixlQUFlLG1CQURGLE1BQU07a0RBQ25CLGVBQWU7Y0FEM0IsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7Q29ubmVjdGlvbkJhY2tlbmQsIFJlcXVlc3RPcHRpb25zLCBSZXF1ZXN0LCBIdHRwUmVxdWVzdCwgUmVzcG9uc2UsIEh0dHAsIEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQge1xyXG4gIEh0dHBFdmVudCxcclxuICBIdHRwUmVxdWVzdCxcclxuICBIdHRwSW50ZXJjZXB0b3IsXHJcbiAgSHR0cEhhbmRsZXIsXHJcbiAgSHR0cFJlc3BvbnNlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlLCBDYWNoZSB9IGZyb20gJ0B2bnB0L29uZXVpLWNvcmUnO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XHJcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL29mJztcclxuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICcuL3JlcXVlc3Qtb3B0aW9ucyc7XHJcbmltcG9ydCB7IG1kNSB9IGZyb20gJ0B2bnB0L29uZXVpLWNvcmUnO1xyXG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NhdGNoJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmNlcHRlZEh0dHAgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xyXG4gIHByaXZhdGUgb3JpZ2luOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhcGlVUkw6IHN0cmluZztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYXBpVVJMID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwaTp1cmw6YmFzZScpO1xyXG4gICAgdGhpcy5vcmlnaW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZW52aXJvbWVudDpvcmlnaW4nKTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdChcclxuICAgIHJlcTogSHR0cFJlcXVlc3Q8YW55PixcclxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXHJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xyXG4gICAgaWYgKCEvXihodHRwfGh0dHBzKTovaS50ZXN0KHJlcS51cmwpKSB7XHJcbiAgICAgIHJlcSA9IHJlcS5jbG9uZSh7IHVybDogdGhpcy5hcGlVUkwgKyByZXEudXJsIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICBzZXRIZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmlzQ2FjaGVFbmFibGVkKHJlcSkpIHtcclxuICAgICAgY29uc3QgY2FjaGVkUmVzcG9uc2UgPSB0aGlzLmdldENhY2hlKHJlcSk7XHJcbiAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZVxyXG4gICAgICAgID8gT2JzZXJ2YWJsZS5vZihjYWNoZWRSZXNwb25zZSlcclxuICAgICAgICA6IHRoaXMuc2VuZFJlcXVlc3QocmVxLCBuZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5zZW5kUmVxdWVzdChyZXEsIG5leHQpO1xyXG4gIH1cclxuXHJcbiAgc2VuZFJlcXVlc3QoXHJcbiAgICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXHJcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcclxuICAgIC8vZ2V0IHRva2VuXHJcblxyXG4gICAgaWYgKCF0aGlzLmlzTm9Ub2tlbihyZXEpKSB7XHJcbiAgICAgIGxldCBhY2Nlc3NUb2tlbiA9IHRoaXMuYXV0aC5nZXRVc2VyVG9rZW4oKTtcclxuICAgICAgaWYgKGFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgICAgaWYgKHJlcS5oZWFkZXJzID09IG51bGwgfHwgcmVxLmhlYWRlcnMgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVxID0gcmVxLmNsb25lKHtcclxuICAgICAgICAgICAgc2V0SGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogJ0JlYXJlciAnICsgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIS9eKGh0dHB8aHR0cHMpOi9pLnRlc3QocmVxLnVybCkpIHtcclxuICAgICAgcmVxID0gcmVxLmNsb25lKHsgdXJsOiB0aGlzLmFwaVVSTCArIHJlcS51cmwgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXEgPSByZXEuY2xvbmUoe1xyXG4gICAgICAgIHNldEhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5leHRcclxuICAgICAgLmhhbmRsZShyZXEpXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIHRhcCgoZXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEh0dHBSZXNwb25zZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NhY2hlRW5hYmxlZChyZXEpKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wdXRDYWNoZShyZXEsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIEJhc2UuaGlkZUxvYWRpbmcoKTtcclxuICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzIHx8IChlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5jb2RlKSkge1xyXG4gICAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAxIHx8IGVycm9yLmVycm9yLmNvZGUgPT09IDQwMSkge1xyXG4gICAgICAgICAgICBCYXNlLnNob3dOb3RpZmljYXRpb24oXHJcbiAgICAgICAgICAgICAgJ0LhuqFuIGNoxrBhIMSRxINuZyBuaOG6rXAsIHZ1aSBsw7JuZyDEkcSDbmcgbmjhuq1wJyxcclxuICAgICAgICAgICAgICBCYXNlLk5PVElfRVJST1IsXHJcbiAgICAgICAgICAgICAgJ0zhu5dpIMSRxINuZyBuaOG6rXAnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMyB8fCBlcnJvci5lcnJvci5jb2RlID09PSA0MDMpIHtcclxuICAgICAgICAgICAgQmFzZS5zaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICdC4bqhbiBraMO0bmcgY8OzIHF1eeG7gW4gdHJ1eSBj4bqtcCB2w6BvIGNo4bupYyBuxINuZyBuw6B5JyxcclxuICAgICAgICAgICAgICBCYXNlLk5PVElfRVJST1IsXHJcbiAgICAgICAgICAgICAgJ0zhu5dpIHRydXkgbmjhuq1wJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmF1dGguYmFja3RvRGFzaGJvYXJkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5lcnJvciAmJiBlcnJvci5lcnJvci5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgQmFzZS5zaG93Tm90aWZpY2F0aW9uKFxyXG4gICAgICAgICAgICAgICAgJ0zhu5dpOiAnICsgZXJyb3IuZXJyb3IuY29kZSArICc6ICcgKyBlcnJvci5lcnJvci5tZXNzYWdlICsgJycsXHJcbiAgICAgICAgICAgICAgICBCYXNlLk5PVElfRVJST1IsXHJcbiAgICAgICAgICAgICAgICAnTOG7l2kga+G6v3QgbuG7kWknXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzICYmICF0aGlzLmlzRXJyb3JQYXNzaW5nKHJlcSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXV0aC5lcnJvclBhZ2UoXHJcbiAgICAgICAgICAgICAgICAgIGVycm9yLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgcmVxLnVybCArICcgUmVzcG9uc2U6ICcgKyBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICghdGhpcy5pc0Vycm9yUGFzc2luZyhyZXEpKSB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICAgIHRoaXMuYXV0aC5lcnJvclBhZ2UoMCwgcmVxLnVybCArICcgUmVzcG9uc2U6ICcgKyBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgZWxzZSB0aGlzLmF1dGguZXJyb3JQYWdlKDAsICdM4buXaSBraMO0bmcgeMOhYyDEkeG7i25oJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNDYWNoZUVuYWJsZWQocmVxOiBIdHRwUmVxdWVzdDxhbnk+KSB7XHJcbiAgICByZXR1cm4gcmVxLnBhcmFtcyBpbnN0YW5jZW9mIFJlcXVlc3RPcHRpb25zICYmIHJlcS5wYXJhbXMuY2FjaGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzRXJyb3JQYXNzaW5nKHJlcTogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgcmV0dXJuIHJlcS5wYXJhbXMgaW5zdGFuY2VvZiBSZXF1ZXN0T3B0aW9ucyAmJiByZXEucGFyYW1zLmVycm9yUGFzc2luZztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNOb1Rva2VuKHJlcTogSHR0cFJlcXVlc3Q8YW55Pikge1xyXG4gICAgcmV0dXJuIHJlcS5wYXJhbXMgaW5zdGFuY2VvZiBSZXF1ZXN0T3B0aW9ucyAmJiByZXEucGFyYW1zLm5vVG9rZW47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlQ2FjaGVLZXkodXJsOiBIdHRwUmVxdWVzdDxhbnk+KTogc3RyaW5nIHtcclxuICAgIGxldCBzdHIgPSBbXTtcclxuICAgIHN0ci5wdXNoKHVybC51cmxXaXRoUGFyYW1zKTtcclxuICAgIGlmICghIXVybC5ib2R5KSB7XHJcbiAgICAgIHN0ci5wdXNoKEpTT04uc3RyaW5naWZ5KHVybC5ib2R5KSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWQ1KHN0ci5qb2luKCc6JykpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2FjaGUocmVxOiBIdHRwUmVxdWVzdDxhbnk+KTogSHR0cFJlc3BvbnNlPGFueT4gfCB1bmRlZmluZWQge1xyXG4gICAgbGV0IGNhY2hlRGF0YSA9IENhY2hlLmdldENhY2hlKHRoaXMuZ2VuZXJhdGVDYWNoZUtleShyZXEpKTtcclxuICAgIGlmIChjYWNoZURhdGEpIHtcclxuICAgICAgbGV0IGNhY2hlZFJlc3BvbnNlID0gbmV3IEh0dHBSZXNwb25zZTxhbnk+KCk7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24oY2FjaGVkUmVzcG9uc2UsIEpTT04ucGFyc2UoY2FjaGVEYXRhKSk7XHJcbiAgICAgIHJldHVybiBjYWNoZWRSZXNwb25zZTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwdXRDYWNoZShyZXE6IEh0dHBSZXF1ZXN0PGFueT4sIHJlc3BvbnNlOiBIdHRwUmVzcG9uc2U8YW55Pik6IHZvaWQge1xyXG4gICAgbGV0IGNhY2hlVHRsOiBudW1iZXIgPSAxMCAqIDYwICogMTAwMDtcclxuICAgIGlmIChyZXEucGFyYW1zIGluc3RhbmNlb2YgUmVxdWVzdE9wdGlvbnMgJiYgcmVxLnBhcmFtcy50dGwgPiAwKSB7XHJcbiAgICAgIGNhY2hlVHRsID0gcmVxLnBhcmFtcy50dGw7XHJcbiAgICB9XHJcbiAgICBDYWNoZS5hZGRDYWNoZShcclxuICAgICAgdGhpcy5nZW5lcmF0ZUNhY2hlS2V5KHJlcSksXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcclxuICAgICAgQ2FjaGUuU1RPUkFHRSxcclxuICAgICAgbmV3IERhdGUoKS5nZXRUaW1lKCkgKyBjYWNoZVR0bFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl19