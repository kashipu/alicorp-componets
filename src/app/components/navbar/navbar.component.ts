import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  show = false;
  nombre = "Eduardo Pinto Solorzano";
  correo = "epintos@alicorp.com.pe";
  showMenu() {
    this.show = !this.show;
  }
}
