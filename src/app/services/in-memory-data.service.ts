import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Alarm } from '../models/alarm.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const alarms = [
      { id: 11, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 12, timestamp: new Date(), status: 'Activated', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 13, timestamp: new Date(), status: 'Dismissed', code: '11', name: 'alarm 11', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 14, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 15, timestamp: new Date(), status: 'Intervened', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' },
      { id: 16, timestamp: new Date(), status: 'Detected', code: '12', name: 'alarm 12', type: '1X', machine: 'M1', company: 'SIS', origin: 'automatic', comment: 'It broke like doing X' }
    ];
    const interventions = [
      { id: 11, solution: "press A", comment: 'You have to press A to solve the problem', timestamp: new Date(), duration: 0.5, alarmCode: '15', alarmName: 'alarm 15' }
    ];

    const alarmtypes= [
      { code: 11, name: "name 1" },
      { code: 12, name: "name 2" },
      { code: 13, name: "name 3" }
    ];

    const machines = [
      { id: 1, name: "M1" },
      { id: 2, name: "M2" },
      { id: 3, name: "M3" }
    ];
    const failuretypes = [
      { id: 1, name: "Failure 1" },
      { id: 2, name: "Failure 2" },
      { id: 3, name: "Failure 3" }
    ];

    const stats = { nDetected: 2, nActivated: 1, nIntervened: 3, nDismissed: 2, nRejected: 1, avgSolvingTime: 1.5, frequentFailureTypes: [{code:'12', frequency: 0.3}] }

    return {alarms, interventions, stats, alarmtypes, machines, failuretypes};
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
