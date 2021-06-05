import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CheckoutService } from './services/checkout.service';

@Injectable({
  providedIn: 'root'
})
export class ChekoutGuard implements CanActivate {
  constructor(private checkout:CheckoutService,private router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.checkout.is_checked) {
        this.router.navigate(['/checkout'])
      }
    return this.checkout.is_checked;

  }

}
