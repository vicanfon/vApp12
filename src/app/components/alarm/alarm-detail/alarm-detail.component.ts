import { Component, OnInit, Input } from '@angular/core';
import { Alarm } from '../../../models/alarm.model';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  @Input() alarm: Alarm;

  constructor() { }

  ngOnInit() {
  }

}
