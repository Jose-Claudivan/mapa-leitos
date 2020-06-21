import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginServiceService } from '../services/login-service.service';

@Component({
  selector: 'app-login-read',
  templateUrl: './login-read.component.html',
  styleUrls: ['./login-read.component.css']
})
export class LoginReadComponent implements OnInit {

  logins: Login[];
  displayedColumns = ['id', 'nome', 'cpf', 'login', 'senha', 'email', 'action'];

  constructor(private loginService: LoginServiceService) { }

  ngOnInit(): void {
    this.loginService.read().subscribe(logins => {
      this.logins = logins;
      console.log(logins);
    })
  }
}
