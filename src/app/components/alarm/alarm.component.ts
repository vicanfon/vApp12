import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Alarm} from '../../models/alarm.model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {

  alarms: Alarm[];
  cols: any[];
  selectedAlarm: Alarm;
  closeResult: string;
  display: boolean;



constructor(private alarmService: DataService, private modalService: NgbModal) { }

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

  // modal

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }


  getAlarms(): void {
    this.alarmService.getAlarms().subscribe(alarms => this.alarms = alarms);
  }
}
