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
import { AutenticacaoComponent } from '../autenticacao/autenticacao.component';
import { AuthGuard } from '../account/shared/auth.guard';
import { MainComponent } from '../main/main.component';
import { LoginReadComponent } from './login-read/login-read.component';


const routes: Routes = [
  {
    path: 'admin', component: AdminComponent, children: [
      //{ path: 'admin' , component: AdminComponent },
      { path: 'unidade-create', component: UnidadeCreateComponent },
      { path: 'login-read', component: LoginReadComponent},
      { path: 'login-update/:id', component: LoginUpdateComponent },
      { path: 'login-delete/:id', component: LoginDeleteComponent },
      { path: 'situacao', component: SituacaoComponent },
      { path: 'unidades', component: UnidadeAdmComponent }
      //{ path: 'situacao', component: SituacaoComponent }
    ],
    canActivate: [AuthGuard]
  },
  //oque estiver dentro desse bloco, sera protegido
  {
    path: 'admin', component: AutenticacaoComponent, children: [
      { path: 'admin', redirectTo: 'unidade-login', pathMatch: 'full' },
      { path: 'unidade-login', component: UnidadeLoginComponent },
      { path: 'login-create', component: LoginCreateComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
