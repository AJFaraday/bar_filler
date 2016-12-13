BarFiller = {

  data: {},
  renderers: {},
  entities: {},

  turn_time: 200,
  drawables: [],

  init: function () {
    this.source = {fill: 50, character: 'D'};
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler', new BarFiller.entities.dummy_source())
    );


    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
    this.drawables.push(
      new BarFiller.renderers.bar('#bar_filler2', new BarFiller.entities.dummy_source())
    );
  },

  turn: function () {
    $.each(BarFiller.drawables, function (i, drawable) {
      drawable.draw();
      drawable.source.fill += ((Math.random() * 10) - 5);
    });
  },

  start: function () {
    this.process = setInterval(BarFiller.turn, BarFiller.turn_time);
  },

  stop: function () {
    clearInterval(this.process)
  }


};
