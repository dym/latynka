var data = require("sdk/self").data;
var table = JSON.parse(data.load('../data/translate-table.json'));

exports["test translate-table hajevycja"] = function(assert) {
  assert.ok("hajevycja" in table, "Hajevycja loaded");
};

exports["test translate-table jirechekivka"] = function(assert) {
  assert.ok("jirechekivka" in table, "Jirechekivka loaded");
};

exports["test translate-table lahodivka"] = function(assert) {
  assert.ok("lahodivka" in table, "Lahodivka loaded");
};

exports["test translate-table luchukivka"] = function(assert) {
  assert.ok("luchukivka" in table, "Luchukivka loaded");
};

require("sdk/test").run(exports);
