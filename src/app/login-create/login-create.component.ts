import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';
import { Login } from '../models/login';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  login: Login = {
    nome: '',
    cpf: null,
    email: '',
    login: '',
    senha: ''
  }

  constructor(private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createLogin(): void {
    this.loginService.create(this.login).subscribe(() => {
      this.loginService.showMsg('Cadastro realizado com sucesso!');
      this.router.navigate(['/unidade-create']);
    }) 
  }

  cancelLogin(): void {
    this.router.navigate(['/unidade-create']);
  }

}
