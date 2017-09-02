var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

var nerds = "nerds"

function addElementToBeginningOfArray(chocolateBars, nerds) {
  return [nerds, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, nerds) {
  chocolateBars.unshift(nerds)
  return chocolateBars
}

function addElementToEndOfArray(chocolateBars, nerds) {
  return [...chocolateBars, nerds]
}

function destructivelyAddElementToEndOfArray(chocolateBars, nerds) {
    chocolateBars.push(nerds)
    return chocolateBars
}

function accessElementInArray(chocolateBars, 0) {
  return chocolateBars[0]
}
