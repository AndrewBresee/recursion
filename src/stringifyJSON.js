// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var newString = ""; 

    	if(obj.constructor === Array){
    		newString += "["
    		for(var i = 0; i<obj.length; i++){
    			newString += stringifyJSON(obj[i]) + ","; 
    		}
    		newString = newString.slice(0, -1);
    		newString += "]"; 

    	} else if(obj.constructor === Object){
    		newString += "{";
    		for(var key in obj){
    			newString += key
    			newString += ":"
    			newString += stringifyJSON(obj[key]) + ",";
    		}
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

