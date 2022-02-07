import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { SearchResult, SearchQuery } from '../models/searchCatalogue.entity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchCatalogueService {

  private urlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) {

  }

  SearchCatalogue( query: SearchQuery ): Observable<SearchResult[]>{
    return this.http.post<SearchResult[]>(`${this.urlBase}/SearchDocument`, query);
  }
}
