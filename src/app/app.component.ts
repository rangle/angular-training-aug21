import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    this.apiService.get('/posts')
      .subscribe(data => {
        console.log(data);
      });
  }
}
