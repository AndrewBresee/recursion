// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var newString = ""; 

    	if(obj.constructor === Array){
    		newString += "["
    		for(var i = 0; i<obj.length; i++){
    			//the + "," adds between each element. [123] --> [1,2,3,]
    			newString += stringifyJSON(obj[i]) + ","; 
    		}

    		//Removes the "," at the end of a list, so [1,2,3,] --> [1,2,3]
    		newString = newString.slice(0, -1);
    		newString += "]"; 
    	} else if(obj.constructor === Object){
    		newString += "{";
    		for(var key in obj){
    			newString += key
    			newString += ":"
    			//the + "," adds between each element. {key:valuekey:vale} --> {key:value, key:vale,}
    			newString += stringifyJSON(obj[key]) + ",";
    		}

    		//Removes the "," at the end of a list, so {1:2, 3:4,} --> {1:2, 3:4}
    		newString = newString.slice(0, -1);
    		newString += "}"; 
    	} else {
    		var type = (typeof obj);
    		if(type != "undefined" || type != "boolean" || type != "function" || type != "symbol"){
    			newString += obj; 
    		} else {
    			newString += "null"
    		}
    		return newString;
    	}

    return newString; 
};

