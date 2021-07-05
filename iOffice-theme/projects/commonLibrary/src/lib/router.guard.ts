import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Base } from '@vnpt/oneui-core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService) {}
  canActivate(): boolean {
    if (!this.auth.isLogin()) {
      Base.navigateTo('/login');
      return false;
    }
    return true;
  }
}
