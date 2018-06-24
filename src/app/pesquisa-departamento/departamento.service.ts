import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  departamentoUrl = 'http://localhost:8080/departamentos';

  constructor(private http: HttpClient) { }

  pesquisar(): Observable<any> {
    const headers = new HttpHeaders()
           .append('Authorization', 'Basic YWRtaW5AY3JlYXRpdmVoci5jb206YWRtaW4=')
           .append('Accept', 'application/json')
           .append('Content-Type', 'application/json');
        return this.http.get(`${this.departamentoUrl}`, { headers });

  }


}
