import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { AppComponent } from './app.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { UnidadeAdmComponent } from './unidade-adm/unidade-adm.component';
import { UnidadeCreateComponent } from './unidade-create/unidade-create.component';
import { UnidadeLoginComponent } from './unidade-login/unidade-login.component';
import { LoginCreateComponent } from './login-create/login-create.component';


const routes: Routes = [
  { path: '',  component: MapComponent },
  { path: 'unidades',  component: UnidadeAdmComponent },
  { path: 'unidade-create',  component: UnidadeCreateComponent },
  { path: 'situacao',  component: SituacaoComponent },
  { path: 'unidade-login',  component: UnidadeLoginComponent },
  { path: 'login-create',  component: LoginCreateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
