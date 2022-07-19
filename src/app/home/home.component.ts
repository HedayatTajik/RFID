import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var timestamp = Date.now()
    var timestamp2 = Date.now() - 120000
    console.log("timestamp:", timestamp);


    const date = new Date(timestamp);
    console.log("date:",date);

    const year = date.getFullYear();
    console.log("year",year); 

    const month = date.getMonth() +1;
    console.log("Month",month); 
    

    const day = date.getDate();
    console.log("day",day); 

    const time = date.getTime();
    console.log("time",time); 


   var  human = new Date(timestamp).toLocaleString() 
   var  human2 = new Date(timestamp2).toLocaleString()
    console.log("human:",human );
    console.log("human2:",human2 );
  }

}
