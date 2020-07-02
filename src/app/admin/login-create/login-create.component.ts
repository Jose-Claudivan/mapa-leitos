import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../services/login-service.service';
import { Login } from '../../models/login';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  account = {
    name: '',
    email: '',
    senha: ''
  };

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
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
    
  }
  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);

      //exibe uma mensagem
      console.log(result);
    } catch (error) {
      console.error(error);
    }
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
