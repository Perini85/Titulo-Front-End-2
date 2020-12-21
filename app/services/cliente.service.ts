import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {Clientes} from 'src/app/models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  myAppUrl: string;
  myApiUrl: string;

  httpOtions = {
    headers: new HttpHeaders ({
    'Content-Type': 'application/json'
    })
};

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='/api/Cliente/'

   }


   getClientes(): Observable<any>{
     return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListClientes',this.httpOtions)
   }
  
  
   getIdCliente(idCliente: number): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl + idCliente,this.httpOtions)
   }

   CrearCliente(cliente : Clientes): Observable<any>{
     return this.http.post(this.myAppUrl + this.myApiUrl, cliente,this.httpOtions)
   }

   ActualizarCliente(idCliente: number, cliente: Clientes): Observable<any>{
     return this.http.put(this.myAppUrl + this.myApiUrl + idCliente, cliente,this.httpOtions)
   }

   EliminarCliente(idCliente):Observable<any>{
     return this.http.delete( this.myAppUrl + this.myApiUrl +  idCliente,this.httpOtions);
   }

}
