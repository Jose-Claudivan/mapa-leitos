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
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SituacaoComponent,
    UnidadeAdmComponent,
    UnidadeCreateComponent,
    HeaderComponent,
    FooterComponent,
    UnidadeLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    AgmDirectionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBmkFr8N0ka5tI0LStzPl7Pn91GN4sKZ60',
      libraries: ["places", "geometry"]
    }),
    BrowserAnimationsModule,
    //NgbModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
