import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  json =[
    { "titre":"Ford", "content": "desc", "loveit":"-1","createat":"11/05/2020" },
    { "titre":"Ford3", "content": "desc", "loveit":"2","createat":"10/05/2020" },
    { "titre":"Ford4", "content": "desc", "loveit":"-2","createat":"16/05/2020" },
  { "titre":"Ford4", "content": "desc", "loveit":"1","createat":"1/05/2020" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
