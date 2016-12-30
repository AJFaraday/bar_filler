BarFiller.customer_components.mood = function() {

  this.mood = this.profile.starting_mood;
  
  this.cheer_up = function() {
    this.mood += profile.cheer_increment;
    if (this.mood > 100) {this.mood = 100}
  };

  this.enrage = function() {
    this.mood -= profile.anger_increment;
    if (this.mood < 0) {this.mood = 0}
  };

};
