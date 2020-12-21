import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { Clientes } from 'src/app/models/clientes';
import { Documento } from 'src/app/models/documento';
import { ClienteService } from 'src/app/services/cliente.service';
import { DocumentoService } from 'src/app/services/documento.service';
import { TipodocumentoService } from 'src/app/services/tipodocumento.service';

@Component({
  selector: 'app-agregar-editar-documentos',
  templateUrl: './agregar-editar-documentos.component.html',
  styleUrls: ['./agregar-editar-documentos.component.css']
})
export class AgregarEditarDocumentosComponent implements OnInit {
documentos: FormGroup
idDocumento =0;
accion= 'Agregar'
documento: Documento
clientes: any;
tipoDoc: any


 archivosServer: Documento;
 lastPK: number;

  constructor(private documentoService: DocumentoService, private fb: FormBuilder,
              private router: Router, private route:ActivatedRoute,
              private clienteService: ClienteService,
              private tipoDocumentoService: TipodocumentoService) { 

              this.documentos = this.fb.group({
              valor:['',Validators.required],
              numeroDoc :['',Validators.required],
          
              idCliente: ['',Validators.required],
              tipoDocumentoId: ['',Validators.required],
              imagen: ['']
            


              });
              if (+this.route.snapshot.paramMap.get('id')> 0){
                this.idDocumento = +this.route.snapshot.paramMap.get('id');
                 }


  }

  ngOnInit(): void {


    this.GetClientes();
    this.GetTipoDocumento();
    this.esEditar();

  }


  guardarDocumentos(){
 
    if(this.accion==='Agregar'){
      
      const documento: Documento ={

        valor: this.documentos.get('valor').value,
        numeroDoc: this.documentos.get('numeroDoc').value,
        idCliente: this.documentos.get('idCliente').value,
        tipoDocumentoId: this.documentos.get('tipoDocumentoId').value,
        imagen: this.documentos.get('imagen').value

      };
      this.subirArchivo(documento);
      this.documentoService.CrearDocumento(documento).subscribe(data =>{
        this.router.navigate(['/dashboard/documentos'])
        console.log(this.documento)
      });
    } else {

   const documento: Documento ={
      id: this.documento.id,
      valor: this.documentos.get('valor').value,
      numeroDoc: this.documentos.get('numeroDoc').value,
      idCliente: this.documentos.get('idCliente').value,
      tipoDocumentoId: this.documentos.get('tipoDocumentoId').value,
      imagen: this.documentos.get('imagen').value
      

   };
      this.documentos.value.idCliente =parseInt(this.documentos.value.idCliente)
      this.documentos.value.tipoDocumentoId =parseInt(this.documentos.value.tipoDocumentoId)
   this.documentoService.ActualizarDocumento(this.idDocumento,documento).subscribe(data =>{
    

    
    this.router.navigate(['/dashboard/documentos'])
   });

   console.log(this.documento)
    }
  }

  esEditar(){
    if(this.idDocumento > 0){
     this.accion='Editar';
     this.documentoService.getIdDocumento(this.idDocumento).subscribe(data =>{

       this.documento = data;
       this.documentos.patchValue({
         valor: data.valor,
         numeroDoc: data.numeroDoc,
          idCliente: data.idCliente,
          tipoDocumentoId: data.tipoDocumentoId
      
            
       });
     })
    }
  }



  GetClientes(){
    this.clienteService.getClientes().subscribe(data =>{

      this.clientes = data
    });
  }

  GetTipoDocumento(){
    this.tipoDocumentoService.getTipoDocumento().subscribe(data =>{
      this.tipoDoc = data
    })
  }

  subirArchivo(documento: Documento){
    this.documentoService.uploadFile(this.documento).subscribe(Response => {})
  }

  fileEvent(fileInput: Event) {
    let file = (<HTMLInputElement>fileInput.target).files[0];

    if (file.type == "image/jpeg" || file.type == "image/png") {
      this.documento = new Documento();
    }
  }

  

}
