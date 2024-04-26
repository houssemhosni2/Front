import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offre } from '../models/offre';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  private baseUrl = 'http://localhost:9090/offres';
  private adminUsername = 'aaa';

  constructor(private http: HttpClient) { }

  getAllOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.baseUrl}`);
  }

  getOffreById(id: number): Observable<Offre> {
    return this.http.get<Offre>(`${this.baseUrl}/${id}`);
  }

  saveOffre(offre: Offre, username: string): Observable<Offre> {
    // Inclure le nom d'utilisateur dans la requête
    return this.http.post<Offre>(`${this.baseUrl}?username=${this.adminUsername}`, offre);
  }
  
  deleteOffre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
