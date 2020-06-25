import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-unidade-login',
  templateUrl: './unidade-login.component.html',
  styleUrls: ['./unidade-login.component.css']
})
export class UnidadeLoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(
    private loginService: LoginServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.loginService.login(this.login);
      console.log(`login realizado: ${result}`);

      //navega para a rota vazia novamente
      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }

  /*login() : void {
    if(this.username == 'admin' && this.password == 'admin') {
      //alert("LOGIN REALIZADO COM SUCESSO!");
      this.router.navigate(["situacao"]);
    } else {
      alert("LOGIN FALHOU!");
    }
  }*/
  
}
