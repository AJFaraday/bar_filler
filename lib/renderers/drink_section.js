BarFiller.renderers.drink_section = function () {

  // This only needs to be drawn once
  // DO NOT ADD TO DRAWABLES

  this.holder = $('<div>').addClass('drink_section');
  this.title = $('<h2>').addClass('drink_section_title').html("Drinks");
  this.inner = $('<div>').addClass('drink_section_inner').attr('id', 'drink_section_inner');

  this.holder.append(this.title);
  this.holder.append(this.inner);
  $('#bar_filler').append(this.holder).append($('<br clear="both">'));

};
