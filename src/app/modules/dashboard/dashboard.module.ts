import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ScatterPlotChartComponent } from './scatter-plot-chart/scatter-plot-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    DashboardComponent,
    DoughnutChartComponent,
    BarChartComponent,
    ScatterPlotChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class DashboardModule { }
