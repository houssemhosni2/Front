import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OffresComponent } from './components/offres/offres.component';
import { AjouterOffreComponent } from './components/ajouter-offre/ajouter-offre.component';
import { ModifierOffreComponent } from './components/modifier-offre/modifier-offre.component';

const routes: Routes = [
  { path: '', redirectTo: '/offres', pathMatch: 'full' }, 
  { path: 'offres', component: OffresComponent },
  { path: 'ajouter-offre', component: AjouterOffreComponent },
  { path: 'modifier-offre/:id', component: ModifierOffreComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
