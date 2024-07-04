import { Routes } from '@angular/router';
import { CocktailDetailComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';

export const routes: Routes = [
  { path: "", pathMatch: "full", component: CocktailListComponent },
  { path: "cocktails", component: CocktailListComponent },
  { path: 'cocktails/:id', component: CocktailDetailComponent },
];
