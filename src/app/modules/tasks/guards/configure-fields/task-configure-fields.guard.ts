import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskConfigureFieldsGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let taskId = +route.paramMap.get("taskId");
    if (isNaN(taskId) || taskId < 1) {
      alert("Invalid task");
      this.router.navigate(['/task/create']);

      return false;
    }
    
    return true;
  }

}
