export interface product {
  id: string;
  name: string;
  type: "fruit" | "vegetable";
  icon: string;
  vitamins: string[];
  benefits: Benefit[];
  images: string[];
  rating: number;
}

export interface Fruit extends product {
  type: "fruit";
}

export interface Vegetable extends product {
  type: "vegetable";
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface Settings {
  fontSize: number;
  vitaminType: string;
  darkMode: boolean;
}
