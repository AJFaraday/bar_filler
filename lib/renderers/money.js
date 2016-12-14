BarFiller.renderers.money = function() {

  BarFiller.drawables.push(this);

  this.holder = $('<div>').addClass('money_section');
  this.readout = $('<div>').addClass('money_readout');
  this.holder.append(this.readout);
  $('#bar_filler').append(this.holder).append($('<br clear="both">'));

  this.draw = function () {
    if (BarFiller.account.changed) {
      if (BarFiller.account.money >= 0) {
        this.readout.removeClass('low');
        this.readout.html("£" + BarFiller.account.money);
      } else {
        this.readout.addClass('low');
        this.readout.html("-£" + Math.abs(BarFiller.account.money));
      }
      BarFiller.account.changed = false;
    }
  };


};
