import { Component } from '@angular/core';
import { GlobalService } from './global.service';
@Component({
  selector: 'my-app',
  template: `<h1>List of Employees</h1>
  <ul><li *ngFor="let employee of employees; let i = index; trackBy: trackByFn">{{employee.name}}</li></ul>`,
})
export class ListComponent implements OnInit{ 
constructor(private globalService: GlobalService){}
name = 'Angular'; 
public employees = [];
ngOnInit() {
	    this.globalService.getList()
                     .subscribe(
                       res => this.employees = res);
	}
}
