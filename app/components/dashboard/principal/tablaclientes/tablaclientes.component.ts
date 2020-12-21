import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-tablaclientes',
  templateUrl: './tablaclientes.component.html',
  styleUrls: ['./tablaclientes.component.css']
})
export class TablaclientesComponent implements OnInit {
lisClientes: Clientes[] =[];
cabeceras: string[] = ["Id Cliente","Nombres","Apellidos","Telefono", "Correo", "  Editar", "  Eiminar"];
p: number = 1;

  constructor(private clienteService: ClienteService,  private toastr: ToastrService) { }

  ngOnInit(): void {

    this.cargarClientes()
  }



  cargarClientes(){
    this.clienteService.getClientes().subscribe(data=>{
      this.lisClientes = data
    });
  }


  Eliminar(id: number): void{
    console.log(id)
    if (confirm('Esta seguro que desea eliminar el cliente?')){

      this.clienteService.EliminarCliente(id).subscribe(data =>{
        this.cargarClientes()
      },error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      }
      );

    }
    
  }

}
