import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-agregar-editar-productos',
  templateUrl: './agregar-editar-productos.component.html',
  styleUrls: ['./agregar-editar-productos.component.css']
})
export class AgregarEditarProductosComponent implements OnInit {
  productos: FormGroup
  idProducto =0;
  accion= 'Agregar'
  producto: Producto

  constructor(private fb: FormBuilder,private productoService: ProductoService,
    private router: Router, private route:ActivatedRoute) {

     this.productos = this.fb.group({
      descripcion:['',Validators.required],
      precio:['',Validators.required],
      stock:['',Validators.required]

     });
     if (+this.route.snapshot.paramMap.get('id')> 0){
      this.idProducto = +this.route.snapshot.paramMap.get('id');
       }

     }

  ngOnInit(): void {
   this.esEditar();
  }

  guardarProductos(){
    if(this.accion==='Agregar'){

    const producto: Producto ={

      descripcion: this.productos.get('descripcion').value,
      precio: this.productos.get('precio').value,
      stock: this.productos.get('stock').value

    };
    
    this.productoService.CrearProducto(producto).subscribe(data =>{
      this.router.navigate(['/dashboard/productos'])
    });


    } else {

     const producto: Producto ={

     id: this.producto.id,
     descripcion: this.productos.get('descripcion').value,
     precio: this.productos.get('precio').value,
      stock: this.productos.get('stock').value


     };

     this.productoService.ActualizarProducto(this.idProducto,producto).subscribe(data =>{
      this.router.navigate(['/dashboard/productos'])
    });

    }
  }

esEditar(){

if(this.idProducto >0){
  this.accion='Editar';
  this.productoService.getIdProducto(this.idProducto).subscribe(data =>{

   this.producto = data;
   this.productos.patchValue({

    descripcion: data.descripcion,
    precio: data.precio,
    stock: data.stock

   })

  })
}

}


}
