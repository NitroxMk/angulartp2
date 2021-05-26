import { Component, OnInit } from '@angular/core';
import { AppareilServiceService } from '../services/appareil-service.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  json: any[] | any;
  json2 : any[] | any;

  constructor(private appareilService: AppareilServiceService) { }

  ngOnInit(): void {
    this.json = this.appareilService.json;
    this.json2 = [];

  }

  onAllAppareil() {
    this.json2 = []
    this.json.forEach((elm: any) => {
      let elm2 = JSON.stringify(elm).replace('"status":"false"}', '"status":"true"}');
      elm = JSON.parse(elm2)
      this.json2.push(elm)

    });
    console.log(this.json2)
  }

  offAllAppareil() {
    if ( confirm( "Etes-vous sûr de vouloir éteindre tous vos appareils ?" ) ) {
      this.json2 = []
    this.json.forEach((elm: any) => {
      let elm2 = JSON.stringify(elm).replace('"status":"true"}', '"status":"false"}');
      elm = JSON.parse(elm2)
      this.json2.push(elm)

    });
    console.log(this.json2)
  } else {
  }

  }

}
