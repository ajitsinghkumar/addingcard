import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TemplateformComponent} from './templateform/templateform.component';
import {ReactiveformComponent} from './reactiveform/reactiveform.component';
const routes: Routes = [
      {path:'',component:DashboardComponent},
      {path:'template',component:TemplateformComponent},
      {path:'reactive',component:ReactiveformComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
