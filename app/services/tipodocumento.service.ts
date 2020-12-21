import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipodocumentoService {
  myAppUrl: string;
  myApiUrl: string;

  httpOtions = {
    headers: new HttpHeaders ({
    'Content-Type': 'application/json'
    })
  }


  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='/api/TipoDocumento/'

   }


   getTipoDocumento(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListTipoDocumento',this.httpOtions)
  }
}
