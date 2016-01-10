import Section from "./section.js";

function BookWorker(url, cb) {
  this.loaded = false;
  if(url){
    this.url = url;
    this.load(this.url, ()=>{
      this.loaded = true;
      if(cb) cb();
    });
  }
  this.spine = [];
}

BookWorker.prototype.load = function (url, cb) {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', url)
  xhr.onload = function () {
    this.process(xhr.responseText, cb);
  }.bind(this);
  xhr.send()

};

BookWorker.prototype.process = function (text, cb) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(text, "application/xml");
  var body = doc.querySelector('body');
  var isHTMLBook = false;

  if(body.getAttribute("data-type") === "book") {
    isHTMLBook = true;
    this.parseHtmlBook(doc, cb);
  } else{
    this.parseHtml(doc, cb);
  }

};

BookWorker.prototype.parseHtmlBook = function (doc, cb) {
  var sections = doc.querySelectorAll('section');
  var nav = doc.querySelectorAll('[data-type="toc"]');
  var title;
  console.log(nav);

  for (var i = 0; i < sections.length; i++) {
    this.spine.push(new Section(sections[i], title));
  }

  if(cb) cb(this.spine);
};

BookWorker.prototype.parseHtml = function (doc) {

};

BookWorker.prototype.section = function (index) {
  if(this.loaded && index >= 0 && index < this.spine.length - 1 ){
    return this.spine[index];
  }
};


export default BookWorker
