BarFiller = {

  game_components: {},
  data: {},
  renderers: {},
  entities: {},

  turn_time: 10,
  drawables: [],
  turnables: [],

  init: function () {
    this.account = new BarFiller.game_components.account();

    new BarFiller.renderers.money();
    new BarFiller.renderers.drink_section();

    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();


  },

  turn: function () {
    $.each(BarFiller.drawables, function (i, drawable) {
      drawable.draw()
    });
    $.each(BarFiller.turnables, function (i, turnable) {
      turnable.turn()
    });
  },

  start: function () {
    this.process = setInterval(BarFiller.turn, BarFiller.turn_time);
  },

  stop: function () {
    clearInterval(this.process)
  }

};
