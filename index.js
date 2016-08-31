function theBeatlesPlay(musicians, instruments) {
  var myArray = []
  for (var i = 0; i < musicians.length; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
}

function johnLennonFacts(facts) {
  var j = 0
  while (j < facts.length) {
    facts[j] = facts[j] + "!!!"
    j++
  }
  return facts
}

function iLoveTheBeatles(number) {
  var my_array2 = []
  var k = 0
  do {
    my_array2.push("I love the Beatles!")
    k++
  }
  while (k <= number && number < 17)
  return my_array2
}
