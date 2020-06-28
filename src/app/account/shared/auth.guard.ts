import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot, Router
} from '@angular/router';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private accountService: AccountService) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this.accountService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['admin/unidade-login']);
      return false;
    }
  }
}
