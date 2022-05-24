import { TableColumn } from 'src/app/shared/shared/table/constants/interfaces';

export const columnConfig = (): TableColumn[] => {
  return [
    {
      title: 'Prov1',
    },
    {
      title: 'Prov2',
    },
    {
      title: 'Prov3',
    },
    {
      title: 'Prov4',
    },
  ];
};

export const elementConfig = (): any[] => {
  return [
    {
      Prov1: 'Prov1',
      Prov2: 'Prov1',
      Prov3: 'Prov1',
      Prov4: 'Prov1',
    },
    {
      Prov1: 'Prov2',
      Prov2: 'Prov2',
      Prov3: 'Prov2',
      Prov4: 'Prov2',
    },
    {
      Prov1: 'Prov3',
      Prov2: 'Prov3',
      Prov3: 'Prov3',
      Prov4: 'Prov3',
    },
    {
      Prov1: 'Prov4',
      Prov2: 'Prov4',
      Prov3: 'Prov4',
      Prov4: 'Prov4',
    },
  ];
};
