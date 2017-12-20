var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  var myArray = [element,...array];
  return myArray
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  [...myArray, 'foo'];
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  myArray.push(element);
  return array
}
function accessElementInArray(array, index){
  myArray = [1];
  return array[0];
  
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.shift(1)
  return array
}
function removeElementFromBeginningOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  myArray = [1, 2 , 3, 4]
  myArray.shift(-1)
  return array
}
function removeElementFromEndOfArray(){
  myArray = [1, 2 , 3, 4]
  myArray.slice(-1)
  return array
}
