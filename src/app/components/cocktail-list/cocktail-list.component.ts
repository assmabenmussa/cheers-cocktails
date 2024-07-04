// src/app/components/cocktail-list/cocktail-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../interfaces/cocktail';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlcoholStatusDirective } from '../../alcohol-status.directive';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [ FormsModule, CommonModule, RouterModule, AlcoholStatusDirective ],
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];
  filteredCocktails: Cocktail[] = [];
  filter: string = '';

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(cocktails => {
      this.cocktails = cocktails;
      this.filteredCocktails = cocktails;
    });
  }

  onFilterChange(): void {
    this.filteredCocktails = this.cocktails.filter(cocktail =>
      cocktail.name.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  toggleFavorite(cocktail: Cocktail): void {
    this.cocktailService.toggleFavorite(cocktail.id);
  }

  isFavorite(cocktail: Cocktail): boolean {
    return this.cocktailService.isFavorite(cocktail.id);
  }
}
