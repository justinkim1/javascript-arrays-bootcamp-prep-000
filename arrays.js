var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
function addElementToBeginningOfArray(array, element){
  array = [element,...array];
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element){
  array = [...array, element];
  return array
}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array
}
function accessElementInArray(array, index){
  array = [1, 2, 3];
  return array[2];
  
}
function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element)
  return array
}
function removeElementFromBeginningOfArray(array, element){
  array.slice(0)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, element){
  array = [1, 2 , 3, 4]
  array.shift(-1)
  return array
}
function removeElementFromEndOfArray(){
  array = [1, 2 , 3, 4]
  array.slice(-1)
  return array
}
