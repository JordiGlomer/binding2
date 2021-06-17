import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BindingComponent } from './binding/binding.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'interpolacion', component:InterpolacionComponent},
  {path: 'binding', component: BindingComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }

