import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { MapComponent } from './main/map/map.component';
import { SituacaoComponent } from './admin/situacao/situacao.component';
import { UnidadeAdmComponent } from './admin/unidade-adm/unidade-adm.component';
import { UnidadeCreateComponent } from './admin/unidade-create/unidade-create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnidadeLoginComponent } from './admin/unidade-login/unidade-login.component';
import { LoginCreateComponent } from './admin/login-create/login-create.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginReadComponent } from './admin/login-read/login-read.component';
import { ModeloTabelaComponent } from './modelo-tabela/modelo-tabela.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginUpdateComponent } from './admin/login-update/login-update.component';
import { LoginDeleteComponent } from './admin/login-delete/login-delete.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';
import { MainRoutingModule } from './main/main.routing.module';
import { AdminRoutingModule } from './admin/admin.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SituacaoComponent,
    UnidadeAdmComponent,
    UnidadeCreateComponent,
    HeaderComponent,
    FooterComponent,
    UnidadeLoginComponent,
    LoginCreateComponent,
    LoginReadComponent,
    ModeloTabelaComponent,
    LoginUpdateComponent,
    LoginDeleteComponent,
    AdminComponent,
    MainComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    MainRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatMenuModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatIconModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmkFr8N0ka5tI0LStzPl7Pn91GN4sKZ60',
      libraries: ["places", "geometry"]
    }),
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    //NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
