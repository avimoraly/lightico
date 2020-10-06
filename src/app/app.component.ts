import { Component, OnDestroy, OnInit } from '@angular/core';
import { StepData, StepsService } from './steps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  steps: StepData[] = [];
  activeIndex: number;
  constructor(private stepsService: StepsService) {

  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.steps = this.stepsService.steps;
    this.stepsService.activeStep$.subscribe((active: number) => {
      this.activeIndex = active;
    });
  }


  title = 'lighticoAssigment';
}
