export interface Image {
  id: number;
  description: string;
  image: string;
  isSelected: boolean;
}

export interface PokemonType {
  name: string;
  imageUrl?: string;
}
