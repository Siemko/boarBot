var sharedFunctions = (function () {
  'use strict'
  return {
    toHtmlSlide: (function (code) {
      if (!code)
        return ''
      code = code.replace(/(?:\r\n|\r|\n)/g, '<br />')
      for (var key in sharedFunctions.markers) {
        var value = sharedFunctions.markers[key]
        if (Array.isArray(value)) {
          for (var i = 0; i < value.length; i++)
            code = replaceMarker(code, value[i])
          continue
        }
        code = replaceMarker(code, value)
      }
      return code
    }),
    markers: {
      Fonts: [{ tag: 'TimesNewRoman', html: "<span class='font-times-new-roman'>{v}</span>", name: 'Times New Roman' },
        { tag: 'Arial', html: "<span class='font-arial'>{v}</span>", name: 'Arial' },
        { tag: 'ComicSans', html: "<span class='font-comic-sans'>{v}</span>", name: 'Comic Sans' }],
      Bold: { tag: 'b', html: '<b>{v}</b>' },
      Italic: { tag: 'i', html: '<i>{v}</i>' },
      Underline: { tag: 'u', html: '<u>{v}</u>' },
      Strike: { tag: 's', html: '<s>{v}</s>' },
      AlignLeft: { tag: 'left', html: "<span class='align-left'>{v}</span>" },
      AlignCenter: { tag: 'center', html: "<span class='align-center'>{v}</span>" },
      AlignRight: { tag: 'right', html: "<span class='align-right'>{v}</span>" },
      AlignJustify: { tag: 'justify', html: "<span class='align-justify'>{v}</span>" },
      Styles: [{ tag: 'h1', html: '<h1>{v}</h1>', name: 'Nagłówek 1' },
        { tag: 'h2', html: '<h2>{v}</h2>', name: 'Nagłówek 2' },
        { tag: 'h3', html: '<h3>{v}</h3>', name: 'Nagłówek 3' },
        { tag: 'h4', html: '<h4>{v}</h4>', name: 'Nagłówek 4' },
        { tag: 'h5', html: '<h5>{v}</h5>', name: 'Nagłówek 5' },
        { tag: 'h6', html: '<h6>{v}</h6>', name: 'Nagłówek 6' },
        { tag: 'footnote', html: "<span class='footnote'>{v}</span>", name: 'Footnote' }],
      Animations: [{ tag: 'scaling', html: "<span class='scaling'>{v}</span>", name: 'Skalowanie' },
        { tag: 'rotating', html: "<span class='rotating'>{v}</span>", name: 'Rotacja' },
        { tag: 'swing', html: "<span class='imagination'>{v}</span>", name: 'Swing' },
        { tag: 'up', html: "<span class='positioning'>{v}</span>", name: 'W górę' }],
    }
  }
}())

function replaceMarker (code, marker) {
  var rgx = new RegExp('\\[' + marker.tag + '\\](.*?)\\[\/' + marker.tag + '\\]', 'g')
  var values = code.match(rgx)
  return code.replace(rgx, marker.html.replace('{v}', '$1'))
}
