import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { PatternCatalogueRoutingModule } from './pattern-catalogue-routing.module';
import { SearchPatternComponent } from './search-pattern/search-pattern.component';



@NgModule({
  declarations: [SearchPatternComponent],
  imports: [
    CommonModule,
    PatternCatalogueRoutingModule,
    FormsModule
  ],
  exports: [SearchPatternComponent]
})
export class PatternCatalogueModule{


  constructor() {  }

 }
