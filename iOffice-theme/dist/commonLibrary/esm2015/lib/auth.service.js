import { Injectable } from '@angular/core';
import { Base, Cache } from '@vnpt/oneui-core';
import { Constants } from './constants';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class AuthService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Login
     * @param email
     * @param password
     */
    login(email, password) {
        const obj = {
            username: email,
            password: password,
        };
        return this.http.post(this.apiURL + `/auth/login`, JSON.stringify(obj));
    }
    /***
     * check login mỗi lần vào ứng dụng
     * */
    getUserInfo() {
        return this.http.get(this.apiURL + '/api/user/profile');
    }
    /**
     * Logout
     */
    logout() {
        Cache.clearAll();
        setTimeout(() => {
            Base.navigateTo('/login');
        }, 300);
    }
    errorPage(error_code, data) {
        Base.navigateTo('/errorpage?error_code=' + error_code + "&message='" + data + "'");
    }
    backtoDashboard() {
        Base.navigateTo('/home');
    }
    static checkLogin() {
        let accessToken = Cache.getCache(Constants.CACHE_TOKEN);
        if (!accessToken) {
            try {
                const currentUserStr = Cache.getCache(Constants.CACHE_USER_DETAIL, Cache.COOKIE);
                if (currentUserStr) {
                    const currentUser = JSON.parse(currentUserStr);
                    if (currentUser) {
                        accessToken = currentUser.accessToken;
                        if (accessToken)
                            Cache.addCache(Constants.CACHE_TOKEN, accessToken);
                    }
                }
            }
            catch (e) { }
        }
        if (!accessToken)
            Base.navigateTo('/login');
    }
    isLogin() {
        if (this.getUserToken()) {
            return true;
        }
        else
            return false;
    }
    getCurrentUser() {
        try {
            const currentUserStr = Cache.getCache(Constants.CACHE_USER_DETAIL, Cache.COOKIE);
            if (currentUserStr) {
                const currentUser = JSON.parse(currentUserStr);
                return currentUser;
            }
        }
        catch (e) { }
        return null;
    }
    storeUserDetail(obj, ttl = 60 * 60 * 1000) {
        Cache.addCache(Constants.CACHE_USER_DETAIL, JSON.stringify(obj), Cache.COOKIE, ttl);
    }
    getUserToken() {
        let accessToken = Cache.getCache(Constants.CACHE_TOKEN);
        if (!accessToken) {
            const currentUser = this.getCurrentUser();
            if (currentUser) {
                accessToken = currentUser.accessToken;
                if (accessToken)
                    Cache.addCache(Constants.CACHE_TOKEN, accessToken);
            }
        }
        return accessToken;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(i0.ɵɵinject(i1.HttpClient)); };
AuthService.ɵprov = i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: i1.HttpClient }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvY29tbW9uTGlicmFyeS9zcmMvbGliL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQzs7O0FBSXhDLE1BQU0sT0FBTyxXQUFXO0lBSXRCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBRyxDQUFDO0lBRXhDOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsS0FBYSxFQUFFLFFBQWdCO1FBQ25DLE1BQU0sR0FBRyxHQUFHO1lBQ1YsUUFBUSxFQUFFLEtBQUs7WUFDZixRQUFRLEVBQUUsUUFBUTtTQUNuQixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQ7O1NBRUs7SUFDRSxXQUFXO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRDs7T0FFRztJQUVJLE1BQU07UUFDWCxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLFNBQVMsQ0FBQyxVQUFrQixFQUFFLElBQVk7UUFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FDYix3QkFBd0IsR0FBRyxVQUFVLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxHQUFHLENBQ2xFLENBQUM7SUFDSixDQUFDO0lBRU0sZUFBZTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVTtRQUN0QixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLElBQUk7Z0JBQ0YsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FDbkMsU0FBUyxDQUFDLGlCQUFpQixFQUMzQixLQUFLLENBQUMsTUFBTSxDQUNiLENBQUM7Z0JBRUYsSUFBSSxjQUFjLEVBQUU7b0JBQ2xCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7b0JBQy9DLElBQUksV0FBVyxFQUFFO3dCQUNmLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO3dCQUN0QyxJQUFJLFdBQVc7NEJBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxDQUFDO3FCQUNyRTtpQkFDRjthQUNGO1lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtTQUNmO1FBQ0QsSUFBSSxDQUFDLFdBQVc7WUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFTSxPQUFPO1FBQ1osSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxJQUFJLENBQUM7U0FDYjs7WUFBTSxPQUFPLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sY0FBYztRQUNuQixJQUFJO1lBQ0YsTUFBTSxjQUFjLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FDbkMsU0FBUyxDQUFDLGlCQUFpQixFQUMzQixLQUFLLENBQUMsTUFBTSxDQUNiLENBQUM7WUFFRixJQUFJLGNBQWMsRUFBRTtnQkFDbEIsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDL0MsT0FBTyxXQUFXLENBQUM7YUFDcEI7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7UUFFZCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxlQUFlLENBQUMsR0FBUSxFQUFFLE1BQWMsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO1FBQzNELEtBQUssQ0FBQyxRQUFRLENBQ1osU0FBUyxDQUFDLGlCQUFpQixFQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNuQixLQUFLLENBQUMsTUFBTSxFQUNaLEdBQUcsQ0FDSixDQUFDO0lBQ0osQ0FBQztJQUVNLFlBQVk7UUFDakIsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDMUMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsV0FBVyxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUM7Z0JBQ3RDLElBQUksV0FBVztvQkFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDckU7U0FDRjtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O3NFQWhIVSxXQUFXO21EQUFYLFdBQVcsV0FBWCxXQUFXLG1CQURFLE1BQU07a0RBQ25CLFdBQVc7Y0FEdkIsVUFBVTtlQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbmltcG9ydCB7IEJhc2UsIENhY2hlIH0gZnJvbSAnQHZucHQvb25ldWktY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnLi9tb2RlbHMvdXNlci5tb2RlbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgb3JpZ2luOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhcGlVUkw6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICAvKipcclxuICAgKiBMb2dpblxyXG4gICAqIEBwYXJhbSBlbWFpbFxyXG4gICAqIEBwYXJhbSBwYXNzd29yZFxyXG4gICAqL1xyXG4gIGxvZ2luKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgdXNlcm5hbWU6IGVtYWlsLFxyXG4gICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PHN0cmluZz4oXHJcbiAgICAgIHRoaXMuYXBpVVJMICsgYC9hdXRoL2xvZ2luYCxcclxuICAgICAgSlNPTi5zdHJpbmdpZnkob2JqKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKipcclxuICAgKiBjaGVjayBsb2dpbiBt4buXaSBs4bqnbiB2w6BvIOG7qW5nIGThu6VuZ1xyXG4gICAqICovXHJcbiAgcHVibGljIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodGhpcy5hcGlVUkwgKyAnL2FwaS91c2VyL3Byb2ZpbGUnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ291dFxyXG4gICAqL1xyXG5cclxuICBwdWJsaWMgbG9nb3V0KCkge1xyXG4gICAgQ2FjaGUuY2xlYXJBbGwoKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBCYXNlLm5hdmlnYXRlVG8oJy9sb2dpbicpO1xyXG4gICAgfSwgMzAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBlcnJvclBhZ2UoZXJyb3JfY29kZTogbnVtYmVyLCBkYXRhOiBzdHJpbmcpIHtcclxuICAgIEJhc2UubmF2aWdhdGVUbyhcclxuICAgICAgJy9lcnJvcnBhZ2U/ZXJyb3JfY29kZT0nICsgZXJyb3JfY29kZSArIFwiJm1lc3NhZ2U9J1wiICsgZGF0YSArIFwiJ1wiXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGJhY2t0b0Rhc2hib2FyZCgpIHtcclxuICAgIEJhc2UubmF2aWdhdGVUbygnL2hvbWUnKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY2hlY2tMb2dpbigpIHtcclxuICAgIGxldCBhY2Nlc3NUb2tlbiA9IENhY2hlLmdldENhY2hlKENvbnN0YW50cy5DQUNIRV9UT0tFTik7XHJcbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJTdHIgPSBDYWNoZS5nZXRDYWNoZShcclxuICAgICAgICAgIENvbnN0YW50cy5DQUNIRV9VU0VSX0RFVEFJTCxcclxuICAgICAgICAgIENhY2hlLkNPT0tJRVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50VXNlclN0cikge1xyXG4gICAgICAgICAgY29uc3QgY3VycmVudFVzZXIgPSBKU09OLnBhcnNlKGN1cnJlbnRVc2VyU3RyKTtcclxuICAgICAgICAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgICAgICAgICBhY2Nlc3NUb2tlbiA9IGN1cnJlbnRVc2VyLmFjY2Vzc1Rva2VuO1xyXG4gICAgICAgICAgICBpZiAoYWNjZXNzVG9rZW4pIENhY2hlLmFkZENhY2hlKENvbnN0YW50cy5DQUNIRV9UT0tFTiwgYWNjZXNzVG9rZW4pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuICAgIGlmICghYWNjZXNzVG9rZW4pIEJhc2UubmF2aWdhdGVUbygnL2xvZ2luJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNMb2dpbigpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmdldFVzZXJUb2tlbigpKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDdXJyZW50VXNlcigpOiBVc2VyTW9kZWwge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXJTdHIgPSBDYWNoZS5nZXRDYWNoZShcclxuICAgICAgICBDb25zdGFudHMuQ0FDSEVfVVNFUl9ERVRBSUwsXHJcbiAgICAgICAgQ2FjaGUuQ09PS0lFXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY3VycmVudFVzZXJTdHIpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VXNlciA9IEpTT04ucGFyc2UoY3VycmVudFVzZXJTdHIpO1xyXG4gICAgICAgIHJldHVybiBjdXJyZW50VXNlcjtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZSkge31cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9yZVVzZXJEZXRhaWwob2JqOiBhbnksIHR0bDogbnVtYmVyID0gNjAgKiA2MCAqIDEwMDApIHtcclxuICAgIENhY2hlLmFkZENhY2hlKFxyXG4gICAgICBDb25zdGFudHMuQ0FDSEVfVVNFUl9ERVRBSUwsXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KG9iaiksXHJcbiAgICAgIENhY2hlLkNPT0tJRSxcclxuICAgICAgdHRsXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldFVzZXJUb2tlbigpOiBzdHJpbmcge1xyXG4gICAgbGV0IGFjY2Vzc1Rva2VuID0gQ2FjaGUuZ2V0Q2FjaGUoQ29uc3RhbnRzLkNBQ0hFX1RPS0VOKTtcclxuICAgIGlmICghYWNjZXNzVG9rZW4pIHtcclxuICAgICAgY29uc3QgY3VycmVudFVzZXIgPSB0aGlzLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgIGlmIChjdXJyZW50VXNlcikge1xyXG4gICAgICAgIGFjY2Vzc1Rva2VuID0gY3VycmVudFVzZXIuYWNjZXNzVG9rZW47XHJcbiAgICAgICAgaWYgKGFjY2Vzc1Rva2VuKSBDYWNoZS5hZGRDYWNoZShDb25zdGFudHMuQ0FDSEVfVE9LRU4sIGFjY2Vzc1Rva2VuKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFjY2Vzc1Rva2VuO1xyXG4gIH1cclxufVxyXG4iXX0=