import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'

//formulario
import {ReactiveFormsModule} from '@angular/forms'

//ngx-toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxFileDropModule } from 'ngx-file-drop';
import {NgxPaginationModule} from 'ngx-pagination';

//angular Material
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule}  from '@angular/material/icon';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { BienvenidaComponent } from './components/inicio/bienvenida/bienvenida.component';
import { LoginComponent } from './components/inicio/login/login.component';
import { RegisterComponent } from './components/inicio/register/register.component';
import { AddTokenInterceptor } from './helpers/add-token.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { CambiarPasswordComponent } from './components/dashboard/cambiar-password/cambiar-password.component';
import { PrincipalComponent } from './components/dashboard/principal/principal.component';
import { TablaclientesComponent } from './components/dashboard/principal/tablaclientes/tablaclientes.component';
import { AgregarEditarClientesComponent } from './components/dashboard/principal/agregar-editar-clientes/agregar-editar-clientes.component';
import { TablaDocumentoComponent } from './components/dashboard/principal/tabla-documento/tabla-documento.component';
import { AgregarEditarDocumentosComponent } from './components/dashboard/principal/agregar-editar-documentos/agregar-editar-documentos.component';
import { FooterComponent } from './components/dashboard/navbar/navbar/footer/footer.component';
import { VerClientesComponent } from './components/dashboard/principal/ver-clientes/ver-clientes.component';
import { TablaProductoComponent } from './components/dashboard/principal/tabla-producto/tabla-producto.component';
import { AgregarEditarProductosComponent } from './components/dashboard/principal/agregar-editar-productos/agregar-editar-productos.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    BienvenidaComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarComponent,
    CambiarPasswordComponent,
    PrincipalComponent,
    TablaclientesComponent,
    AgregarEditarClientesComponent,
    TablaDocumentoComponent,
    AgregarEditarDocumentosComponent,
    FooterComponent,
    VerClientesComponent,
    TablaProductoComponent,
    AgregarEditarProductosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxFileDropModule,
    NgxPaginationModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
