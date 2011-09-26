var getTranslateParam = function(str, direction){
	var regex,
		result,
		resultArray;
	if(str && typeof str === 'string'){
		switch(direction){
			case "x":
				regex = /translate3d\((.*?)px, \-?[0-9]*px, \-?[0-9]*px\)/
				resultArray = str.match(regex);
				result = resultArray[1];
				break;
			case "y":
				regex = /translate3d\(\-?[0-9]*px, (.*?)px, \-?[0-9]*px\)/
				resultArray = str.match(regex);
				result = resultArray[1];				
				break;
			case "z":
				regex = /translate3d\(\-?[0-9]*px, \-?[0-9]*px, (.*?)px\)/
				resultArray = str.match(regex);
				result = resultArray[1];				
				break;
			default:
				regex = /translate3d\((.*?)px, (.*?)px, (.*?)px\)/
				resultArray = str.match(regex);
				result = resultArray.slice(1);
		}
		return result;
	} else {
		throw new Error('No string specified');
	}
}
