// Correct the syntax error
var array = [1, 7, 9, 45];
var array2 = ["Str", "alex", "moh", 'the', 'fox', 'over', "lazy", 'dog'];

/*
2
index of "Banana": 1
index of "Tomato": 0
*/


/*
3
any array have 5 elemnts
any array have 3 elemnts
any array have 4 elemnts
*/


/*
4
*/
function firstOfArray(array) {
  return array[0];
}


//5
function lastOfArray(array) {
  return array[array.length - 1];
}


//6
// try push and shift


//7
//push and unshift return the new leength of the array
//pop and shift return the elemnt that removed


//8
function middleOfArray(array) {
  var length = array.length;
  if (length % 2 !== 0) {
    return array[(length - 1) / 2]
  }
  return (array[length / 2 - 1] + " and " + array[length / 2])
}


//9
var animals = ['cat', 'ele', 'bird']
animals[0] = 'zebra';
animals[1] = 'elephant';
animals.length = 2;

var nums = [1, 2, 3, 8, 9];
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums[5] = 44;


//10
function indexOfArray(array, element) {
  return array[element];
}


//11
function arrayExceptLast(array) {
  return array.slice(0, array.length - 1)
}


//12
function addToEnd(array, element) {
  array.push(element)
  return array
}


//13
function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}

function sumArray2(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum;
}


//14
function minInArray(array) {
  var min = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}

function minInArray2(array) {
  var min = array[0];
  var i = 1;
  while (i < array.length) {
    if (array[i] < min) {
      min = array[i];
    }
    i++;
  }
  return min;
}


//15
function removeFromArray(array, y) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === y)
      array.splice(i, 1);
  }
  return array;
}

function removeFromArray2(array, element) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === element) {
      array.splice(i, 1);
    }
    i++;
  }
  return array;
}


//16
function oddArray(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
  }
  return result;
}

function oddArray2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 1) {
      result.push(array[i]);
    }
    i++;
  }
  return result;
}


//17
function aveArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum / array.length;
}

function aveArray2(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i++;
  }
  return sum / array.length;
}


//18

function shorterInArray(array) {
  var shortest = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
  }
  return shortest;
}

function shorterInArray2(array) {
  var shortest = array[0];
  var i = 0;
  while (i < array.length) {
    if (array[i].length < shortest.length) {
      shortest = array[i];
    }
    i++;
  }
  return shortest;
}


//19
function repeatChar(str, chr) {
  var result = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === chr.toLowerCase()) {
      result++;
    }
  }
  return result;
}

function repeatChar2(str, chr) {
  var result = 0;
  var i = 0;
  while (i < str.length) {
    if (str[i].toLowerCase() === chr.toLowerCase()) {
      result++;
    }
    i++;
  }
  return result;
}


//20
function evenIndexOddLength(array) {
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    if (array[i].length % 2 === 1) {
      result.push(array[i])
    }
  }
  return arr;
}

function evenIndexOddLength2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i].length % 2 === 1) {
      result.push(array[i])
    }
    i = i + 2;
  }
  return result;
}


//21
function powerElementIndex(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = array[i] ** i;
  }
  return result;
}

function powerElementIndex2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    result[i] = array[i] ** i;
    i++;
  }
  return result;
}

//22

function evenNumberEvenIndex(array) {
  var result = [];
  for (var i = 0; i < array.length; i = i + 2) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

function evenNumberEvenIndex2(array) {
  var result = [];
  var i = 0;
  while (i < array.length) {
    if (array[i] % 2 === 0) {
      result.push(array[i]);
    }
    i = i + 2;
  }
  return result;
}