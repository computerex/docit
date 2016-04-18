import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class DocSearchService {

  searchResults = {};
  constructor(http) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
  }

  getLink(hit) {
    return "#/document?id=" + hit._id;
  }
  sayhello() {
    console.log("hello");
  }
  numResults() {
    return this.numSearchResults;
  }
  docs() {
    return this.searchResults;
  }

  similar(id, callback, from=0){
    console.log("DocSearchService: similar()");
    console.log(from);
    var self = this;
    this.http.fetch('http://localhost:3000/api/docsearch/similar/', {
      method: "POST", 
      body: json({"id": id, "from": from})
    }).then(resp => resp.json()).then(docs => {
      self.searchResults = docs;
      if (callback!=null)
        callback(docs);
      console.log(docs);
    });
  }

  search(phrase, callback, from=0){
    console.log("DocSearchService: search()");
    console.log(from);
    var self = this;
    this.http.fetch('http://localhost:3000/api/docsearch/search/', {
      method: "POST", 
      body: json({"phrase": phrase, "from": from})
    }).then(resp => resp.json()).then(docs => {
      self.searchResults = docs;
      if (callback!=null)
        callback(docs);
      console.log(docs);
    });
  }

  activate() {
    // return this.http.fetch('users')
    //   .then(response => response.json())
    //   .then(users => this.users = users);
  }
}
