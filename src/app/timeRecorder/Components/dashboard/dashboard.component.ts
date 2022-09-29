import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetDataService } from '../../Services/get-data.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  UserData$ !: Observable<any[]>;
  UserDataTime$ !: Observable<any[]>;

  UserDataArray : any[] = []
  UserDataTimeArray : any[] = []

  loading1  = false


  constructor(
    private serviceGetData: GetDataService,
  ) { }

  ngOnInit(): void {
   this.getAllUserData()

  }



  getAllUserData() {
    this.UserData$ = this.serviceGetData.getUserData()

    this.UserData$.subscribe(res => 
      {
        this.UserDataArray = [...res]
        console.warn(this.UserDataArray);
        this.serviceGetData.getUserTime().subscribe(res =>
        { 
          this.UserDataTimeArray = [...res]

          this.UserDataArray.forEach(user => {
            var TimesArray: any[] = []
            TimesArray.push(this.UserDataTimeArray.sort((a,b) => a.time - b.time).filter(item =>  user.ID == item.uuid_User))
            user["times"] = TimesArray.sort()
            this.loading1  = true
          })

        })
      }) 
  }





}
