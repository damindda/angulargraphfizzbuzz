import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutChartComponent } from './doughnut-chart.component';
import { GraphdataService } from '../../../services/graphdata.service';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('DoughnutChartComponent', () => {
  let component: DoughnutChartComponent;
  let fixture: ComponentFixture<DoughnutChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [ DoughnutChartComponent ],
      providers: [GraphdataService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
