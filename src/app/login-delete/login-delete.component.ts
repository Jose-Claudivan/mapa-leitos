import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { LoginServiceService } from '../services/login-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-delete',
  templateUrl: './login-delete.component.html',
  styleUrls: ['./login-delete.component.css']
})
export class LoginDeleteComponent implements OnInit {

  login: Login;

  constructor(
    private loginService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loginService.readById(id).subscribe(login => {
      this.login = login;
    })
  }


  deleteLogin(): void {
    this.loginService.delete(this.login.id).subscribe(() => {
      this.loginService.showMsg('Login excluido com sucesso!');
      this.router.navigate(['/unidade-login']);
    })
  }

  cancelDelete(): void {
    this.router.navigate(['/unidade-login']);
  }
}
