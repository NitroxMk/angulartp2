import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string | any;
  @Input() appareilStatus: string | any;

  statussurcharger: boolean|any;
  constructor() { }

  ngOnInit(): void {
    if (this.appareilStatus === 'true') {
      this.statussurcharger = true;
    } else {
      this.statussurcharger = false
    }
  }

  getStatus() {
  }

  changeStatus() {
    console.log(this.statussurcharger)
    if (this.statussurcharger === true){
      this.statussurcharger = false;
    } else {
      this.statussurcharger = true
    }

  }




}
