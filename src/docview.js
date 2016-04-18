import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class DocView {

  heading = "Doc View";

  constructor(http) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
    this.documentId = "foobar";
    this.docid=0;
  }

  // search(){
  //   this.http.fetch('http://localhost:3000/api/docsearch/search/', {
  //     method: "POST", 
  //     body: json({"phrase": this.searchPhrase})
  //   }).then(resp => resp.json()).then(docs => {
  //     this.searchResults = docs;
  //     this.numSearchResults = this.searchResults.hits.total;
  //     console.log(docs);
  //   });
  //   console.log(this.searchPhrase);
  // }

  activate(params, routeConfig) {
    this.documentId = params.id;
    this.similarUrl = "#/similar?id=" + params.id;
    var url = 'http://localhost:3000/api/document/' + params.id;
    console.log("fetching: " + url);
     return this.http.fetch(url)
       .then(response => response.json())
       .then(d => {
        this.doc = d;
        this.docid = d._id;
        this.heading = d._source.name;
        console.log(d);
      });
  }
}
