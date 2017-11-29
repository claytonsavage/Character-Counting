function indexLetters(strings) {

  var object = {};
  for (var i = 0; i < strings.length; i++) {

    var string = strings[i];
    if (string === ' ') {
      continue;
    }

    if (object[string] === undefined) {
      object[string] = [];
    }
    object[string].push(i);
  }
  return object;
}

console.log(indexLetters('this is a test'));