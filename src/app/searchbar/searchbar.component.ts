import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  query: string = '';
  @Output() queryChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  updateQuery(query) {
    this.query = query;
    this.queryChange.emit(this.query);
  }

}
