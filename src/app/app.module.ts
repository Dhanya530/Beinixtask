import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Layout/header/header.component';
import { SidebarComponent } from './Layout/sidebar/sidebar.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { GetStartedComponent } from './Components/get-started/get-started.component';
import {MatTableModule} from '@angular/material/table';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './Components/chart/chart.component';
import {MatTabsModule} from '@angular/material/tabs';
import { Chart1Component } from './Components/chart1/chart1.component';



export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewComponent,
    
    GetStartedComponent,
         ChartComponent,
         Chart1Component
  ],
  imports: [
    ChartModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgChartsModule,
    MatCardModule,
    MatTabsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [
    { provide: HIGHCHARTS_MODULES, useFactory: highchartsModules }],
  bootstrap: [AppComponent]
})
export class AppModule { }
