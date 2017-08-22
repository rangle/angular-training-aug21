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

  dateFormat = 'short';
  greeting: Promise<string>;

  constructor() { }

  ngOnInit() {
    this.greeting = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello from promise!')
      }, 2000);
    });
    // .then(data => {
    //   this.greeting = data;
    // });
  }

  toggleDateFormat() {
    if (this.dateFormat === 'fullDate'){
      this.dateFormat = 'short';
    } else {
      this.dateFormat = 'fullDate';
    }
  }

}
