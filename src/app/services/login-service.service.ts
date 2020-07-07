import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { REQUEST_BASE_URL } from '../models/request';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  testeUrl = "https://clickleito.herokuapp.com/usuario";
  constructor(private snackBar: MatSnackBar,
    private http: HttpClient) { }

  showMsg(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    });
  }
  
  create(login: Login): Observable<Login> {
    console.log(login);
    return this.http.post<Login>(`${REQUEST_BASE_URL}/api/auth/signup`, login)
  }

  read(): Observable<Login[]> {
    return this.http.get<Login[]>(this.testeUrl);
  }

  readById(id: number): Observable<Login> {
    const url = `${this.testeUrl}/${id}`
    return this.http.get<Login>(url)
  }

  update(login: Login): Observable<Login> {
    const url = `${this.testeUrl}/${login.id}`
    return this.http.put<Login>(url, login)
  }

  delete(id: number): Observable<Login> {
    const url = `${this.testeUrl}/${id}`
    return this.http.delete<Login>(url);
  }
}
