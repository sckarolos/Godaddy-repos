import { Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service'; 
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { formatDate } from '@angular/common';
import { IApiTable } from '../../_model/i-api-table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-api-table',
  templateUrl: './api-table.component.html',
  styleUrls: ['./api-table.component.css'],
  providers: [ApiTableService]
})

export class ApiTableComponent implements OnInit  {
  
  ELEMENT_DATA = 
    this._apiResponse.fetchData().subscribe
  ((response) => {
    this.dataSource = new MatTableDataSource(response);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  });

  dataSource = new MatTableDataSource();

  id: string;
  name: string; 
  language: string;

  displayedColumns = ['name', 'id', 'language'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private _apiResponse: ApiTableService,
                      private router: Router) { 
  }

  ngOnInit() {
  }

  onClick= function (row: any) {
    this.router.navigateByUrl('details/' + row.id, {state: {row}});
  };

}