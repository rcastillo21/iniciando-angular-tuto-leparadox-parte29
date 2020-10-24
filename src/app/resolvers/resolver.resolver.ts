import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Users } from '../others/interfaces-Users';
import { ApiService } from '../services/api.service';

@Injectable({
    providedIn: 'root'
})

export class UsersResolver implements Resolve<Observable<Users[]>> {
    constructor(
        private _api: ApiService
    ) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this._api.getUsersId(route.paramMap.get('id'));
    }
}