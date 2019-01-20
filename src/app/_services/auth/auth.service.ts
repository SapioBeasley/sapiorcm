import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated()) {
      return true;
    }

    this.router.navigate(['/login'], {
      queryParams: {
        return: state.url
      }
    });

    return false;
  }

  isAuthenticated() {
    const check = true;
    console.log(check);
    return check;
  }
}
