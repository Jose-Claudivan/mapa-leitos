import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/shared/account.service';

@Component({
  selector: 'app-unidade-login',
  templateUrl: './unidade-login.component.html',
  styleUrls: ['./unidade-login.component.css']
})
export class UnidadeLoginComponent implements OnInit {

  login = {
    email: '',
    senha: ''
  }

  constructor(
    private accountService: AccountService,
    private router: Router) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = this.accountService.login(this.login);

      console.log("RESULT QUE EU QUERO: " + result);
      //navega para a rota admin novamente
      this.router.navigate(['/admin/situacao']);
    } catch (error) {
      console.error(error);
    }
  }
}
