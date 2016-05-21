var sharedFunctions = (function () {
  "use strict";
   return {
      toHtmlSlide: (function (code) {
          //Font Replace
          var output = code.replace(/\[b\](.*?)\[\/b\]/g, "<b>$1</b>");
          var output = code.replace(/\[b\](.*?)\[\/b\]/g, "<b>$1</b>");
        return console.log(output + lol());
      }),
      markers: { 
          Fonts: [{tag: 'TimesNewRoman', html: '', name: 'Times New Roman'}, 
            {tag: 'Arial', html: '', name: 'Arial'}, 
            {tag: 'ComicSans', html: '', name: 'Comic Sans'}],
          Bold: {tag: 'b', html: ''}, 
          Italic: {tag: 'i', html: ''}, 
          Underline: {tag: 'u', html: ''}, 
          Strike: {tag: 's', html: ''}, 
          AlignLeft: {tag: 'left', html: ''}, 
          AlignCenter: {tag: 'center', html: ''}, 
          AlignRight: {tag: 'right', html: ''}, 
          AlignJustify: {tag: 'justify', html: ''}, 
          Style: [{tag: 'h1', html: '', name: 'Nagłówek 1'}, 
            {tag: 'h2', html: '', name: 'Nagłówek 2'}, 
            {tag: 'h3', html: '', name: 'Nagłówek 3'},
            {tag: 'h4', html: '', name: 'Nagłówek 4'}, 
            {tag: 'h5', html: '', name: 'Nagłówek 5'}, 
            {tag: 'h6', html: '', name: 'Nagłówek 6'}],
          }
   };
}());
