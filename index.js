const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let orj = collection;
      if(typeof collection[0] == "object"){
        collection.forEach((value, key, callback) => callback(value, key, collection));
        return orj;
      }/*
      else{
        collection.forEach((el, index, callback) => callback(el, index, collection));
        return orj;
      }*/
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
