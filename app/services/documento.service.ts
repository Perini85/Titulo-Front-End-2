import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Documento } from '../models/documento';

@Injectable({
  providedIn: 'root'
})
export class DocumentoService {
  myAppUrl: string;
  myApiUrl: string;

  httpOtions = {
    headers: new HttpHeaders ({
    'Content-Type': 'application/json'
    })
};

  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='/api/Documento/'
  }

  getDocumentos(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListDocumentos',this.httpOtions)
  }

  getIdDocumento(idDocumento: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + idDocumento,this.httpOtions)
   }

   CrearDocumento(documento : Documento): Observable<any>{
    return this.http.post(this.myAppUrl + this.myApiUrl, documento,this.httpOtions)
  }

  ActualizarDocumento(idDocumento: number, documento: Documento): Observable<any>{
    return this.http.put(this.myAppUrl + this.myApiUrl + idDocumento, documento,this.httpOtions)
  }

  EliminarDocumento(idDocumento):Observable<any>{
    return this.http.delete( this.myAppUrl + this.myApiUrl +  idDocumento,this.httpOtions);
  }


  uploadFile(File): Observable<any>{
    var json = JSON.stringify(File);
   
    return this.http.post(this.myAppUrl + this.myApiUrl, File,this.httpOtions)
  }



}
