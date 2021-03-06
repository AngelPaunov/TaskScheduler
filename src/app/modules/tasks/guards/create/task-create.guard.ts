import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskCreateGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let typeId = route.paramMap.get('type') ? +route.paramMap.get('type') : -1;
    let subTypeId = route.paramMap.get('subtype') ? +route.paramMap.get('subtype') : -1;
    if (isNaN(typeId) || typeId < 0 || isNaN(subTypeId) || subTypeId < 0) {
      alert("Invalid type or subType");
      this.router.navigate(['/task/create']);

      return false;
    }

    return true;
  }
}
