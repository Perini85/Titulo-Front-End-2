import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  myAppUrl: string;
  myApiUrl: string;

  httpOtions = {
    headers: new HttpHeaders ({
    'Content-Type': 'application/json'
    })
};

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl ='/api/Producto/'

   }

 getProductos(): Observable<any>{
  return this.http.get(this.myAppUrl + this.myApiUrl + 'GetListProductos',this.httpOtions)
 }

 getIdProducto(idProducto: number): Observable<any>{
  return this.http.get(this.myAppUrl + this.myApiUrl + idProducto,this.httpOtions)
 }

 CrearProducto(producto: Producto): Observable<any>{

  return this.http.post(this.myAppUrl + this.myApiUrl, producto, this.httpOtions)
 }

ActualizarProducto(idProducto: number, producto: Producto): Observable <any>{

  return this.http.put(this.myAppUrl + this.myApiUrl + idProducto, producto, this.httpOtions)

}


EliminarProducto(idProducto): Observable<any>{

  return this.http.delete(this.myAppUrl + this.myApiUrl + idProducto, this.httpOtions)
}

}
