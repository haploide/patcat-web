import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../../app-routing.module';
import { SidenavComponent } from './sidenav.component';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
