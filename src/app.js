export class App {
  configureRouter(config, router) {
    config.title = 'docit';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: ['docsearch'], name: 'docsearch', moduleId: 'docsearch', nav: true, title: 'Document Search'},
      { route: ['document'], name: 'docview', moduleId: 'docview', nav: false, title: 'Document'},
      { route: ['buckets'], name: 'bucketmanager', moduleId: 'components/bucketmanager', nav: true, title: 'Bucket Manager'},
      { route: ['similar'], name: 'similardocs', 'moduleId': 'similardocs', nav: false, title: 'Similar Docs'}
    ]);

    this.router = router;
  }
}
