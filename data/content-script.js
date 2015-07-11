var translateTable = {
  'А': 'A',
  'а': 'a',
  'Б': 'B',
  'б': 'b',
  'В': 'V',
  'в': 'v',
  'Г': 'H',
  'г': 'h',
  'Ґ': 'G',
  'ґ': 'g',
  'Д': 'D',
  'д': 'd',
  'Дь': 'Ď',
  'дь': 'ď',
  'Е': 'E',
  'е': 'e',
  'Є': 'Je',
  'є': 'je',
  'Ж': 'Ž',
  'ж': 'ž',
  'З': 'Z',
  'з': 'z',
  'Зь': 'Ź',
  'зь': 'ź',
  'И': 'Y',
  'и': 'y',
  'І': 'I',
  'і': 'i',
  'Ї': 'Ji',
  'ї': 'ji',
  'Й': 'J',
  'й': 'j',
  'К': 'K',
  'к': 'k',
  'Л': 'L',
  'л': 'l',
  'Ль': 'Ľ',
  'ль': 'ľ',
  'М': 'M',
  'м': 'm',
  'Н': 'N',
  'н': 'n',
  'Нь': 'Ń',
  'нь': 'ń',
  'О': 'O',
  'о': 'o',
  'П': 'P',
  'п': 'p',
  'Р': 'R',
  'р': 'r',
  'Рь': 'Ŕ',
  'рь': 'ŕ',
  'С': 'S',
  'с': 's',
  'Сь': 'Ś',
  'сь': 'ś',
  'Т': 'T',
  'т': 't',
  'Ть': 'Ť',
  'ть': 'ť',
  'У': 'U',
  'у': 'u',
  'Ф': 'F',
  'ф': 'f',
  'Х': 'X',
  'х': 'x',
  'Ц': 'C',
  'ц': 'c',
  'Ць': 'Ć',
  'ць': 'ć',
  'Ч': 'Č',
  'ч': 'č',
  'Ш': 'Š',
  'ш': 'š',
  'Щ': 'Šč',
  'щ': 'šč',
  'Ю': 'Ju',
  'ю': 'ju',
  'Я': 'Ja',
  'я': 'ja',
};

var transliterate = function transliterate(text, transTable) {
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

$('*').contents().filter(function() {
  return this.nodeType == Node.TEXT_NODE && this.nodeValue.trim() != '';
}).each(function() {
  this.nodeValue = transliterate(this.nodeValue, translateTable);
});
