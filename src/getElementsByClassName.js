

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  
  var results = [];
  var currentNode = document.body;

  //The recusive function. 
  var childChecker = function(node){

  	//If the node has children then...
    if(node.classList != undefined){
      if(node.classList.contains(className)){
        results.push(node)
      }
    }

    //This is the recusive part. It will go through and recall childChecker
    //for each child node, but only if a child node exists. 
    //This will still run even if the node that is being recused was added to results
    for(var i=0; i<node.childNodes.length ; i++){
      childChecker(node.childNodes[i])
    }
  }

  //This "starts" the recursive function. 
  childChecker(currentNode)
  
  return results; 
};
