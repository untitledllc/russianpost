var platform = Titanium.Platform.osname == 'android' ? 'android' : 'iphone';

Titanium.include('functions.js');

if (platform == 'android') {
	Titanium.include('class_tabgroup_android.js');
} else 

if (platform == 'iphone') {
	Titanium.include('class_tabgroup_idevice.js');	
}

//Titanium.include('class_tabgroup_android.js');

var screen = {

	w: 478,
	h: 972,
	wf: 157,
	hf: 157

};

var pDensity = Titanium.Platform.displayCaps.density;
var pDpi = Titanium.Platform.displayCaps.dpi;
var pWidth = Titanium.Platform.displayCaps.platformWidth;
var pHeight = Titanium.Platform.displayCaps.platformHeight;

var sBase = {

	width: 480,
	height: 854

};

/*
Ti.API.log('Density: ' + Titanium.Platform.displayCaps.density);
Ti.API.log('DPI: ' + Titanium.Platform.displayCaps.dpi);
Ti.API.log('Width: ' + Titanium.Platform.displayCaps.platformWidth);
Ti.API.log('Height: ' + Titanium.Platform.displayCaps.platformHeight);
*/