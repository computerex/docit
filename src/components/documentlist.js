import {inject, bindable} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {DocSearchService} from 'services/DocSearchService';
import {EventAggregator} from 'aurelia-event-aggregator';
import 'fetch';

@inject(HttpClient, DocSearchService, EventAggregator)
export class Documentlist {
  constructor(http, DocSearchService, EventAggregator) {
    http.configure(config => {
      config.useStandardConfiguration();
    });
    this.http = http;
    this.DocSearchService = DocSearchService;
    this.ea = EventAggregator;
  }
  getLink(hit) {
    return "#/document?id=" + hit._id;
  }
  
  @bindable searchResults;

}
