BarFiller.renderers.dummy_renderer = function () {

  // This will be drawn every turn
  BarFiller.drawables.push(this);

  // Make some new jQuery elements
  this.holder = $('div').addClass('dummy');
  this.inner = $('div').addClass('dummy_innard');
  // put them together
  this.holder.append(this.inner);
  //append them to the page
  $('#bar_filler').append(this.holder);

  // This will be called on every turn
  this.draw = function () {

  };

};
