import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-post-list-items',
  templateUrl: './post-list-items.component.html',
  styleUrls: ['./post-list-items.component.scss']
})
export class PostListItemsComponent implements OnInit {
  @Input() jsondata: any;



  constructor() { }

  ngOnInit(): void {
  }

  loveitplus(e:number) {
    console.log(e);
  }

  loveitmoin(e:number) {
    console.log(e);
  }

}
