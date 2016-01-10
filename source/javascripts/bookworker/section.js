function Section(el, title) {
  this.el = el;
  this.text = '';
  this.title = title || '';
}

Section.prototype.contents = function () {
  if (this.text) {
    return this.text;
  }
  this.text = new XMLSerializer().serializeToString(this.el);
  return this.text;
};

export default Section;
