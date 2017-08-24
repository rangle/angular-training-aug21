import { async, fakeAsync, tick } from '@angular/core/testing';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

const mockHttp = {
  get: null,
} as any;

fdescribe('ApiService', () => {
  let apiService;

  beforeEach(() => {
    apiService = new ApiService(mockHttp);
  });

  it('should make a get request', () => {
    const spy = spyOn(mockHttp, 'get')
      .and.returnValue(Observable.of({
        json: () => 'data from server'
      }));

    apiService.get('/test-end-point')
      .subscribe((data) => {
        expect(spy.calls.count()).toBe(1);
        expect(spy.calls.argsFor(0)).toEqual([
          'https://jsonplaceholder.typicode.com/test-end-point',
          apiService.baseOptions,
        ]);
        expect(data).toBe('data from server');
      });
  });

  it('async example', (done) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('data!')
      }, 500);
    });

    promise.then((data) => {
      expect(data).toBe('data!');
      done();
    });
  });

  it('async example 2', async(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('data!')
      }, 500);
    });

    promise.then((data) => {
      expect(data).toBe('data!');
    });
  }));

  it('async example 3', fakeAsync(() => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('data!')
      }, 500);
    });

    tick(500);

    promise.then((data) => {
      expect(data).toBe('data!');
    });
  }));

});
