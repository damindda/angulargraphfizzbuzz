import { from, Observable, Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { GraphdataService } from 'src/app/services/graphdata.service';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {
  subscription!: Subscription;
  graphValues: any = [];

  chartOptions: EChartsOption = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        data: this.graphValues,
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

  constructor(private barChartService: GraphdataService) {
   }

  ngOnInit(): void {
    this.getDoughnutChartsData();
  }

  getDoughnutChartsData() {
    this.subscription = this.barChartService.getDoughnutChartsData().subscribe((data) => {
      data.forEach(values => {
        this.graphValues.push(values)
      })
    });
  }




}
