import { Injectable } from '@angular/core';

// <--Add this service here-->
import { HttpClient } from '@angular/common/http';
// <--Add end-->

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  createBag(newBag: any) {
    console.log('Adding a Bag!', newBag);
    return this._http.post('/api/createBag', newBag);
  }
  SerReadBag() {
    console.log('Reading a Bag!');
    return this._http.post('/api/readBag', null);
  }
  SerSendWholeBag(wholeBag) {
    console.log('sending this bag to backend: ', wholeBag);
    return this._http.post('/api/createBag', wholeBag);
  }
  SerDelete(id) {
    return this._http.delete('api/delete/' + id);
  }

}

// These are the routes to hit
// app.post('/api/readBag', disasters.readBag);
// app.post('/api/createBag', disasters.createBag);
