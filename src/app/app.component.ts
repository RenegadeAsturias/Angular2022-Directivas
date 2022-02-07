import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  titulo = 'Registro de Usuarios';
  mensaje = '';
  registrado = false;
  nombre:string = "";
  apellido:string = "";
  entradas:object[];

  registrarUsuario(){
    this.registrado=true;
    this.mensaje="Usuario registrado con éxito!";
  }

  constructor(){
    this.entradas = [
      {titulo:"Python cada día más presente"},
      {titulo:"Java presente desde hace más de 20 años"},
      {titulo:"JavaScript cada vez más funcional"},
      {titulo:"Kotlin pontencia para tus apps"},
      {titulo:"¿Dónde quedó Pascal?"},
    ]

  }



}
