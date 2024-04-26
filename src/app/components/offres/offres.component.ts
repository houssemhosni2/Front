import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offre } from '../../models/offre';
import { OffreService } from '../../services/offre.service';
import { PdfService } from '../../services/pdf.service'; // Importez le service PDF

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {
  offres: Offre[] = [];
  offresFiltrees: Offre[] = []; // Offres filtrées pour la recherche
  showPdfIcon: boolean = false; // Variable pour suivre l'état de l'affichage du symbole PDF
  searchTerm: string = ''; // Terme de recherche

  constructor(
    private offreService: OffreService,
    private router: Router,
    private pdfService: PdfService // Injectez le service PDF
  ) { }

  ngOnInit(): void {
    this.loadOffres();
  }

  loadOffres(): void {
    this.offreService.getAllOffres().subscribe(offres => {
      this.offres = offres;
      // Initialise également les offres filtrées lors du chargement initial
      this.searchOffres();
    });
  }

  deleteOffre(id: number): void {
    this.offreService.deleteOffre(id).subscribe(() => {
      console.log('Offre supprimée avec succès !');
      this.loadOffres();
    }, error => {
      console.error('Erreur lors de la suppression de l\'offre :', error);
    });
  }

  modifierOffre(id: number): void {
    this.router.navigate(['/modifier-offre', id]); 
  }

  ajouterOffre(): void {
    this.router.navigate(['/ajouter-offre']); 
  }

  generatePdf(): void {
    const htmlContent = this.generateHtmlTable(); 
    if (htmlContent) {
      this.pdfService.generatePdf(htmlContent, 'offres'); 
      this.showPdfIcon = true; 
    } else {
      console.error('No offers found to generate PDF.');
    }
  }

  generateHtmlTable(): string {
    let htmlContent = '<table style="border-collapse: collapse; width: 100%;">'; // Supprimez l'attribut border="1" pour éviter les bordures supplémentaires
 
    htmlContent += '<thead><tr><th style="padding: 8px; text-align: left;">Titre</th><th style="padding: 8px; text-align: left;">Description</th><th style="padding: 8px; text-align: left;">Compétence Requise</th><th style="padding: 8px; text-align: left;">Durée</th><th style="padding: 8px; text-align: left;">Rémunération</th></tr></thead>';
   
    htmlContent += '<tbody>';
    this.offresFiltrees.forEach(offre => {
      htmlContent += '<tr>';
      htmlContent += `<td style="padding: 8px;">${offre.titre}</td>`;
      htmlContent += `<td style="padding: 8px;">${offre.description}</td>`;
      htmlContent += `<td style="padding: 8px;">${offre.competenceRequise}</td>`;
      htmlContent += `<td style="padding: 8px;">${offre.duree}</td>`; // Assurez-vous que la durée est correctement affichée
      htmlContent += `<td style="padding: 8px;">${offre.remuneration}</td>`; // Assurez-vous que la rémunération est correctement affichée
      htmlContent += '</tr>';
    });
    htmlContent += '</tbody></table>';
    return htmlContent;
  }

  searchOffres(): void {
    if (this.searchTerm.trim() === '') {
      
      this.offresFiltrees = [...this.offres];
    } else {
     
      this.offresFiltrees = this.offres.filter(offre =>
        Object.values(offre).some(value =>
          value !== null && value.toString().toLowerCase().includes(this.searchTerm.trim().toLowerCase())
        )
      );
    }
  }
    consulterPostulation(offreId: number): void {
    
    this.router.navigate(['/consulter-postulation', offreId]);
  }
}
