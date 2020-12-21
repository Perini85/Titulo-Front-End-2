import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  nombreUsuario : string;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.getNombreUsuario();
  }

  getNombreUsuario(){
    console.log(this.loginService.getTokenDecoded())
  this.nombreUsuario = this.loginService.getTokenDecoded().sub;
  }
}
