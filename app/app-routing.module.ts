import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgregarEditarClientesComponent } from './components/dashboard/principal/agregar-editar-clientes/agregar-editar-clientes.component';
import { AgregarEditarDocumentosComponent } from './components/dashboard/principal/agregar-editar-documentos/agregar-editar-documentos.component';
import { AgregarEditarProductosComponent } from './components/dashboard/principal/agregar-editar-productos/agregar-editar-productos.component';
import { PrincipalComponent } from './components/dashboard/principal/principal.component';
import { TablaDocumentoComponent } from './components/dashboard/principal/tabla-documento/tabla-documento.component';
import { TablaProductoComponent } from './components/dashboard/principal/tabla-producto/tabla-producto.component';
import { TablaclientesComponent } from './components/dashboard/principal/tablaclientes/tablaclientes.component';
import { VerClientesComponent } from './components/dashboard/principal/ver-clientes/ver-clientes.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';

const routes: Routes = [
  {path: '', redirectTo:'/inicio',pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent, children:[
    {path: '', component: BienvenidaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
  ]},
  { path: 'dashboard', component: DashboardComponent, children: [
    {path: '', component: PrincipalComponent},
  { path: 'cambiarPassword', component: CambiarPasswordComponent },
  { path: 'clientes', component: TablaclientesComponent },
  { path: 'agregarCliente', component: AgregarEditarClientesComponent },
  { path: 'editarcli/:id', component: AgregarEditarClientesComponent },
  { path: 'documentos', component: TablaDocumentoComponent},
  { path: 'agregarDocumento', component: AgregarEditarDocumentosComponent},
  { path: 'editardoc/:id', component: AgregarEditarDocumentosComponent},
  {path:'ver/:id', component: VerClientesComponent},
  {path: 'productos',component: TablaProductoComponent},
  {path: 'agregarProducto',component: AgregarEditarProductosComponent},
  {path: 'editarprod/:id',component: AgregarEditarProductosComponent},





  
  ]},
  {path: '**', redirectTo: '/inicio',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
