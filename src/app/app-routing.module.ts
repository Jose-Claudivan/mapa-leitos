import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './main/map/map.component';
import { AppComponent } from './app.component';
import { SituacaoComponent } from './admin/situacao/situacao.component';
import { UnidadeAdmComponent } from './admin/unidade-adm/unidade-adm.component';
import { UnidadeCreateComponent } from './admin/unidade-create/unidade-create.component';
import { UnidadeLoginComponent } from './admin/unidade-login/unidade-login.component';
import { LoginCreateComponent } from './admin/login-create/login-create.component';
import { LoginUpdateComponent } from './admin/login-update/login-update.component';
import { LoginDeleteComponent } from './admin/login-delete/login-delete.component';
import { MainComponent } from './main/main.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [

  {path:'', component: MainComponent},
  {path:'admin',component: AdminComponent}
  /*{ path: '',  component: MapComponent },
  { path: 'unidades',  component: UnidadeAdmComponent },
  { path: 'unidade-create',  component: UnidadeCreateComponent },
  { path: 'situacao',  component: SituacaoComponent },
  { path: 'unidade-login',  component: UnidadeLoginComponent },
  { path: 'login-create',  component: LoginCreateComponent },
  { path: 'login-update/:id',  component: LoginUpdateComponent },
  { path: 'login-delete/:id',  component: LoginDeleteComponent }*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
