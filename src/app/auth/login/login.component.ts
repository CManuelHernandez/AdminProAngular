import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]],
    remember: [false],
  });
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  login() {
    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) => {
        // Si sucede un error
        Swal.fire('Error', err.error.msg, 'error');
      }
    );

    //this.router.navigateByUrl('/');
  }
}
