import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { Documento } from 'src/app/models/documento';
import { ClienteService } from 'src/app/services/cliente.service';
import { DocumentoService } from 'src/app/services/documento.service';


@Component({
  selector: 'app-ver-clientes',
  templateUrl:'./ver-clientes.component.html',
  styleUrls: ['./ver-clientes.component.css']
})
export class VerClientesComponent implements OnInit {
clientes: Clientes;
documentos: Documento
idCliente: number;

  constructor(private clienteService: ClienteService,  private route: ActivatedRoute,
    private documentoService:DocumentoService) { 
      // this.documentos.idCliente = this.idCliente
    this.idCliente = +this.route.snapshot.paramMap.get('id')
    
  }
 
  ngOnInit(): void {
    this.cargarCliente();
  }


  cargarCliente(){
    this.clienteService.getIdCliente(this.idCliente).subscribe(resp =>{
    this.clientes = resp;
    });
  }

 

}
