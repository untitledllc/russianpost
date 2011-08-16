var win = Ti.UI.currentWindow;
win.backgroundImage = 'images/main_fon.jpg';

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
	// shadowColor:'#151f12',
	// shadowOffset: {
	// x:1,
	// y:1
	// },
	text: 'По индексу'
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
	text: 'Введите индекс:'
});

zmei.add(labelzmei);
win.add(zmei);

var indexfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 150,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: '',
	autocorrect: false
});

win.add(indexfield);

var searchbut = Titanium.UI.createButton({
	borderRadius: 3,
	top: 210,
	height:37,
	width: 175,
	backgroundImage: 'images/search_button.png',
	backgroundSelectedImage: 'images/search_button_click.png'
});

searchbut.addEventListener('click', function(e) {
	var winadrs = Titanium.UI.createWindow(win.o.content);
	winadrs.url = 'postinfo.js';
	winadrs.o = win.o;
	winadrs.open();
});
win.add(searchbut);