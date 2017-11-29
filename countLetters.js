


function countLetters(strings) {
  //var strings = strings.split("");
  // 1. Initialize a return value
  var array = {};
  // 2. Loop over the input
  for (var i = 0; i < strings.length; i++) {
    var string = strings[i];
    if (string !== ' ') {
      // Don't worry about it
      if (array[strings[i]] === undefined) {
        array[strings[i]] = 0;
      }
      // 3. Inside the loop, modify the return value
      array[strings[i]] += 1;
    }
  }
  // 4. Return the return value
  return array;
}


console.log(countLetters('this is my string lighthouse labs'));