import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [

  {path:'', component: MainComponent},
  //{path:'admin',component: AdminComponent}
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
