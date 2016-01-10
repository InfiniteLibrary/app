import Section from "./section.js";

// Creates a new Book, loads if URL is provided
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
  this.nac = {};
}
// Load the book from the url
BookWorker.prototype.load = function (url, cb) {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', url);
  xhr.onload = function () {
    this.process(xhr.responseText, cb);
  }.bind(this);
  xhr.send();

};

// Process the book contents
BookWorker.prototype.process = function (text, cb) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(text, "application/xml");
  var body = doc.querySelector('body');
  var isHTMLBook = false;

  // Check if book is htmlbook
  if(body.getAttribute("data-type") === "book") {
    isHTMLBook = true;
    this.parseHtmlBook(doc, cb);
  } else{
    this.parseHtml(doc, cb);
  }

};

// Parse a htmlbook
BookWorker.prototype.parseHtmlBook = function (doc, cb) {
  var i;
  // Get all chapter sections
  var sections = doc.querySelectorAll('section');
  // Get the Table of Contents
  var nav = doc.querySelector('[data-type="toc"]');

  this.toc = this.nav(nav);

  for (i = 0; i < sections.length; i++) {
    // Add each section to the spine
    // Each section should have a dom element
    this.spine.push(new Section(sections[i]));
  }

  if(cb) cb(this.spine);
};

// Parse a simple html
BookWorker.prototype.parseHtml = function (doc) {
  // Get each section by headers

  // Wrap header in section tag

  // Add sections to spine
};

// Fetch a section
BookWorker.prototype.section = function (index) {
  if(this.loaded && index >= 0 && index < this.spine.length - 1 ){
    return this.spine[index];
  }
};

BookWorker.prototype.nav = function(navElement){
	var navItems = navElement.querySelectorAll("ol li");
	var length = navItems.length;
	var i;
	var toc = [];
	var item, parent;

	if(!navItems || length === 0) return list;

	for (i = 0; i < length; ++i) {
		item = navItems[i].querySelector("a");
		toc.push({
      index: i,
      title: item.textContent
		});
	}
	return toc;
};


export default BookWorker
