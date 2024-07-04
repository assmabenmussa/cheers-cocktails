// src/app/components/cocktail-detail/cocktail-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';
import { Cocktail } from '../../interfaces/cocktail';
import { CommonModule } from '@angular/common';
import { AlcoholStatusDirective } from '../../alcohol-status.directive';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, AlcoholStatusDirective],
  styleUrls: ['./cocktail-detail.component.scss']
})
export class CocktailDetailComponent implements OnInit {
  cocktail?: Cocktail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id')!;
    this.cocktailService.getCocktailById(id).subscribe(cocktail => {
      this.cocktail = cocktail;
    });
  }

  toggleFavorite(): void {
    if (this.cocktail) {
      this.cocktailService.toggleFavorite(this.cocktail.id);
    }
  }

  isFavorite(): boolean {
    return this.cocktail ? this.cocktailService.isFavorite(this.cocktail.id) : false;
  }

  goBack(): void {
    this.router.navigate(['/cocktails']);
  }
}
