import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavModule } from './sidenav/sidenav.module';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SidenavModule
  ],
  exports: [NavbarComponent, FooterComponent, SidenavModule]
})
export class ComponentsModule { }
