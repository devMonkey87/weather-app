import { TableColumnType } from "../enums/TableTypes.enum";

export interface TableColumn {
  id: string;
  label: string;
  type: TableColumnType;
  isDisabled?: boolean;
}
