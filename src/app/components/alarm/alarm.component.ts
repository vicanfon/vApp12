import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Alarm} from '../../models/alarm.model';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  alarms: Alarm[];
  cols: any[];
  selectedAlarm: Alarm;

  // to delete


constructor(private alarmService: DataService) { }

  ngOnInit() {
    this.getAlarms();

    this.cols = [
      { field: 'timestamp', header: 'Timestamp' },
      { field: 'status', header: 'Status' },
      { field: 'code', header: 'Code' },
      { field: 'name', header: 'Name' },
      { field: 'type', header: 'Type' },
      { field: 'machine', header: 'Machine' },
      { field: 'company', header: 'Company' },
      { field: 'origin', header: 'Origin' }
    ];
  }

  getAlarms(): void {
    this.alarmService.getAlarms().subscribe(alarms => this.alarms = alarms);
  }
}
