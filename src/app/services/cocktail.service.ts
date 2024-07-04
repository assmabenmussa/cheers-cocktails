import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cocktail } from '../interfaces/cocktail';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  private baseUrl = '/cockails';
  private favorites: Set<string> = new Set<string>();



  constructor(private http: HttpClient) {
    this.loadFavorites()
  }

  toggleFavorite(id: string): void {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
    } else {
      this.favorites.add(id);
    }
    this.saveFavorites();
  }

  isFavorite(id: string): boolean {
    return this.favorites.has(id);
  }

  private saveFavorites(): void {
    localStorage.setItem('favorites', JSON.stringify(Array.from(this.favorites)));
  }

  private loadFavorites(): void {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      this.favorites = new Set<string>(JSON.parse(favorites));
    }
  }

  getAllCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>(this.baseUrl);
  }

  getCocktailById(id: string): Observable<Cocktail> {
    return this.http.get<Cocktail>(`${this.baseUrl}/${id}`);
  }
}
