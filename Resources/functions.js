
// CUSTOM FRAMEWORK ENHANCEMENTS
function setOption(property, dVal) {
	
	return (typeof property != 'undefined' ? property : dVal);
	
}

function sc(px, orientation, element) {

	var cDivide = sBase['width'] / pWidth;
	var cHeight = sBase['height'] / pHeight;

	if (platform == 'android') {

		return px / cDivide;
	
	} else 
	
	if (platform == 'iphone') {

		var size;
		
		if (typeof orientation != 'undefined') {
		
			if (orientation == 'w') {
			
				size = px / cDivide;
			
			} else
			
			if (orientation == 'h') {
			
				size = px / cHeight;
			
			} else {
			
				size = px / cDivide;			
			
			}
		
		} else {
		
			size = px / cDivide;			
		
		}
		
		if (typeof element != 'undefined') {
		
			Ti.API.log('size of ' + element + ': ' + size);
		
		}

		return size.toFixed();

	}

}
