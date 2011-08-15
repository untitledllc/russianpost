var win = Ti.UI.currentWindow;
win.backgroundImage = 'images/simple_fon.png';

var navbar = Ti.UI.createView({
	width: '100%',
	height: 43,
	backgroundImage: 'images/navbar.png',
	top: 0
});
win.add(navbar);

var viewTitle = Titanium.UI.createView({
	height: 30,
	width : 200,
});

var titleLabel = Titanium.UI.createLabel({
	color:'#fff',
	height:30,
	width:170,
	//top:2,
	textAlign:'center',
	font: {
		fontSize:18,
		fontWeight: 'bold'
	},
	//shadowColor:'#151f12',
	//shadowOffset: {
	//	x:1,
	//	y:1
	//},
	text: 'По адресу'
});

// associate label to title
viewTitle.add(titleLabel);
navbar.add(viewTitle);
// button for close
var bcloset = Titanium.UI.createButton({
	height:35,
	width: 68,
	left: 5,
	backgroundImage:'images/back_button.png',
	backgroundSelectedImage: 'images/back_button_click.png'
});

// close_button listener
bcloset.addEventListener('click', function() {
	// Ti.App.fireEvent('closebc', {
	// butclose : 't'
	// });
	// Ti.App.fireEvent('closebcd', {
	// butclose : 't'
	// });
	// setTimeout( function() {
	win.close();
	//}, 300);
});
//wincat.setLeftNavButton(bcloset);
//wincat.showNavBar();
navbar.add(bcloset);

var zmei = Ti.UI.createView({
	height: 76,
	width: 300,
	top: 42,
	backgroundImage: 'images/zmeika.png'
});
var labelzmei = Ti.UI.createLabel({
	color:'#0c224d',
	height: 'auto',
	width:'auto',
	top: 43,
	textAlign:'center',
	font: {
		fontSize:20
	},
	text: 'Введите данные:'
});

zmei.add(labelzmei);
win.add(zmei);

var regionfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 139,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: 'регион',
	autocorrect: false
});
var regflag = false;
regionfield.addEventListener('change', function() {
	//if (regflag == false) {
		winm = Ti.UI.createWindow(win.o.content);
		winm.url = 'select.js';
		winm.o = win.o;
		winm.ch = regionfield.value;
		winm.open();
		regflag = true;
		
	//}
	//if ()
});
 Ti.App.addEventListener('passCity', function(event) {
	 Ti.API.info(event.passCityValue);
	 regionfield.value = event.passCityValue;
	// //event.passCityValue;	
	 regflag = true;
 });
win.add(regionfield);

var raionfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 186,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: 'район',
	autocorrect: false
});

win.add(raionfield);

var punktfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 233,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: 'населенный пункт',
	autocorrect: false
});

win.add(punktfield);

var streetfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 280,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: 'улица',
	autocorrect: false
});

win.add(streetfield);

var searchbut = Titanium.UI.createButton({
	bottom: 37,
	borderRadius: 3,
	height:37,
	width: 175,
	backgroundImage: 'images/search_button.png',
	backgroundSelectedImage: 'images/search_button_click.png'
});

searchbut.addEventListener('click', function(e) {
	// var winnear = Titanium.UI.createWindow(win.o.content);
	// winnear.url = 'searchbut.js';
	// winnear.o = win.o;
	// winnear.open();
});
win.add(searchbut);