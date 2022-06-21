import { TableColumnType } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';

export const columnConfig = (): TableColumn[] => {
  return [
    {
      id: 'id',
      label: 'ID',
      type: TableColumnType.TEXT
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
  ];
};
//TODO: add URL from backend
export const URL = 'https://binance43.p.rapidapi.com/ticker/24hr';
