import { LOCALHOST_BASE_URL } from 'src/app/shared/constants';
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
    {
      id: 'selected',
      type: TableColumnType.CHECKBOX,
      label: 'Select',
    },
  ];
};
export const URL = 'https://binance43.p.rapidapi.com/ticker/24hr';
export const IMAGES_URL = `${LOCALHOST_BASE_URL}${'files'}`;


