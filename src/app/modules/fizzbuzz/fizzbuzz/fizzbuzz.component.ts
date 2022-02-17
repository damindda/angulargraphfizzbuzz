import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  interval,
  map,
  Observable,
  skip,
  Subject,
  take,
  takeUntil,
  zip,
} from 'rxjs';

@Component({
  selector: 'app-fizzbuzz',
  templateUrl: './fizzbuzz.component.html',
  styleUrls: ['./fizzbuzz.component.scss'],
})
export class FizzbuzzComponent implements OnInit {
  // numbers = range(0, 100);
  numbers = interval(1000);
  numbers$ = this.numbers.pipe(take(100));
  results$!: Observable<number>;

  fizz$: Observable<string> = this.numbers$.pipe(
    map((number) => (number % 3 === 0 ? 'Fizz' : ''))
  );
  buzz$: Observable<string> = this.numbers$.pipe(
    map((number) => (number % 5 === 0 ? 'Buzz' : ''))
  );
  fizzbuzz$!: Observable<any>;

  output$!: Observable<any>;
  cancelevent: boolean = false;
  stopFizzBuzzSubject: Subject<boolean> = new Subject<boolean>();
  constructor() {}

  ngOnInit(): void {}

  startFizzBuzz() {

    // this.fizzbuzz$ = zip([this.fizz$, this.buzz$])
    // .pipe(
    //   skip(1),
    //   map(([fizz, buzz]) => (fizz === '' || buzz === '' ? '' : 'FizzBuzz'))
    // );

    this.output$ = zip([this.numbers$, this.fizz$, this.buzz$])
    .pipe(
      skip(1),
      map(([number, fizz, buzz]) => {
        console.log(fizz, buzz, number)
        return fizz + buzz || number.toString()
      }),
      takeUntil(this.stopFizzBuzzSubject)
    );
  }

  stopFizzBuzz() {
    this.stopFizzBuzzSubject.next(true);
  }
}
