BarFiller.entities.customer = function(drink_name) {

  BarFiller.turnables.push(this);

  var profile_options = BarFiller.data.customer_profiles[drink_name];
  this.profile = profile_options[Math.floor(Math.random() * profile_options.length)]

  this.drink_name = drink_name;
  // Dummy values, replaced shortly
  this.character = "\uD83C\uDF7A";

  this.new_drink_chance = 5;
  this.fill_level = 0;

  this.renderer = new BarFiller.renderers.bar('#drink_section_inner', this);
  var me = this;
  this.renderer.bind_action('click', function() {
    me.click_action();
  });


  this.turn = function() {
    if(this.active) {
      this.fill_level -= this.drink_per_turn;
    } else if(this.drink_name == 'no_drink') {
      if((Math.random() * 100) <= this.new_drink_chance) {
        this.random_drink();
      }
    }
  };

  this.full_action = function() {

  };

  this.empty_action = function() {
    if(this.active) {
      this.active = false;
      this.change_drink('no_drink');
    }
  };

  this.click_action = function() {
    this.serve(this.drink_name)
  };

  this.serve = function() {
    if(!this.active && this.drink_name != 'no_drink') {
      this.refill();
    }
  };

  this.refill = function() {
    if (BarFiller.store_room.take_drink(this.drink_name)) {
      BarFiller.account.earn(this.price);
      this.fill_level = 100;
      this.active = true;
    } else {
      console.log("There's no " + this.drink_name + " to serve.")
    }
  };

  this.random_drink = function() {
    var spec = this.profile.drink_chances;
    var i, sum = 0, r = Math.random() * 100;
    for(i in spec) {
      sum += spec[i];
      if(r <= sum) {
        this.change_drink(i);
        return;
      }
    }
  };

  this.change_drink = function(name) {
    this.drink_name = name;
    var data = BarFiller.data.drinks[name];
    this.character = data.character;
    this.drink_turns = data.drink_turns;
    this.price = data.price;

    this.drink_per_turn = 100.0 / this.drink_turns;
    this.renderer.change_character(this.character);
  };
  this.random_drink();

};