import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidade-login',
  templateUrl: './unidade-login.component.html',
  styleUrls: ['./unidade-login.component.css']
})
export class UnidadeLoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;
  password: string;

  ngOnInit(): void {
  }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin') {
      //alert("LOGIN REALIZADO COM SUCESSO!");
      this.router.navigate(["situacao"]);
    } else {
      alert("LOGIN FALHOU!");
    }
  }

}
