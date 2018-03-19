var recipes = {prop:1}
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign({},object,{[key]:value})
  return object
}

