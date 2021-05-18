import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiTableDetailsComponent } from './component/api-table-details/api-table-details.component';
import { ApiTableComponent } from './component/api-table/api-table.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: ApiTableComponent },
      { path: 'details/:id', component: ApiTableDetailsComponent },
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }
