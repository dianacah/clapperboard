import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutoGuardService {


  constructor(private router: Router) { }

  canActivate() {
    if (!localStorage.getItem('id')) {
        console.log('No estás logueado');
        this.router.navigate(['/']);
        return false;
    }

    return true;
}


}
