import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  src: string = '../../../../assets/S108_Einrichtung_der_Hardware.pdf';
  constructor() { }

  ngOnInit(): void {
  }

}
