import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PlataformsComponent } from 'src/app/plataforms/plataforms.component';
import { CreatePlataformComponent } from 'src/app/plataforms/create-plataform/create-plataform.component';

const routes: Routes = [
  {
    path: 'plataforms',
    component: PlataformsComponent
  },
  {
    path: 'create-plataform',
    component: CreatePlataformComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
