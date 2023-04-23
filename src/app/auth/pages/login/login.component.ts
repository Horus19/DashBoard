import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email:    ['horacio2180986@correo.uis.edu.co', [ Validators.required, Validators.email ]],
    password: ['Abc123', [ Validators.required, Validators.minLength(6) ]],
  });

  constructor( private fb: FormBuilder,
               private router: Router, 
               private authService: AuthService) { }


  login() {
  
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password )
      .subscribe( ok => {

        console.log(ok);

        if ( ok === true ) {
          this.router.navigateByUrl('/dashboard');
          console.log('ok', ok)
        } else {
          Swal.fire("Ingrese un usuario y contraseña válidos");
        }
      });
  }

}
