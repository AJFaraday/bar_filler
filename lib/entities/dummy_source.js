BarFiller.entities.dummy_source = function () {

  this.fill = 50;

  this.character = 'X';

  this.full_action = function () {
    console.log('bar is full');
    this.reset();
  };

  this.empty_action = function () {
    console.log('bar is empty');
    this.reset();
  };

  this.reset = function () {
    this.fill = 50;
  };

};