import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepsService {
  activeStep$: BehaviorSubject<number> = new BehaviorSubject(0);

  steps: StepData[] = [
    { content: 'data 1',  stepName: 'פרטים כלליים' },
    { content: 'data 2',  stepName: 'רקע רפואי' },
    { content: 'data 3',  stepName: 'הצהרות' },
    { content: 'data 4',  stepName: 'אישור וחתימות' },
    { content: 'data 5',  stepName: 'דברים אחרונים' },
    { content: 'data 6',  stepName: 'סיום' }
  ];

  getSteps(): StepData[] {
    return this.steps;
  }

  setActive(index: number): void {
    if (index < 0 || index >= this.steps.length) {
      return;
    }

    this.activeStep$.next(index);
  }

  constructor() {
  }
}

export interface StepData {
  content: string;
  stepName: string;
}

