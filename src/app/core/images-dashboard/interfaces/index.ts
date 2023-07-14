export interface Image {
  id: number;
  description: string;
  image: string;
  isSelected: boolean;
}

export interface PokemonType {
  id: number;
  type: Type;
  description: string;
  icon: Icon;
}

export interface Pokemon {
  id: number;
  name: string;
  type: PokemonType;
  image: Image;
  isSelected: boolean;
}

export interface Icon {
  id: number;
  data: string;
}

export interface PokemonType {
  id: number;
  type: Type;
  description: string;
  icon: Icon;
}

export enum Type {
  FIRE,
  WATER,
  WIND,
  PSYCHIC,
  PLANT,
  EARTH,
}
