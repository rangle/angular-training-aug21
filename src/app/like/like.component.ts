import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit, OnDestroy {

  @Input() count: number;
  @Output() countChange = new EventEmitter<number>();

  constructor() { }

  onClick() {
    this.countChange
      .next(this.count + 1);
  }

  ngOnInit() {
  }

  ngOnDestroy() {}

}
