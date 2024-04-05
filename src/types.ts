export type Recipe = {
  id: number;
  title: string;
  description: string;
  source: string;
  prepTime: number;
  servings: number;
  tags: string[];
  img: string;
  dateAdded: string;
  favourite: boolean;
  instructions: string[];
  ingredients: object[];
};
