BarFiller.renderers.bar = function (parent, source) {
  this.source = source;
  this.source.renderer = this;
  BarFiller.drawables.push(this);

  this.holder = $('<div>').addClass('bar_holder');
  this.holder.append(
    $('<div>').addClass('bar_title').html(
      BarFiller.emoji.get(source.character)
    )
  );
  this.inner_bar = $('<div>').addClass('inner_bar');
  this.holder.append(this.inner_bar);
  $(parent).append(this.holder);

  this.bind_action = function (action, func) {
    this.holder.on(action, func)
  };

  this.draw = function () {
    if (source.fill_level >= 100) {
      source.fill_level = 100;
      this.source.full_action();
    } else if (source.fill_level <= 0) {
      source.fill_level = 0;
      this.source.empty_action();
    }

    this.inner_bar.css(
      {
        height: source.fill_level + '%',
        top: (100 - source.fill_level) + '%'
      }
    );
  };

};
