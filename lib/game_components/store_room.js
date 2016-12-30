BarFiller.game_components.store_room = function() {

  this.stores = {};

  this.add_store = function(store) {
    if (!this.stores[store.drink_name]) {
      this.stores[store.drink_name] = [];
    }
    this.stores[store.drink_name].push(store);
  };

  this.get_store = function(drink_name) {
    var i, store;
    for (i in this.stores[drink_name]) {
      store = this.stores[drink_name][i];
      if (store.drinks_remaining > 0 && !store.filling) {
        return this.stores[drink_name][i];
      }
    }
  };
  
  this.take_drink = function(drink_name) {
    var store = this.get_store(drink_name) 
    if (store) {
      store.take_drink();
      return true;
    } else {
      return false;
    }
  };

};