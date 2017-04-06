import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { ListComponent } from './list.component';
import { RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `<nav>
    <a routerLink="/list" routerLinkActive="active">List</a>
    <a routerLink="/search" routerLinkActive="active">Search</a>
  </nav>
  <router-outlet></router-outlet>`,
  directive: [ListComponent]
})
export class AppComponent implements OnInit{ 
constructor(private globalService: GlobalService){}
}
