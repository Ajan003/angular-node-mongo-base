import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GlobalService } from './global.service';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
const appRoutes: Routes = [
  { path: 'list', component: ListComponent },
  { path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  }];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ AppComponent, ListComponent ],
  providers: [ GlobalService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
}