import { StepData, StepsService } from './../steps.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-upper-nav',
  templateUrl: './upper-nav.component.html',
  styleUrls: ['./upper-nav.component.scss']
})
export class UpperNavComponent implements OnInit {
  steps: StepData[] = [];
  activeIndex: number;
  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.getSteps();

    this.stepsService.activeStep$.subscribe((active: number) => {
      this.activeIndex = active;
    });
  }

  onChoose(index: number): void {
    this.stepsService.setActive(index);
  }



}
