var latynka = (function() {

  return {

    transMethod: self.options.translateMethod || "luchukivka",
    transTable: self.options.translateTable,

    transliterate: function transliterate() {
      var treeWalker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_ELEMENT,
        { acceptNode: function(node) { return NodeFilter.FILTER_ACCEPT; } },
        false
      );
      var node;

      while(treeWalker.nextNode()) {
        node = treeWalker.currentNode;
        for (var j=0; j < node.childNodes.length; j++) {
          childNode = node.childNodes[j];
          if (childNode.nodeType == Node.TEXT_NODE && childNode.nodeValue.trim() != '') {
            childNode.nodeValue = module.exports.transliterateText(childNode.nodeValue, this.transTable[this.transMethod]);
          }
        }
      }

    }

  };

})();
