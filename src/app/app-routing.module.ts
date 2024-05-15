import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailPageComponent} from "./detail-page/detail-page.component";

const routes: Routes = [
  {path: 'detail-page', component: DetailPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
