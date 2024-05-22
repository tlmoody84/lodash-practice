const _ = require("lodash");

function deepCloneObject (object){
    return _.deep(object)
 }
 
 function mergeObjects(objects){
     return _.merge(objects)
  }
 
  module.export = {deepCloneObject, mergeObjects}

