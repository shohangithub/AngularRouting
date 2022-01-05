import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
base_url: string;
static localStorageUserToken = 'currentUser';
constructor() { 
  this.base_url = 'http://localhost:4002/api';
}

public static getUserInfo() {
  const currentUser = localStorage.getItem(this.localStorageUserToken);
  if (currentUser != null) {
    const user = atob(currentUser.toString());
  }

  return currentUser != null ? atob(currentUser.toString()) : null;
}

}
