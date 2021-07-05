import { HttpClient } from '@angular/common/http';
import { UserModel } from './models/user.model';
import * as i0 from "@angular/core";
export declare class AuthService {
    private http;
    private origin;
    private apiURL;
    constructor(http: HttpClient);
    /**
     * Login
     * @param email
     * @param password
     */
    login(email: string, password: string): import("rxjs").Observable<string>;
    /***
     * check login mỗi lần vào ứng dụng
     * */
    getUserInfo(): import("rxjs").Observable<Object>;
    /**
     * Logout
     */
    logout(): void;
    errorPage(error_code: number, data: string): void;
    backtoDashboard(): void;
    static checkLogin(): void;
    isLogin(): boolean;
    getCurrentUser(): UserModel;
    storeUserDetail(obj: any, ttl?: number): void;
    getUserToken(): string;
    static ɵfac: i0.ɵɵFactoryDef<AuthService, never>;
    static ɵprov: i0.ɵɵInjectableDef<AuthService>;
}
//# sourceMappingURL=auth.service.d.ts.map