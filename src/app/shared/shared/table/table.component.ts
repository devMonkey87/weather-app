import { Component, Input, OnInit } from '@angular/core';
import { TableTypes } from './constants/enums/TableTypes.enum';
import { TableColumn } from './constants/interfaces';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() customTableOptions: string | undefined; //TODO: sets the table class condtion
  @Input() columnsConfig: TableColumn[] = [];
  @Input() elementsConfig: any = [];

  countries = COUNTRIES;

  constructor() {}

  ngOnInit(): void {
    this.customTableOptions = TableTypes.Primary;
    
    this.columnsConfig = [
      {
        title: 'ID',
        isDisabled: false,
      },
      {
        title: 'name',
        isDisabled: false,
      },
    ];

    this.elementsConfig = [
      {
        ID: 'aaa',
        name: 1,
      },
      {
        ID: 'bbb',
        name: 2,
      },
    ];
  }

  
}
