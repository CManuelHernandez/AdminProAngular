import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [],
})
export class HeaderComponent {
  public imgUrl = '';
  public usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = usuarioService.usuario;
  }

  logout() {
    this.usuarioService.logout();
  }
}
