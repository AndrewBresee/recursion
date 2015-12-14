

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var results = [];
  var currentNode = document.body;

  var childChecker = function(node){
    console.log("class Names Test: " + node.classList)

    if(node.classList != undefined){
      if(node.classList.contains(className)){
        results.push(node)
      }
    }


    for(var i=0; i<node.childNodes.length ; i++){
      childChecker(node.childNodes[i])
    }

  }

  childChecker(currentNode)
  
  return results; 
};
