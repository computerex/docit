import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {DocSearchService} from 'services/DocSearchService';
import {EventAggregator} from 'aurelia-event-aggregator';
import 'fetch';

@inject(HttpClient, DocSearchService, EventAggregator)
export class SimilarDocuments {
  heading = 'Document Search';
  searchPhrase = "";
  numSearchResults = 0;

  constructor(http, DocSearchService, EventAggregator) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
    this.DocSearchService = DocSearchService;
    this.ea = EventAggregator;
  }

  attached() {
    this.subs = this.ea.subscribe('similarPaginate', resp => {
      this.search(resp.page);
    });
  }

  detached(){
    this.subs.dispose();
  }

  getLink(hit) {
    return "#/document?id=" + hit._id;
  }

  search(from){
    console.log("this is the similar search function");
    var self = this;
    this.DocSearchService.similar(this.id, function(docs){
      self.searchResults = docs;
      self.numSearchResults = self.searchResults.hits.total;
      if ( from == null ){
        self.ea.publish('similarPaginateRefresh', {pagen:1});
      }
    }, from);
  }

  activate(params) {
    this.heading = "Documents similar to " + params.id;
    this.id = params.id;
    this.search();
    console.log(params.id);
  }
}
