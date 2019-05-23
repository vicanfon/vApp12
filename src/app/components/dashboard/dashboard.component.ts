import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Machine} from '../../models/machine.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  machines: Machine[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMachines();
  }

  getMachines(): void {
    this.dataService.getMachines().subscribe(machines => this.machines = machines);
  }

}
