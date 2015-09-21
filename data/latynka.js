var latynka = (function() {

  return {

    transMethod: self.options.translateMethod || "luchukivka",

    transTable: self.options.translateTable,

    transliterateText: function transliterate(text, transTable) {
      var outputText = '';

      var check3 = function check3(index) {
        if ((i < text.length - 2) &&
            (transTable.hasOwnProperty(text[i] + text[i+1] + text[i+2]))) {
          return true;
        }
      };

      var check2 = function check2(index) {
        if ((i < text.length - 1) &&
            (transTable.hasOwnProperty(text[i] + text[i+1]))) {
          return true;
        }
      };

      var check1 = function check1(index) {
        if (transTable.hasOwnProperty(text[index])) {
          return true;
        }
      };

      var i = 0;
      while (i < text.length) {
        if (check3(i)) {
          outputText += transTable[text[i] + text[i+1] + text[i+2]];
          i += 2;
        } else if (check2(i)) {
          outputText += transTable[text[i] + text[i+1]];
          i++;
        } else if (check1(i)) {
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
