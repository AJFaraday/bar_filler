BarFiller = {

  data: {},
  renderers: {},
  entities: {},

  turn_time: 50,
  drawables: [],
  turnables: [],

  init: function () {
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();
    new BarFiller.entities.drink();


    new BarFiller.renderers.money();
  },

  turn: function () {
    console.log('turn');
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
  },

  ///////////////////////////////
  //     money section         //
  ///////////////////////////////

  money: 0,
  spend: function (amount) {
    this.money -= amount;
  },

  earn: function (amount) {
    this.money += amount;
  }

};
