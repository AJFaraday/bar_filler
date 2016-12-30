BarFiller = {

  game_components: {},
  data: {},
  renderers: {},
  entities: {},

  turn_time: 50,
  drawables: [],
  turnables: [],

  init: function () {
    this.account = new BarFiller.game_components.account();
    this.store_room = new BarFiller.game_components.store_room();

    new BarFiller.renderers.money();
    new BarFiller.renderers.drink_section();
    new BarFiller.renderers.store_section();

    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('beer');
    new BarFiller.entities.customer('wine');
    new BarFiller.entities.customer('wine');
    new BarFiller.entities.customer('wine');
    new BarFiller.entities.customer('wine');
    new BarFiller.entities.customer('wine');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');
    new BarFiller.entities.customer('spirit');

    new BarFiller.entities.store('beer');
    new BarFiller.entities.store('beer');
    new BarFiller.entities.store('wine');
    new BarFiller.entities.store('spirit');

  },

  turn: function () {
    $.each(BarFiller.drawables, function (i, drawable) {
      drawable.draw();
    });
    $.each(BarFiller.turnables, function (i, turnable) {
      turnable.turn();
    });
  },

  start: function () {
    this.process = setInterval(BarFiller.turn, BarFiller.turn_time);
  },

  stop: function () {
    clearInterval(this.process)
  }

};
