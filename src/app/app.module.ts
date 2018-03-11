import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCheckboxModule, MatToolbarModule,
  MatCardModule, MatInputModule, MatGridListModule,
  MatTableModule, MatMenuModule, MatIconModule, MatListModule
} from '@angular/material';

import {HttpModule} from '@angular/http';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { NavbarComponent } from './navbar/navbar.component';

import {DataService} from './service/data.service';

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule,MatButtonModule, MatCheckboxModule, MatToolbarModule,
    MatCardModule, MatInputModule, MatGridListModule, MatTableModule, MatMenuModule, MatIconModule,
    FusionChartsModule, MatListModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
