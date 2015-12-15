

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var results = [];
  var currentNode = document.body;

  var childChecker = function(node){
    if(node.classList != undefined){
      if(node.classList.contains(className)){
        results.push(node)
      }
    }

    //this is the recusive part here. It will go through and recall childChecker
    //for each child node, but only if a child node exists. 
    //This will still run even if the node that is being recused was added to results
    for(var i=0; i<node.childNodes.length ; i++){
      childChecker(node.childNodes[i])
    }
  }

  childChecker(currentNode)
  
  return results; 
};
