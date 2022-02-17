import { BarChartData } from './../models/barchart';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraphdataService {

  barcharturl = 'assets/data/barchart.json';

  constructor(private http: HttpClient) { }

  getBarChartsData(): Observable<BarChartData[]> {
    return this.http.get<BarChartData[]>(this.barcharturl);
  }
}
