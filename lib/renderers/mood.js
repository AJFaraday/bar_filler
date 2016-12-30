// Mood, belonging to a source, ranges from 0 to 100
// 50 is completely neutral.
BarFiller.renderers.mood = function (source) {

  this.source = source;
  
  // This will be drawn every turn
  BarFiller.drawables.push(this);

  // Make some new jQuery elements
  this.holder = $('<div>').addClass('mood');
  this.inner = $('<div>').addClass('mood_emoji');
  // put them together
  this.holder.append(this.inner);
  //append them to the page
  $(source.renderer.holder).append(this.holder);
  
  // This will be called on every turn
  this.draw = function () {
    if (this.source.mood_changed) {
      this.source.mood_changed = false;
      this.inner.html(this.character());
    } 
  };
  
  this.character = function() {
    for(index in BarFiller.data.moods) {
      if (this.source.mood <= index) {
        return BarFiller.emoji.get(BarFiller.data.moods[index]);
      }
    }
  };

  this.inner.html(this.character());
  
};
