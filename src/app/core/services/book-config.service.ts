import {Injectable} from '@angular/core';
import {WorkingTime} from '../models/working-time.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class BookConfigService {
  workingTimeConfig = [
    {
      day: 2,
      start: '08:00',
      end: '18:00',
      dayOff: false
    },
    {
      day: 3,
      start: '08:00',
      end: '18:00',
      dayOff: false
    },
    {
      day: 4,
      start: '08:00',
      end: '18:00',
      dayOff: false
    },
    {
      day: 5,
      start: '08:00',
      end: '18:00',
      dayOff: false
    },
    {
      day: 6,
      start: '08:00',
      end: '12:00',
      dayOff: false
    },
    {
      day: 0,
      start: '',
      end: '',
      dayOff: true
    },
    {
      day: 1,
      start: '08:00',
      end: '18:00',
      dayOff: false
    },

  ];

  scheduleStepper = 45;

  constructor() {
  }

  get workingTime(): WorkingTime[] {
    return this.workingTime;
  }

  getDayTimeRange(day: number): string[] {
    const tempDay = this.workingTimeConfig.filter(d => d.day === day);
    const start = tempDay[0].start.split(':');
    const end = tempDay[0].end.split(':');
    const date = new Date();
    date.setHours(+start[0], +start[1], 0);
    console.log(date.getTime());
    let startDateMs = date.getTime();
    date.setHours(+end[0], +end[1], 0);
    const endDateMs = date.getTime();
    const scheduleStepperMs = this.scheduleStepper * 60000;
    const timeRange: string[] = [];
    while (startDateMs < endDateMs) {
      timeRange.push(moment(startDateMs).format('HH:mm'));
      startDateMs = startDateMs + scheduleStepperMs;
    }
    return timeRange;
  }
}
