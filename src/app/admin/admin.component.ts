import { Router } from '@angular/router';
import { MENU } from './models/menus';
import { Menu } from './role-menu/menu';
import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account/shared/account.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  menus: Menu[];

  constructor(
    private router: Router,
    private accountService: AccountService) { }

  ngOnInit(): void {
    this.menus = MENU;
    this.router.navigate(['admin/situacao']);
  }

  onSubmitLogout() {
    this.accountService.logout();
  }

}
