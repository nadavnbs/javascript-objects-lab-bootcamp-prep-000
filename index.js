var recipes = {prop:1}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  var newRecipes = Object.assign({}, object)
  delete newRecipes.key
  return newRecipes
}


