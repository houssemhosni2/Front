import { Component, OnInit } from '@angular/core';
import { Offre } from '../../models/offre';
import { OffreService } from '../../services/offre.service';
import { PostulationService } from '../../services//postulation.service';

@Component({
  selector: 'app-postulation',
  templateUrl: './postulation.component.html',
 
})
export class PostulationComponent implements OnInit {
  offres: Offre[] = [];

  constructor(
    private offreService: OffreService,
    private postulationService: PostulationService
  ) { }

  ngOnInit(): void {
    this.loadOffres();
  }

  loadOffres(): void {
    this.offreService.getAllOffres().subscribe(offres => {
      this.offres = offres;
    });
  }

  postuler(offreId: number): void {
    
    this.postulationService.applyToOffer(offreId).subscribe(() => {
      console.log('Postulation réussie !');
      
    }, error => {
      console.error('Erreur lors de la postulation :', error);
    });
  }
  ajouterAuxFavoris(offreId: number): void {
    this.postulationService.addToFavorites(offreId).subscribe(() => {
      console.log('Offre ajoutée aux favoris !');
      
    }, error => {
      console.error('Erreur lors de l\'ajout aux favoris :', error);
    });
  }
  
}
