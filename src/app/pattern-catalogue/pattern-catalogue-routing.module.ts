import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPatternComponent } from './search-pattern/search-pattern.component'

const routes: Routes = [
  {
    path: 'pattern/search',
    component: SearchPatternComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PatternCatalogueRoutingModule { }
