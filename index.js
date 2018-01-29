// Code your solution in this file
function findMatching(arr, str){
  return arr.filter(function(item){
    return item.toLowerCase() === str.toLowerCase()
  })
}

function fuzzyMatch(arr, str){
  return arr.filter(function(item){
    return item.startsWith(str)
  })
}

function matchName(arr, str){
  return arr.filter(function(item){
    return item.name === str
  })
}
