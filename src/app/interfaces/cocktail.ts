export interface Cocktail {
  id: string;
  name: string;
  isAlcoholic: "Non alcoholic" | "Alcoholic";
  imageUrl: string;
  instructions: string;
  ingredients: string[];
}