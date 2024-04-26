import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OffresComponent } from './components/offres/offres.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AjouterOffreComponent } from './components/ajouter-offre/ajouter-offre.component';
import { ModifierOffreComponent } from './components/modifier-offre/modifier-offre.component';
import { PostulationComponent } from './components/postulation/postulation.component';
import { FavorisComponent } from './components/favoris/favoris.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConsulterPostulationComponent } from './consulter-postulation/consulter-postulation.component';

@NgModule({
  declarations: [
    AppComponent,
    OffresComponent,
    AjouterOffreComponent,
    ModifierOffreComponent,
    PostulationComponent,
    FavorisComponent,
    ConsulterPostulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
