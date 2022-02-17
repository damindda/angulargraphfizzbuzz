import { from, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {


  data = [
    { value: 23000, name: 'USA' },
    { value: 12347, name: 'Africa' },
    { value: 20129, name: 'Europe' },
    { value: 15825, name: 'Asia' }
  ];


  chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        data: this.data,
        label: {
          color: '#fff'
        },
        color: ["#83FCFF", "#5E98D2", "#F4EEBF", "#C39AE5"],
        emphasis: {
          itemStyle: {
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  constructor() {
   }

  ngOnInit(): void {
  }




}
