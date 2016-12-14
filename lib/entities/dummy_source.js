BarFiller.entities.dummy_source = function () {

  // This runs the 'turn' function every turn
  BarFiller.turnables.push(this);

  // this makes a renderer which responds back to this
  // (bar uses 'fill_level' and 'character'
  this.renderer = new BarFiller.renderers.bar('#bar_filler', this);

  // This binds 'click_action' to the click event
  var me = this;
  this.renderer.bind_action('click', function () {
    me.click_action();
  });

  // This is called each turn
  this.turn = function () {

  };

  // This is called when the bar is full
  this.full_action = function () {

  };

  // This is called when the bar is empty
  this.empty_action = function () {

  };

  // this is called on click (see above)
  this.click_action = function() {

  };

};