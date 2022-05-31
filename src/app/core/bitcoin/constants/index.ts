import { TableColumn } from 'src/app/shared/shared/table/constants/interfaces';
import { symbolName } from 'typescript';

export const columnConfig = (): TableColumn[] => {
  return [
    {
      id: 'symbol',
      label: 'Name',
    },
    {
      id: 'lastPrice',
      label: 'Last Price',
    },
    {
      id: 'openTime',
      label: 'Open time',
    },
    {
      id: 'closeTime',
      label: 'Close time',
    },
  ];
};

export const BITCOINS_URL = 'https://binance43.p.rapidapi.com/ticker/24hr';
