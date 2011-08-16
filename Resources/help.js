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
	text: 'Поиск индекса'
});

// associate label to title
viewTitle.add(titleLabel);
navbar.add(viewTitle);


var nearbut = Titanium.UI.createButton({
	borderRadius: 3,
	top: 140,
	height:40,
	width: 261,
	backgroundImage: 'images/nearest.png',
	backgroundSelectedImage: 'images/nearest_click.png'
});


nearbut.addEventListener('click', function(e) {
	var winnear = Titanium.UI.createWindow(win.o.content);
	winnear.url = 'nearest.js';
	winnear.o = win.o;
	winnear.open();
});

win.add(nearbut);

//----------------------------------------
var zmei = Ti.UI.createView({
	height: 76,
	width: 300,
	top: 42,
	backgroundImage: 'images/zmeika.png'
});

win.add(zmei);


var labelzmei = Ti.UI.createLabel({
	color:'#0c224d',
	height: 'auto',
	width:'auto',
	top: 43,
	textAlign:'center',
	font: {
		fontSize:20
	},
	text: 'Выберите тип поиска:'
});

zmei.add(labelzmei);

var addressbut = Titanium.UI.createButton({
	borderRadius: 3,
	top: 188,
	height:40,
	//width: '88%',
	width: 261,
	backgroundImage: 'images/addresss.png',
	backgroundSelectedImage: 'images/addresss_click.png'
});


addressbut.addEventListener('click', function(e) {
	var winadrs = Titanium.UI.createWindow(win.o.content);
	winadrs.url = 'adrsindex.js';
	winadrs.o = win.o;
	winadrs.open();
});

win.add(addressbut);