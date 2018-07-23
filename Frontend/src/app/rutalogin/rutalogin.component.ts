import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-rutalogin',
  templateUrl: './rutalogin.component.html',
  styleUrls: ['./rutalogin.component.scss']
})
export class RutaloginComponent  {

  constructor(private _router: Router) { }

  email;
  password;
  passwordConfirmation;


  crearUsuario(formulario) {
    console.log(formulario);
    const controles = formulario.controls;
    const password = controles.password.value;
    const passwordConfirmation = 'santiago';

    if (password === 'santiago') {
      alert('Muy bien!');
      const url = [
        '/home',
        'cliente',
      ];
      this._router.navigate(url);
        
    } else {
      this.password = undefined;
      this.passwordConfirmation = undefined;
      alert('Los passwords no son iguales');
    }
  }
}
