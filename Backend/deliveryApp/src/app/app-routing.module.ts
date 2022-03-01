import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { RegComponent } from './reg/reg.component';

const routes: Routes = [
  {
    path:"reg",
    component:RegComponent
  },
  {
    path:"read",
    component:ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
