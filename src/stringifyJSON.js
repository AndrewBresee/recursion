// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
    	var newString = ""; 
   
    	if(obj.constructor === Array){
    		newString += "["
    		for(var i = 0; i<obj.length; i++){
    			newString += string(obj[i])
    		}

    		newString = newString.slice(0, -1);
    		newString += "]"
    		newString += ","

    	} else if(obj.constructor === Object){
    		newString += "{";
    		for(var key in obj){
    			objIndex += 1;

    			newString += key
    			newString += ":"
    			newString += string(obj[key]);
    		}
    		newString = newString.slice(0, -1);
    		newString += "}"
    		newString += ","
    		
    	} else {
    		var type = (typeof obj);
    		if(type != "undefined" || type != "boolean" || type != "function" || type != "symbol"){
    			newString += obj; 
    			newString += ","; 
    		} else {
    			newString += "null"
    		}
    		return newString;
    }
};

    return newString; 
};

