import { LOCALHOST_BASE_URL } from 'src/app/shared/constants';
import { TableColumnType } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { Image, PokemonType } from '../interfaces';

export const pokemonTypes: PokemonType[] = [
  { name: 'PLANT', imageUrl: 'assets/plant.png' },
  { name: 'EARTH', imageUrl: 'assets/earth.png' },
  { name: 'FIRE', imageUrl: 'assets/fire.png' },
  { name: 'WATER', imageUrl: 'assets/water.png' },
  { name: 'PSY', imageUrl: 'assets/psychic.png' },
];

export const columnConfig = (): TableColumn[] => {
  return [
    {
      id: 'id',
      label: 'ID',
      type: TableColumnType.TEXT,
    },
    {
      id: 'description',
      type: TableColumnType.TEXT,
      label: 'Description',
    },
    {
      id: 'image',
      type: TableColumnType.IMAGE,
      label: 'Image',
    },
    {
      id: 'selected',
      type: TableColumnType.CHECKBOX,
      label: 'Select',
    },
  ];
};

export const elementsConfig = (items: Image[]): any[] => {
  items.map((item) => (item.isSelected = false));
  return items;
};

export const URL = 'https://binance43.p.rapidapi.com/ticker/24hr';
export const IMAGES_URL = `${LOCALHOST_BASE_URL}${'files'}`;
