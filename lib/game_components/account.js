BarFiller.game_components.account = function() {
  this.money = 0;
  this.changed = true;

  this.spend = function (amount) {
    this.money -= amount;
    this.changed = true;
  };

  this.earn = function (amount) {
    this.money += amount;
    this.changed = true;
  };
};