import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InterpolacionComponent } from './interpolacion/interpolacion.component';
import { BindingComponent } from './binding/binding.component';
import { BindingModule } from './binding/binding.module';

// tslint:disable-next-line: semicolon
const loadBindingModule = async () => {const m = await import('./binding/binding.module'); return m.BindingModule}

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'interpolacion', component: InterpolacionComponent},
  {path: 'binding', loadChildren: loadBindingModule },

  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

