import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-update',
  templateUrl: './login-update.component.html',
  styleUrls: ['./login-update.component.css']
})
export class LoginUpdateComponent implements OnInit {

  login: Login;

  constructor(
    private loginService: LoginServiceService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loginService.readById(id).subscribe(login => {
      this.login = login;
    });
  }

  updateLogin(): void {
    this.loginService.update(this.login).subscribe(() => {
      this.loginService.showMsg('Cadastro alterado com sucesso!');
      this.router.navigate(['/unidade-login']);
    })
  }

  cancelUpdate(): void {
    this.router.navigate(['/unidade-login']);
  }
}
