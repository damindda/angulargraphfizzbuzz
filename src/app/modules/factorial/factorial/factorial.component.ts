import { Component, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  skip,
  take,
} from 'rxjs';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.scss'],
})
export class FactorialComponent implements OnInit {
  keyword$ = new BehaviorSubject<number>(0);
  factorialResult!: string;

  constructor() {}

  ngOnInit(): void {
    this.keyword$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((data) => {
        if (data) {
          this.fictorialValue(data);
        } else {
          this.factorialResult = '';
        }
      });
  }

  getKeywordFromInput(keyword: string) {
    if (keyword !== null) {
      this.keyword$.next(parseInt(keyword));
    }
  }

  fictorialValue(inputnumber: number) {
    let result = 1;
    for (let i = 1; i <= inputnumber; i++) {
      result = result * i;
    }
    this.factorialResult = result.toString();
  }
}
