BarFiller.renderers.store_section = function () {

  // This only needs to be drawn once
  // DO NOT ADD TO DRAWABLES

  this.holder = $('<div>').addClass('store_section');
  this.title = $('<h2>').addClass('store_section_title').html("Stores");
  this.inner = $('<div>').addClass('store_section_inner').attr('id', 'store_section_inner');

  this.holder.append(this.title);
  this.holder.append(this.inner);
  $('#bar_filler').append(this.holder).append($('<br clear="both">'));

};
