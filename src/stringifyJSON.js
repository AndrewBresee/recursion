// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:


var stringifyJSON = function(obj) {
	var newString = ""; 


    //this is nore important when the value from the object is passed  in. 
    //if the value is undefined, it will return the string, and not return 
    //the key value pair. 
    if(obj === undefined){ 
        return newString; 
    } else if (obj === null){
        newString += "null";
        return newString;
    }



    if(obj.constructor === Array){
		newString += "["

		for(var i = 0; i<obj.length; i++){
			//the (+ ",") adds between each element. [123] --> [1,2,3,]
			newString += stringifyJSON(obj[i]) + ","; 
		}

		//Removes the "," at the end of a list, so [1,2,3,] --> [1,2,3]
        //Unless the array is empty. Then it will not remove the last item, which would be "["
        if(newString != "["){
            newString = newString.slice(0, -1);
        }
		newString += "]"; 



	} else if(obj.constructor === Object){
		newString += "{";

		for(var key in obj){
			//the + "," adds between each element. {key:valuekey:vale} --> {key:value, key:vale,}
            //Probably can refactor this because it happens in the next case as well
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

