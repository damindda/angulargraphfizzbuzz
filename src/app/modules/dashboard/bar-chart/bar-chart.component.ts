import { Component, OnDestroy, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { map, Observable, Subscription } from 'rxjs';
import { BarChartData } from 'src/app/models/barchart';
import { GraphdataService } from 'src/app/services/graphdata.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit, OnDestroy {
  regionValues: any = [];
  salesValues: any = [];
  subscription!: Subscription;
  barChartValues$: Observable<BarChartData[]> = this.barChartService.getBarChartsData();
  chartOptions: EChartsOption = {
    xAxis: {
      type: 'category',
      data: this.regionValues,
      axisLabel: {
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff'
      }
    },
    itemStyle: {
      color: '#fff'
    },
    series: [
      {
        data: this.salesValues,
        type: 'bar',
        itemStyle: {
          color: '#7BC6D3',
        },
      }
    ]
  };

  constructor(private barChartService: GraphdataService) { }

  ngOnInit(): void {
    this.subscription = this.barChartValues$.subscribe((data) => {
      data.forEach(values => {
        this.regionValues.push(values.region)
        this.salesValues.push(values.value)
      })
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
