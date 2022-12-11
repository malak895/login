import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SingComponent } from './sing/sing.component';



const routes: Routes = [
  {
    path: '',
    component: SingComponent,
  },
  {
    path: 'Sing',
    component: SingComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
