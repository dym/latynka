var buttons = require('sdk/ui/button/action');
var data = require("sdk/self").data;
var tabs = require('sdk/tabs');

var button = buttons.ActionButton({
  id: 'latynizator',
  label: "Latynka",
  icon: {
    '16': './latynka-16.png',
    '32': './latynka-32.png',
    '64': './latynka-64.png'
  },
  onClick: handleClick
});

function handleClick(state) {
  var tab = tabs.activeTab;
  tab.attach({
    contentScript: "latynka.transliterate();",
    contentScriptFile: ['./latynka.js'],
    contentScriptOptions: {
      'translateMethod': "luchukivka",
      'translateTable': JSON.parse(data.load('./translate-table.json'))
    },
  });
}
