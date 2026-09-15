import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lista-exxercicios1', 
    loadChildren: () => import('./lista-exxercicios1/lista-exxercicios1-module').then(m => m.ListaExxercicios1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
