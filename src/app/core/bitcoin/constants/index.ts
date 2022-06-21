import { TableColumnType } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';

export const columnConfig = (): TableColumn[] => {
  return [
    {
      id: 'symbol',
      type: TableColumnType.TEXT,
      label: 'Name',
    },
    {
      id: 'lastPrice',
      type: TableColumnType.TEXT,
      label: 'Last Price',
    },
    {
      id: 'openTime',
      type: TableColumnType.TEXT,
      label: 'Open time',
    },
    {
      id: 'closeTime',
      type: TableColumnType.TEXT,
      label: 'Close time',
    },
  ];
};

export const BITCOINS_URL = 'https://binance43.p.rapidapi.com/ticker/24hr';
