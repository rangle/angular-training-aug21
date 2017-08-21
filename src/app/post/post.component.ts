import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() body: string;
  @Input('user') author: string ;
  @Input() date: Date;

  constructor() { }

  ngOnInit() {
  }

}
