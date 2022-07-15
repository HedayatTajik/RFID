import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../../Services/get-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data$ !: Observable<any[]>;
  constructor(
    private serviceGetData: GetDataService,
  ) { }

  ngOnInit(): void {
    this.getDataFunc()
  }

  getDataFunc() {
    this.data$ = this.serviceGetData.getData()
    this.data$.subscribe(res => {
      console.log(res)
    })
  }

}
