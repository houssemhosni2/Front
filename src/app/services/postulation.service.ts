import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { Offre } from '../models/offre';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class PostulationService {

  private baseUrl = 'http://localhost:9090/postulations/apply';
  private specificUserId = 4;

  constructor(private http: HttpClient) { }

  applyToOffer(offreId: number): Observable<any> {
    const params = { userId: this.specificUserId.toString(), offreId: offreId.toString() };
    return this.http.post<any>(this.baseUrl, null, { params });
  }

  addToFavorites(offreId: number): Observable<any> {
    const params = { userId: this.specificUserId.toString(), offreId: offreId.toString() };
    return this.http.post<any>('http://localhost:9090/postulations/' + offreId + '/favoris', null, { params });
  }

  getFavorites(): Observable<Offre[]> {
    return this.http.get<Offre[]>('http://localhost:9090/postulations/favoris');
  }


 getUserDetails(userId: number): Observable<User> {
  return this.http.get<User>(`http://localhost:9090/postulations/user/${userId}/postulation`).pipe(
    tap(user => console.log('User details:', user)),
    catchError(error => {
      console.error('Error fetching user details:', error);
      throw error;
    })
  );
}
}
