import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class BucketManager {
  heading = 'Bucket Manager';

  constructor(http) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
  }
  
  activate() {
    // return this.http.fetch('users')
    //   .then(response => response.json())
    //   .then(users => this.users = users);
  }
}
