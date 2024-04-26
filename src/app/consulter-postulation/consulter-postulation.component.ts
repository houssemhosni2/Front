import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { PostulationService } from '../services/postulation.service';
import { User } from '../models/user';

@Component({
  selector: 'app-consulter-postulation',
  templateUrl: './consulter-postulation.component.html',
  styleUrls: ['./consulter-postulation.component.css']
})
export class ConsulterPostulationComponent implements OnInit {
  userPostulant?: User;
  postulationId: number | null = null;

  constructor(
    private route: ActivatedRoute, 
    private postulationService: PostulationService
  ) { }

  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postulationId = +params['postulationId'];
      if (this.postulationId !== null) {
        this.getDetailsPostulation(this.postulationId);
      }
    });
  }

  getDetailsPostulation(postulationId: number): void {
    this.postulationService.getUserDetails(postulationId).subscribe(
      (user: User) => { 
        this.userPostulant = user;
      },
      (error: any) => { 
        console.error('Error fetching user details:', error);
      }
      
    );
  }
}
