function receivesAFunction(callback){
   return callback()
}

function returnsANamedFunction() {
 
    let trythis = function somefunction(pram){
        return pram
    }
 function anotherFunction(){
     return trythis
 }
 return anotherFunction
}

function returnsAnAnonymousFunction () {
    
      return function(){
          return () => {
              return 3
          }
      }
}
