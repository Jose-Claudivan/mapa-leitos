import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { MapComponent } from '../main/map/map.component';
import { UnidadeAdmComponent } from './unidade-adm/unidade-adm.component';
import { UnidadeCreateComponent } from './unidade-create/unidade-create.component';
import { UnidadeLoginComponent } from './unidade-login/unidade-login.component';
import { LoginCreateComponent } from './login-create/login-create.component';
import { LoginUpdateComponent } from './login-update/login-update.component';
import { LoginDeleteComponent } from './login-delete/login-delete.component';


const routes: Routes = [

  {path:'admin', component: AdminComponent, children:[
    {path:'situacao', component: SituacaoComponent},
    { path: 'unidades',  component: UnidadeAdmComponent },
    { path: 'unidade-create',  component: UnidadeCreateComponent },
    { path: 'situacao',  component: SituacaoComponent },
    { path: 'unidade-login',  component: UnidadeLoginComponent },
    { path: 'login-create',  component: LoginCreateComponent },
    { path: 'login-update/:id',  component: LoginUpdateComponent },
    { path: 'login-delete/:id',  component: LoginDeleteComponent }
  ]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
