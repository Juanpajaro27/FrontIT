import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'auth',
        loadChildren:() => import('./auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'repositorio',
        loadChildren:() => import('./repositorio/repositorio.module').then(m => m.RepositorioModule)
      },
      {
        path: 'home',
        loadChildren:() => import('./home-page/home-page.module').then(m => m.HomePageModule)
      },
      {
        path: '**',
        redirectTo: 'home'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
