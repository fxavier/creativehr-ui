import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { map, tap, catchError} from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class BancoService {

  /*bancosUrl = '/assets/data/bancos.json';*/
  bancosUrl = 'http://localhost:8080/bancos';

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<any> {
     const headers = new HttpHeaders()
         .append('Authorization', 'Basic YWRtaW5AY3JlYXRpdmVoci5jb206YWRtaW4=')
         .append('Accept', 'application/json')
         .append('Content-Type', 'application/json');
      return  this.http.get(`${this.bancosUrl}`, {headers});
  }


}
