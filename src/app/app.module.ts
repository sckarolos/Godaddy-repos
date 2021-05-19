import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './_module/material.module';
import { ApiTableComponent } from './component/api-table/api-table.component';
import { ApiTableDetailsComponent } from './component/api-table-details/api-table-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { ApiTableService } from './_service/api-table.service';

@NgModule({
  declarations: [
    AppComponent,
    ApiTableComponent,
    ApiTableDetailsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AppRoutingModule,
  ],
  providers: [
    ApiTableService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
