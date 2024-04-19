import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresComponent } from './components/offres/offres.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterOffreComponent } from './components/ajouter-offre/ajouter-offre.component';
import { ModifierOffreComponent } from './components/modifier-offre/modifier-offre.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    AjouterOffreComponent,
    ModifierOffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
