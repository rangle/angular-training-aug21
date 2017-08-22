import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class UsersService {

  private stateSubject = new BehaviorSubject({
    users: []
  });

  public state$ = this.stateSubject
    .publishReplay(1)
    .refCount();

  constructor(private apiService: ApiService) {
    this.getAll();
  }

  getAll() {
    this.apiService.get('/users')
      .subscribe((users) => {
        this.stateSubject.next({
          users: users,
        });
      });
  }

}
