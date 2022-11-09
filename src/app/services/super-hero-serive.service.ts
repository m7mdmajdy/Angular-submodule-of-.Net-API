import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../Models/SuperHero';


@Injectable({
  providedIn: 'root'
})
export class SuperHeroSeriveService {
  private url="SuperHeroes"

  constructor(private http : HttpClient) { }

  GetSuperHeroes() : Observable<SuperHero[]> {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);
  }

  updateSuperHero(hero:SuperHero) : Observable<SuperHero[]> {
    return this.http.put<SuperHero[]>(`${environment.apiUrl}/${this.url}`,hero);
  }

  createSuperHero(hero:SuperHero) : Observable<SuperHero[]> {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}/${this.url}`,hero);
  }
  
  deleteSuperHero(hero:SuperHero) : Observable<SuperHero[]> {
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}/${this.url}/${hero.Id}`);
  }
}
