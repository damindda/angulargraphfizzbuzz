import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';


@Component({
  selector: 'app-scatter-plot-chart',
  templateUrl: './scatter-plot-chart.component.html',
  styleUrls: ['./scatter-plot-chart.component.scss']
})
export class ScatterPlotChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chartOptions: EChartsOption = {
    xAxis: {
      axisLabel: {
        color: '#fff'
      }
    },
    yAxis: {
      axisLabel: {
        color: '#fff'
      }
    },
    label: {
      color: '#fff'
    },
    series: [
      {
        symbolSize: 20,
        data: [
          [1.0, 45],
          [8.77, 65],
          [13.0, 58],
          [19.05, 81],
          [11.0, 93],
          [14.0, 166],
          [13.4, 181],
          [10.0, 233],
          [14.0, 96],
          [12.5, 282]
        ],
        color: '#79C5D1',
        type: 'scatter'
      }
    ]
  };

}
