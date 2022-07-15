import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient: HttpClient) {}
  api = "http://localhost:3000/posts"
  getSignalById(): Observable<any> {
    return this.httpClient.get<any>(this.api);
  }

}
