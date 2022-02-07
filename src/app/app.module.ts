import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import bootstrap from 'bootstrap';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeModule } from './home/home.module';
import { PatternCatalogueModule } from './pattern-catalogue/pattern-catalogue.module';
import { BusinessProcessServicesService } from './services/business-process-services.service';
import { SearchCatalogueService } from './services/search-catalogue.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HomeModule,
    PatternCatalogueModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
