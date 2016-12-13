BarFiller.renderers.bar = function (parent, source) {
  this.source = source;
  this.source.renderer = this;

  this.holder = $('<div>').addClass('bar_holder');
  this.holder.append($('<div>').addClass('bar_title').html(source.character));
  this.inner_bar = $('<div>').addClass('inner_bar');
  this.holder.append(this.inner_bar);
  $(parent).append(this.holder);

  this.draw = function () {
    if (source.fill >= 100) {
      source.fill = 100;
      this.source.full_action();
    } else if (source.fill <= 0) {
      source.fill = 0;
      this.source.empty_action();
    }

    this.inner_bar.animate(
      {
        height: source.fill + '%',
        top: (100 - source.fill) + '%'
      },
      BarFiller.turn_time
    );
  };

};
