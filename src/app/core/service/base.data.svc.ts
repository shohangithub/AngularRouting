import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDataService  {
   url = 'localhost/'
  constructor(private https: HttpClient) { }

 getAll<Data>(id: number): Observable<any> {
    return this.https.get<any[]>(this.url);
  }

}
