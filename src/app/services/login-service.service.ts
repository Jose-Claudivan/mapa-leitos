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
}