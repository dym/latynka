var buttons = require('sdk/ui/button/action');
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
  console.log(tabs.activeTab.url);
  var tab = tabs.activeTab;
  tab.attach({
    contentScriptFile: ['./content-script.js']
  });
}
