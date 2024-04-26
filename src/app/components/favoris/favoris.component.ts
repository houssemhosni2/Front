import { Component, OnInit } from '@angular/core';
import { Offre } from '../../models/offre';
import { PostulationService } from '../../services/postulation.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {
  favoris: Offre[] = [];

  constructor(private postulationService: PostulationService) { }

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.postulationService.getFavorites().subscribe(favoris => {
      this.favoris = favoris;
    });
  }
}
