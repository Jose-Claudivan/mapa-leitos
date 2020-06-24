import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SituacaoComponent } from './situacao/situacao.component';
import { UnidadeAdmComponent } from './unidade-adm/unidade-adm.component';
import { UnidadeCreateComponent } from './unidade-create/unidade-create.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UnidadeLoginComponent } from './unidade-login/unidade-login.component';
import { LoginCreateComponent } from './login-create/login-create.component';
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
import { LoginReadComponent } from './login-read/login-read.component';
import { ModeloTabelaComponent } from './modelo-tabela/modelo-tabela.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { LoginUpdateComponent } from './login-update/login-update.component';
import { LoginDeleteComponent } from './login-delete/login-delete.component';


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
    LoginDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
