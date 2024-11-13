export interface CoffeeItem {
  id: number;
  image: any;
  rating: number;
  title: string;
  desc: string;
  price: string;
  ingredient: Ingredient[]; // Array of Ingredient
  instruction: string; // Instruksi untuk cara pembuatan (menggunakan string)
}
  export interface Ingredient {
    name: string;
    description: string;
}
export interface Instruction {
  description: string;
}