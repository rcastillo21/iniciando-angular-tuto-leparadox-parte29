import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { UsersComponent } from './components/users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './modules/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
