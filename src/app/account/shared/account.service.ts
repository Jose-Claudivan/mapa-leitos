import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REQUEST_BASE_URL } from '../../models/request';
import * as jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  //confirmar a url do LOGIN no BACK
  //access_token é o token que sera retornado pela api
  login(user: any) {
    return this.http.post<any>(`${REQUEST_BASE_URL}/api/auth/signin`, user).subscribe((result) => {
      localStorage.setItem('token', result.accessToken);
      console.log(result);
    },
    (err) => {console.log(err)});
  }

  logout() {
    window.localStorage.clear();
    alert("Você está saindo do Sistema!")
  }
  //confirmar a url do LOGIN no BACK
  async createAccount(account: any) {
    const result = await this.http.post<any>(`${REQUEST_BASE_URL}/users`, account).toPromise();
    return result;
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  getTokenExpirationDate(token: string): Date {
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired(token: string): boolean {
    if (!token) {
      return true;
    }

    const date = this.getTokenExpirationDate(token);
    if (date === undefined) {
      return false;
    }
    
    return !(date.valueOf() > new Date().valueOf());
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();
    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }

    return true;
  }
}
