import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import {Machine} from '../../models/machine.model';
import {Stats} from '../../models/stats.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  machines: Machine[];
  stats: Stats;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getMachines();
    this.getStats();
    this.data = {
      labels: ['A','B','C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
    };
  }

  getMachines(): void {
    this.dataService.getMachines().subscribe(machines => this.machines = machines);
  }
  getStats(): void {
    this.dataService.getStats().subscribe(stats => this.stats = stats);
  }
}
