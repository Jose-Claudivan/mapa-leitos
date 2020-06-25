import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  login: Login = {
    nome: '',
    cpf: '',
    email: '',
    login: '',
    senha: '',
    unidade: {
      id:1,
      cnpj: "",
      nome: "",
      latitude:0,
      longitude: 0,
      distancia:"",
      leito:{
        id:1,
        total:0,
        disponiveis:0
      }
    }
  }

  constructor(private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit() {

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
