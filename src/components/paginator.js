import {inject, customElement, DOM, bindable} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
@customElement('paginator')
@inject(EventAggregator)
export class Paginator {

  @bindable pagesize;
  @bindable total;
  @bindable paginateEvent;
  @bindable paginateRefreshEvent;
  @bindable maxPages;

  pagen = 1;
  pagesizeChanged(newval, oldval) {
    this.numpages = Math.ceil(this.total/newval);
    if ( this.numpages > this.maxPages && this.maxPages > -1 )
        this.numpages = this.maxPages;
    console.log('pagesize changed ' + newval);
  }

  paginate(inx) {
    console.log(this.maxPages);
    if (this.maxPages > -1 && inx>=this.maxPages){
      this.pagen=this.maxPages;
      console.log("early stopping");
      return;
    }
    this.pagen=inx+1;
    this.ea.publish(this.paginateEvent, {page:inx});
  }

  totalChanged(newval, oldval){
    if (newval == null){
      this.numpages=1;
      return;
    }
    console.log('total changed ' + newval);
    this.numpages = Math.ceil(newval/this.pagesize);
    if ( this.numpages > this.maxPages && this.maxPages > -1 )
        this.numpages = this.maxPages;
    if ( this.numpages < 1 ) this.numpages = 1;
  }

  attached(){
    this.subs = this.ea.subscribe(this.paginateRefreshEvent, resp => {
      this.pagen = 1;
    });
    console.log("max pages: " + this.maxPages);
  }
  constructor(EventAggregator) {
    this.ea = EventAggregator;
  }

  detached() {
    this.subs.dispose();
  }
}
