import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-agregar-editar-clientes',
  templateUrl: './agregar-editar-clientes.component.html',
  styleUrls: ['./agregar-editar-clientes.component.css']
})
export class AgregarEditarClientesComponent implements OnInit {
clientes: FormGroup
idCliente =0;
accion= 'Agregar'
cliente: Clientes
  constructor(private fb: FormBuilder, private route:ActivatedRoute,
              private clienteService: ClienteService, private router: Router) {
              this.clientes = this.fb.group({
                rut: ['',Validators.required],

                nombres: ['',Validators.required],
                apellidos: ['',Validators.required],
                telefono: ['',Validators.required],
                correo: ['',Validators.required]
              });
              if (+this.route.snapshot.paramMap.get('id')> 0){
                this.idCliente = +this.route.snapshot.paramMap.get('id');
                 }

               }

  ngOnInit(): void {
    this.esEditar()
  }


   guardarClientes(){
     if(this.accion ==='Agregar'){
       const cliente: Clientes = {
          
        nombres: this.clientes.get('nombres').value,
        apellidos: this.clientes.get('apellidos').value,
        rut: this.clientes.get('rut').value,
        telefono: this.clientes.get('telefono').value,
        correo: this.clientes.get('correo').value,

       };
       this.clienteService.CrearCliente(cliente).subscribe(data =>{
          
        this.router.navigate(['/dashboard/clientes'])

       });
     } else {

      const cliente: Clientes = {
        id: this.cliente.id,
        nombres: this.clientes.get('nombres').value,
        apellidos: this.clientes.get('apellidos').value,
        rut: this.clientes.get('rut').value,
        telefono: this.clientes.get('telefono').value,
        correo: this.clientes.get('correo').value,

       };
       this.clienteService.ActualizarCliente(this.idCliente,cliente).subscribe(data =>{
        this.router.navigate(['/dashboard/clientes'])
       })

     };


   }

   esEditar(){
     if(this.idCliente > 0){
      this.accion= 'Editar';
      this.clienteService.getIdCliente(this.idCliente).subscribe(data =>{

        this.cliente = data;
        this.clientes.patchValue({
          nombres: data.nombres,
          apellidos: data.apellidos,
          rut :data.rut,
          telefono: data.telefono,
          correo: data.correo
        });
      })
     }
   }


}
