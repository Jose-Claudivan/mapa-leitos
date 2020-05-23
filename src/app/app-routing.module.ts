import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { SituacaoComponent } from './situacao/situacao.component';


const routes: Routes = [
  { path: '',  component: MapComponent },
  { path: 'unidades',  component: SituacaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
