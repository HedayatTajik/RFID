import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../../Services/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private serviceGetData: GetDataService) { }

  ngOnInit(): void {
    this.serviceGetData.getSignalById().subscribe(res=> console.log(res))
  }

}
