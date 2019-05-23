import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Alarm } from '../models/alarm.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const alarms = [
      { id: 11, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' },
      { id: 12, timestamp: new Date(), status: 'Activated', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' },
      { id: 13, timestamp: new Date(), status: 'Dismissed', code: '11', name: 'alarm 11', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' },
      { id: 14, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' },
      { id: 15, timestamp: new Date(), status: 'Intervened', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' },
      { id: 16, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'blablabla' }
    ];
    return {alarms};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(alarms: Alarm[]): number {
    return alarms.length > 0 ? Math.max(...alarms.map(alarm => alarm.id)) + 1 : 11;
  }
}
