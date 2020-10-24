import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/others/interfaces-Users';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {

  users: Users[] = [];

  constructor(
    private _api: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._api.getUsers().subscribe(user => this.users = user);
  }

  goUsers(user) {
    this._router.navigate(['users', user.id]);
  }

}
