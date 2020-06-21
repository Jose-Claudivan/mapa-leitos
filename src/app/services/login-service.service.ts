import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  testeUrl = "http://localhost:3000/unidade";
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
    return this.http.post<Login>(this.testeUrl, login)
  }

  read(): Observable<Login[]> {
    return this.http.get<Login[]>(this.testeUrl);
  }

  readById(id: string): Observable<Login> {
    const url = `${this.testeUrl}/${id}`
    return this.http.get<Login>(url)
  }

  update(login: Login): Observable<Login> {
    const url = `${this.testeUrl}/${login.id}`
    return this.http.put<Login>(url, login)
  }
}
