import { DoughnutChartData } from './../models/doughnutchart';
import { LineChartData } from './../models/linechart';
import { BarChartData } from './../models/barchart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {

  barcharturl = 'assets/data/barchart.json';
  linecharturl = 'assets/data/linechart.json';
  doughnutcharturl = 'assets/data/doughnutchart.json';

  constructor(private http: HttpClient) { }

  getBarChartsData(): Observable<BarChartData[]> {
    return this.http.get<BarChartData[]>(this.barcharturl);
  }

  getLineChartsData(): Observable<LineChartData[]> {
    return this.http.get<LineChartData[]>(this.linecharturl);
  }

  getDoughnutChartsData(): Observable<DoughnutChartData[]> {
    return this.http.get<DoughnutChartData[]>(this.doughnutcharturl);
  }
}
