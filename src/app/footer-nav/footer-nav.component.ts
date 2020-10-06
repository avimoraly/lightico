import { StepData } from './../steps.service';
import { Component, OnInit } from '@angular/core';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {
  steps: StepData[];
  active: number;
  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.steps = this.stepsService.steps;
    this.stepsService.activeStep$.subscribe((newActive: number) => {
      this.active = newActive;
    });
  }

  back(): void {
    this.stepsService.setActive(this.active - 1);
  }

  next(): void {
    this.stepsService.setActive(this.active + 1);
  }

}
