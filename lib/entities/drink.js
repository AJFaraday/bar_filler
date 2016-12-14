BarFiller.entities.drink = function () {

  BarFiller.turnables.push(this);

  this.drink_name = "beer";
  this.character = "\uD83C\uDF7A";
  this.price = 1;
  this.drink_turns = 100.0;

  this.new_drink_chance = 5;

  this.fill_level = 0;
  this.active = false;

  this.drink_per_turn = 100.0 / this.drink_turns;

  this.renderer = new BarFiller.renderers.bar('#drink_section_inner', this);

  var me = this;
  this.renderer.bind_action('click', function () {
    me.click_action();
  });

  this.turn = function () {
    if (this.active) {
      this.fill_level -= this.drink_per_turn;
    } else if (this.drink_name == 'no_drink') {
      if ((Math.random() * 100) <= this.new_drink_chance) {
        this.random_drink();
      }
    }
  };

  this.full_action = function () {

  };

  this.empty_action = function () {
    if (this.active) {
      this.active = false;
      this.change_drink('no_drink');
    }
  };

  this.click_action = function () {
    if (!this.active && this.drink_name != 'no_drink') {
      BarFiller.account.earn(this.price);
      this.refill();
    }
  };

  this.refill = function () {
    this.fill_level = 100;
    this.active = true;
  };

  this.random_drink = function() {
    var drink_options = ['beer','wine','spirit','no_drink'];
    var drink = drink_options[Math.floor(Math.random()*drink_options.length)];
    this.change_drink(drink);
  };

  this.change_drink = function (name) {
    this.drink_name = name;
    var data = BarFiller.data.drinks[name];
    this.character = data.character;
    this.drink_turns = data.drink_turns;
    this.price = data.price;

    this.drink_per_turn = 100.0 / this.drink_turns;
    this.renderer.change_character(this.character);
  };

};