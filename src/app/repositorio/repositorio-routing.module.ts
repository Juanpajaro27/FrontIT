import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositorioComponent } from './components/repositorio.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'repo',
        component: RepositorioComponent
      },
      {
        path : '**',
        redirectTo: 'repo'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositorioRoutingModule { }
