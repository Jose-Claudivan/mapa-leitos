import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { AdminComponent } from '../admin/admin.component';
import { MapComponent } from './map/map.component';
import { UnidadeLoginComponent } from '../admin/unidade-login/unidade-login.component';
import { SintomasComponent } from './sintomas/sintomas.component';


const routes: Routes = [

  {
    path: '', component: MainComponent, children: [
      //{ path: 'mapa', component: MapComponent },
      { path: 'sintomas', component: SintomasComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
