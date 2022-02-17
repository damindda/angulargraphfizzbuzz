import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit {


  chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['USA', 'Europe', 'Asia', 'Africa'],
      orient: 'horizontal',
      lineStyle: {
        opacity: 0
      },
      textStyle: {
        color: '#fff'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    label: {
      color: '#fff'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
      axisLabel: {
        color: '#fff'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: '#fff'
      }
    },
    series: [
      {
        name: 'USA',
        type: 'line',
        data: [120, 132, 101, 734, 490, 230, 20, 232, 11, 234, 190, 30, 20]
      },
      {
        name: 'Europe',
        type: 'line',
        data: [690, 482, 591, 434, 390, 330, 310, 101, 134, 910, 550, 820]
      },
      {
        name: 'Asia',
        type: 'line',
        data: [350, 232, 201, 154, 870, 330, 410, 332, 656, 354, 290, 30]
      },
      {
        name: 'Africa',
        type: 'line',
        data: [780, 832, 267, 634, 770, 130, 320, 201, 192, 427, 734, 390]
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
