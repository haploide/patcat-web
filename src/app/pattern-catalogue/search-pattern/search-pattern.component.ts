import { Component, OnInit, Input } from '@angular/core';


import { BusinessProcessServicesService } from "../../services/business-process-services.service";
import { SearchCatalogueService } from "../../services/search-catalogue.service";
import { BusinessProcess } from '../../models/businessProcess.entity';
import { SearchResult, SearchQuery } from '../../models/searchCatalogue.entity';

@Component({
  selector: 'app-search-pattern',
  templateUrl: './search-pattern.component.html',
  styleUrls: ['./search-pattern.component.css']
})
export class SearchPatternComponent implements OnInit {

  businessProcessList: BusinessProcess[];
  querySearch: string;

  constructor(
    private srv : BusinessProcessServicesService,
    private searchService: SearchCatalogueService
    ) { }

  ngOnInit(): void {
    this.srv.GetAllBussinesProcess().subscribe(
      resp => {
        this.businessProcessList = resp;
        console.log(resp);
      },
      error => {
        console.log(error);
      });
  }

  onClick(){
    let query: SearchQuery = {query: this.querySearch}
    this.searchService.SearchCatalogue(query).subscribe(
      resp => {
        for(const item of resp){
          console.log(`Titulo: ${item.catalogue.title}, Date: ${item.catalogue.date}, Descripcion: ${item.catalogue.description}`);
        }
      },
      error => {
        console.log(error);
      }
    )
  }

}
