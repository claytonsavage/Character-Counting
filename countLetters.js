function countLetters(strings) {
  var array = {};
  for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    if (string !== ' ') {
      if (array[strings[i]] === undefined) {
        array[strings[i]] = 0;
      }
      array[strings[i]] += 1;
    }
  }
  return array;
}

console.log(countLetters('this is my string lighthouse labs'));