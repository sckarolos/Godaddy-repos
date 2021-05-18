import { Component, OnInit, AfterViewInit, ViewChild, Input, OnDestroy } from '@angular/core';
import { ApiTableService } from '../../_service/api-table.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-api-table-details',
  templateUrl: './api-table-details.component.html',
  styleUrls: ['./api-table-details.component.css'],
})

export class ApiTableDetailsComponent implements OnInit {

  data: any;
  constructor( private router: Router) { 
  }

  public ngOnInit() {
    this.data = history.state;
  }

}