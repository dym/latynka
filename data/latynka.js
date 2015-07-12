var latynka = (function() {

  return {

    transMethod: self.options.translateMethod || "luchukivka",

    transTable: self.options.translateTable,

    transliterateText: function transliterate(text, transTable) {
      var outputText = '';

      var i = 0;
      while (i < text.length) {
        if ((i < text.length - 1) && (transTable.hasOwnProperty(text[i] + text[i+1]))) {
          outputText += transTable[text[i] + text[i+1]];
          i++;
        } else if (transTable.hasOwnProperty(text[i])) {
          outputText += transTable[text[i]];
        } else {
          outputText += text[i];
        }

        i++;
      }

      return outputText;
    },

    transliterate: function transliterate() {
      var all = document.getElementsByTagName('*');
      for (var i=0, max=all.length; i < max; i++) {
        node = all[i];
        for (var j=0; j < node.childNodes.length; j++) {
          childNode = node.childNodes[j];
          if (childNode.nodeType == Node.TEXT_NODE && childNode.nodeValue.trim() != '') {
            childNode.nodeValue = this.transliterateText(childNode.nodeValue, this.transTable[this.transMethod]);
          }
        }
      }
    }

  };

})();
