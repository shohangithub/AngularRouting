import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Config } from '../config';
import { UserAuthentication } from '../models/user-authentication';
import { ApiService } from './api.service';
import { AppConfigService } from './app-config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UserAuthentication>;
  public currentUser: Observable<UserAuthentication>;

  private ctrName = 'login';
  baseUrl: string = Config.serviceUrl;

  constructor(
    private apiSvc: ApiService,
    private router: Router,
    private appCon: AppConfigService
  ) {
    const currentUser = AppConfigService.getUserInfo();
  }

  public get currentUserInfo(): UserAuthentication {
    return this.currentUserSubject.value;
  }

  login(
    user: UserAuthentication
  ): Observable<UserAuthentication> {
    const data = user;
    return this.apiSvc.executeQuery(`${this.ctrName}/VerifyUser`, data, true);
  }

  logout(): void {
    localStorage.removeItem('currentUser');
   // this.currentUserSubject.next(null);
    this.currentUserSubject.next({});
    this.router.navigate(['login']);
  }

  storeUserInfo(user: UserAuthentication): boolean {
    try {
      const userToJson = JSON.stringify(user);
      const encodedData = btoa(userToJson.toString());

      localStorage.setItem('currentUser', encodedData);
      this.currentUserSubject.next(user);
      return true;
    } catch {
      return false;
    }
  }

  deleteToken() {
    if (localStorage.length) {
      for (let i = 1; i <= localStorage.length; i++) {
        const keys = localStorage.key(i - 1) || '';
        localStorage.removeItem(keys);
        i--;
      }

     // GlobalConstants.menuList = [];
    }
  }

  getMenus(locationID: number, userId: number) {
    const params = new HttpParams()
      .set('locationID', !locationID ? '0' : locationID.toString())
      .set('userID', userId.toString());

    return this.apiSvc.executeQuery(this.baseUrl + 'Admin/GetMenus', params).pipe(
      map((response: any) => {
        return response.body;
      })
    );
  }
}
