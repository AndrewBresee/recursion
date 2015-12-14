// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	var newString = ""; 

    if(obj === undefined){ 
        return newString; 
    } else if (obj === null){
        newString += "null";
        return newString;
    }

    if(obj.constructor === Array){
		newString += "["
		for(var i = 0; i<obj.length; i++){
			//the + "," adds between each element. [123] --> [1,2,3,]
			newString += stringifyJSON(obj[i]) + ","; 
		}

		//Removes the "," at the end of a list, so [1,2,3,] --> [1,2,3]
        if(newString != "["){
            newString = newString.slice(0, -1);
        }
		newString += "]"; 
	} else if(obj.constructor === Object){
		newString += "{";
		for(var key in obj){
			//the + "," adds between each element. {key:valuekey:vale} --> {key:value, key:vale,}
            if(typeof obj[key] != 'function' && typeof obj[key] != 'undefined' && obj[key] != "undefined"){
                newString += "\""+key+"\"";
                newString += ":"; 
                newString += stringifyJSON(obj[key]) + ",";
            } 
		}

		//Removes the "," at the end of a list, so {1:2, 3:4,} --> {1:2, 3:4}
        if(newString != "{"){
            newString = newString.slice(0, -1);
        }
		newString += "}"; 


	} else {
		var type = (typeof obj);
		if(type != "undefined" || type != "function" || type != "symbol"|| type != null){
            console.log("Inside Test: "+obj)
            if(type === 'number' || type === 'boolean'){
                newString += obj; 
            } else {
                newString += "\""+obj+"\""; 
            }
		} else {
			newString += "null"
		}
		return newString;
	}
    return newString; 
};

