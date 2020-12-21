import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Clientes } from 'src/app/models/clientes';
import { Documento } from 'src/app/models/documento';
import { DocumentoService } from 'src/app/services/documento.service';


@Component({
  selector: 'app-tabla-documento',
  templateUrl: './tabla-documento.component.html',
  styleUrls: ['./tabla-documento.component.css']
})
export class TablaDocumentoComponent implements OnInit {
  listDocumentos: Documento[];
  cabeceras: string[] = ["Id Documento","N° documento","monto","Cliente asociado", "Fecha","Editar","Eliminar"];
  p: number = 1;
  clientes:Clientes;
  constructor(private documentoService: DocumentoService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.cargarDocumentos();
  }


  cargarDocumentos(){
    this.documentoService.getDocumentos().subscribe(data =>{
      this.listDocumentos = data
    });
  }


  Eliminar(id: number): void{
    console.log(id)
    if (confirm('Esta seguro que desea eliminar el documento?')){

      this.documentoService.EliminarDocumento(id).subscribe(data =>{
        this.cargarDocumentos()
      },error => {
        this.toastr.error('Opss.. ocurrio un error', 'Error');
      }
      );

    }
    
  }

}
