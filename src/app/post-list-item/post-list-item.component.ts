import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() jsondata;
  love: number;

  
    constructor() { }
  
    ngOnInit(): void {
      console.log(this.json)
    }
  
    loveitplus(e:number) {
      console.log(e);
      console.log(e++);
    }
  
    loveitmoin(e:number) {
      console.log(e);
    }
}
