import { Component, OnInit } from '@angular/core';
import { Intervention } from '../../../models/intervention.model';
import {NgForm} from '@angular/forms';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-intervention-manual',
  templateUrl: './intervention-manual.component.html',
  styleUrls: ['./intervention-manual.component.css']
})
export class InterventionManualComponent implements OnInit {

  timestamp: Date = new Date();
  constructor(public dataService: DataService) { }

  ngOnInit() {
  }

  createIntervention(form: NgForm){
    const timestamp = form.value.timestamp;
    const status = 'Activated';
    const code = form.value.code;
    const name = form.value.name;
    const type = form.value.type;
    const machine= form.value.machine;
    const company = form.value.company;
    const origin = "manual";
    this.dataService.createAlarm(timestamp,status,code,name,type, machine, company, origin);
    form.reset();
  }

}
