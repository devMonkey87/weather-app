import { TableColumnType } from 'src/app/shared/table/constants/enums/TableTypes.enum';
import { TableColumn } from 'src/app/shared/table/constants/interfaces';
import { IBitcoinAction } from '../interfaces/IBitcoinAction';

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

export const mapBitcoinData = (bitcoinAction: any) => {
  const openTimeDate = new Date(bitcoinAction.openTime);
  const closeTimeDate = new Date(bitcoinAction.closeTime);
  const bAction: IBitcoinAction = {
    openTime: openTimeDate.toLocaleDateString('en-GB'),
    closeTime: closeTimeDate.toLocaleDateString('en-GB'),
    openPrice: bitcoinAction.openPrice,
    lastPrice: bitcoinAction.lastPrice,
    symbol: bitcoinAction.symbol,
    priceChangePercent: bitcoinAction.priceChangePercent,
  };
  return bAction;
};
