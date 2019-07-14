import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'animacion', loadChildren: './animacion/animacion.module#AnimacionPageModule' },
  { path: 'registrar-usuario', loadChildren: './registrar-usuario/registrar-usuario.module#RegistrarUsuarioPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'verificar-numero', loadChildren: './verificar-numero/verificar-numero.module#VerificarNumeroPageModule' },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
