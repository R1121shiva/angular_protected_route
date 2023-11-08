import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem("token", token);
  }

  getToken(): string | null {
    return localStorage.getItem("token");
  }

  removeToken(){
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  loggedIn(username :any, password:any): Observable<any> {
    if (username === "admin" && password === "123456") {
      this.setToken("sdwerrewr454tfgdwrfsff");
      return of({ name: "dfsdf", email: "sdfsdf@gmail.com" });
    } else {
      return throwError(new Error('Invalid credentials')); 
    }
  }

  loggedOut(){
    this.removeToken();
  }
}
