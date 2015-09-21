var data = require("sdk/self").data;
var table = JSON.parse(data.load('../data/translate-table.json'));

var transliterateText = function transliterate(text, transTable) {
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
};

var curTable = {};

exports["test translate-table hajevycja"] = function(assert) {
  assert.ok("hajevycja" in table, "Hajevycja loaded");
  curTable = table["hajevycja"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuljturni");
  assert.equal(transliterateText("для осмислення всього цього", curTable),
               "dlja osmyslennja vsjoho cjoho");
  assert.equal(transliterateText("м'ясо", curTable), "m'jaso");
};

exports["test translate-table jirechekivka"] = function(assert) {
  assert.ok("jirechekivka" in table, "Jirechekivka loaded");
  curTable = table["jirechekivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("для осмислення всього цього", curTable),
               "dlia osmyslennia vsioho cioho");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

exports["test translate-table lahodivka"] = function(assert) {
  assert.ok("lahodivka" in table, "Lahodivka loaded");
  curTable = table["lahodivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("для осмислення всього цього", curTable),
               "dľa osmyslenńa vśoho ćoho");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

exports["test translate-table luchukivka"] = function(assert) {
  assert.ok("luchukivka" in table, "Luchukivka loaded");
  curTable = table["luchukivka"];
  assert.equal(transliterateText("", curTable), "");
  assert.equal(transliterateText("землі", curTable), "zemli");
  assert.equal(transliterateText("культурні", curTable), "kuľturni");
  assert.equal(transliterateText("для осмислення всього цього", curTable),
               "dľa osmyslenńa vśoho ćoho");
  assert.equal(transliterateText("м'ясо", curTable), "mjaso");
};

require("sdk/test").run(exports);
