BarFiller.entities.store = function(drink_name) {

  // This runs the 'turn' function every turn
  BarFiller.turnables.push(this);

  this.drink_name = drink_name;
  BarFiller.store_room.add_store(this);
  this.profile = BarFiller.data.stores[drink_name];
  this.character = BarFiller.data.drinks[drink_name].character;
  this.fills_per_turn = 100 / this.profile.refill_turns;
  this.fill_level = 100;

  this.drinks_remaining = this.profile.capacity;

  // this makes a renderer which responds back to this
  // (bar uses 'fill_level' and 'character'
  this.renderer = new BarFiller.renderers.bar('#store_section_inner', this);

  // This binds 'click_action' to the click event
  var me = this;
  this.renderer.bind_action('click', function() {
    me.click_action();
  });

  // This is called each turn
  this.turn = function() {
    if(this.filling) {
      this.fill_level += this.fills_per_turn;
    }
  };

  // This is called when the bar is full
  this.full_action = function() {
    this.filling = false;
  };

  // This is called when the bar is empty;
  this.empty_action = function() {

  };

  this.take_drink = function() {
    if(this.drinks_remaining > 0) {
      this.drinks_remaining -= 1;
      this.fill_level = (this.drinks_remaining / this.profile.capacity) * 100;
    }
  };

  // this is called on click (see above)
  this.click_action = function() {
    if(!this.is_full()) {
      BarFiller.account.spend(this.profile.refill_price);
      this.drinks_remaining = this.profile.capacity;
      this.filling = true;
    }
  };

  this.is_full = function() {
    return (this.drinks_remaining >= this.profile.capacity);
  }

};