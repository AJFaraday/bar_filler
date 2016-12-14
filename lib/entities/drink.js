BarFiller.entities.drink = function () {

  BarFiller.turnables.push(this);

  this.fill_level = 0;
  this.character = 'X';
  this.active = false;

  this.drink_turns = 100.0;
  this.drink_per_turn = 100.0 / this.drink_turns;

  this.renderer = new BarFiller.renderers.bar('#bar_filler', this);

  var me = this;
  this.renderer.bind_action('click', function () {
    me.click_action();
  });

  this.turn = function () {
    if (this.active) {
      this.fill_level -= this.drink_per_turn;
    }
  };

  this.full_action = function () {

  };

  this.empty_action = function () {
    if (this.active) {
      this.active = false;
    }
  };

  this.click_action = function() {
    if (!this.active) {
      BarFiller.earn(1);
      this.refill();
    }
  };

  this.refill = function () {
    console.log('refilling');
    this.fill_level = 100;
    this.active = true;
    console.log('refilled');
  };

};