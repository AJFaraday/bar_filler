BarFiller.renderers.money = function() {

  BarFiller.drawables.push(this);

  this.holder = $('<div>').addClass('money_section');
  this.readout = $('<div>').addClass('money_readout');
  this.holder.append(this.readout);
  $('#bar_filler').prepend(this.holder);

  this.draw = function () {
    if (BarFiller.money >= 0) {
      this.readout.removeClass('low');
      this.readout.html("£" + BarFiller.money);
    } else {
      this.readout.addClass('low');
      this.readout.html("-£" + Math.abs(BarFiller.money));
    }
  };


};
