import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-tabla-producto',
  templateUrl: './tabla-producto.component.html',
  styleUrls: ['./tabla-producto.component.css']
})
export class TablaProductoComponent implements OnInit {
  listProductos: Producto[];
  cabeceras: string[] = ["Id Producto","Descripcion","Precio","Stock","Editar","Eliminar"];
  p: number = 1;
  productos:Producto;
  constructor(private productoService: ProductoService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(){
    this.productoService.getProductos().subscribe(resp =>{
      this.listProductos = resp
    });
  }

  Eliminar(id: number){
    if (confirm('Esta seguro que desea eliminar el documento?')){

   this.productoService.EliminarProducto(id).subscribe(resp =>{

    this.cargarProductos()
   },error =>  {
    this.toastr.error('Opss.. ocurrio un error', 'Error');
  })

    }

  }

}
