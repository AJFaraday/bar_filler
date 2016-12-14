BarFiller.emoji = {

  get: function(source) {
    if (BarFiller.emoji.stored[source]){
      return BarFiller.emoji.stored[source]
    } else {
      var image_tag = twemoji.parse(
        source,
        {
          callback: function (icon, options) {
            return 'https://twemoji.maxcdn.com/2/svg/' + icon + '.svg';
          },
          attributes: function () {
            return {
              style: 'max-width:20px;'
            }
          }
        }
      );
      BarFiller.emoji.stored[source] = image_tag;
      return image_tag;
    }
  },

  stored: {}

};