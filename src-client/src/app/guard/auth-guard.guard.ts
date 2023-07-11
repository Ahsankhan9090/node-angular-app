import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { DataService } from '../shared/services/data.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly router: Router,
    private dataService: DataService
  ) {
    // Nothing
  }

  public canActivate() {
    const loggedIn = localStorage.getItem('token');
    if (!loggedIn) {
        this.router.navigate(['/sign-in']).catch(() => undefined);
        return false;
      }

    return true;

  }

}
