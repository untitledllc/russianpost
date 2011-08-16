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
	text: 'Ваш индекс'
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
	win.close();
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
	text: '117127'
});

zmei.add(labelzmei);
win.add(zmei);

var lablelcatoptions2 = {
	textAlign:'center',
	//left: 20,
	font: {
		fontSize:13.5
	},
	wordWrap: true,
	color: '#0c224d'
};

var lab1 = Ti.UI.createLabel(lablelcatoptions2);
lab1.text = 'Это индекс ближайшего объекта.';
lab1.bottom = 100;
win.add(lab1);
var lab2 = Ti.UI.createLabel(lablelcatoptions2);
lab2.text = 'Вы можете посмотреть индексы других расположенных рядом объектов.';
lab2.bottom = 45;
win.add(lab2);

var searchbut = Titanium.UI.createButton({
	borderRadius: 3,
	top: 240,
	height:40,
	width: 210,
	backgroundImage: 'images/Btn_show_nearest_norm.png',
	backgroundSelectedImage: 'images/Btn_show_nearest_press.png'
});

searchbut.addEventListener('click', function(e) {
	var winadrs = Titanium.UI.createWindow(win.o.content);
	winadrs.url = 'map.js';
	winadrs.o = win.o;
	winadrs.open();
});
win.add(searchbut);