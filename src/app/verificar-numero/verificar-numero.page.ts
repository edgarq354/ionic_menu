import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-numero',
  templateUrl: './verificar-numero.page.html',
  styleUrls: ['./verificar-numero.page.scss'],
})
export class VerificarNumeroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  registrarUsuario()
  {
   this.router.navigate(['/registrar-usuario']);
  }
}
