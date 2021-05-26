import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilServiceService {

  json =[
    { "id":"1", "name": "machine a café", "status":"true" },
    { "id":"2", "name": "radiateur", "status":"false" },
    { "id":"3", "name": "lave linge", "status":"true"},
  { "id":"4", "name": "lave vaiselle", "status":"false" }
  ];

  constructor() { }
}
