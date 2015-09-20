var data = require("sdk/self").data;
var table = JSON.parse(data.load('../data/translate-table.json'));

var transliterateText = function transliterate(text, transTable) {
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
};

var curTable = {};

exports["test translate-table hajevycja"] = function(assert) {
  assert.ok("hajevycja" in table, "Hajevycja loaded");
  curTable = table["hajevycja"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuljturni");
  assert.equal(transliterateText("м'ясо", curTable), "m'jaso");
};

exports["test translate-table jirechekivka"] = function(assert) {
  assert.ok("jirechekivka" in table, "Jirechekivka loaded");
  curTable = table["jirechekivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("для осмислення всього цього", curTable),
               "dlia osmyslennia vśoho ćoho");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

exports["test translate-table lahodivka"] = function(assert) {
  assert.ok("lahodivka" in table, "Lahodivka loaded");
  curTable = table["lahodivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

exports["test translate-table luchukivka"] = function(assert) {
  assert.ok("luchukivka" in table, "Luchukivka loaded");
  curTable = table["luchukivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

require("sdk/test").run(exports);
