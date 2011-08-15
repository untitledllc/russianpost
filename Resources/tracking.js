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
	// shadowColor:'#151f12',
	// shadowOffset: {
		// x:1,
		// y:1
	// },
	text: 'Отслеживание'
});

// associate label to title
viewTitle.add(titleLabel);
navbar.add(viewTitle);

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
	top: 44,
	textAlign:'center',
	font: {
		fontSize:14
	},
	text: 'Введите почтовый идентификатор:'
});

zmei.add(labelzmei);
win.add(zmei);

// // button for close
// var bcloset = Titanium.UI.createButton({
// height:39,
// width: 63,
// left: 5,
// backgroundImage:'images/top_button_back.png'
// });
//
// // close_button listener
// bcloset.addEventListener('click', function() {
// // Ti.App.fireEvent('closebc', {
// // butclose : 't'
// // });
// // Ti.App.fireEvent('closebcd', {
// // butclose : 't'
// // });
// // setTimeout( function() {
// win.close();
// //}, 300);
// });
//
// navbar.add(bcloset);

var indexfield  = Titanium.UI.createTextField({
	color:'#797979',
	height:35,
	width: 270,
	top: 152,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType:Titanium.UI.KEYBOARD_NUMBERS_PUNCTUATION,
	//returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	hintText: '12345678',
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
	// var winnear = Titanium.UI.createWindow(win.o.content);
	// winnear.url = 'searchbut.js';
	// winnear.o = win.o;
	// winnear.open();
});
win.add(searchbut);

var vopros = Ti.UI.createButton({
	left: 10,
	bottom: 107,
	height: 35,
	width: 48,
	backgroundImage: 'images/info_button_click.png',
	backgroundSelectedImage: 'images/info_button.png'
});

win.add(vopros);

var viewLab = Ti.UI.createView({
	left: 70,
	width: '74%',
	height: '33%',
	//backgroundColor: 'yellow',
	bottom: 10
});

// label options for the name
var lablelcatoptions1 = {
	textAlign:'left',
	left: 2,
	font: {
		fontSize:13,
		fontWeight: 'bold'
	},
	wordWrap: false,
	color: '#0c224d'
};

// label options for the name
var lablelcatoptions2 = {
	textAlign:'left',
	left: 2,
	font: {
		fontSize:13
	},
	wordWrap: true,
	color: '#0c224d'
};

var lab1 = Ti.UI.createLabel(lablelcatoptions1);
lab1.text = 'Почтовый идентификатор';
lab1.bottom = 115;

var lab2 = Ti.UI.createLabel(lablelcatoptions2);
lab2.text = 'находится в чеке, выдаваемом при приеме почтового отделения';
lab2.bottom = 65;

var lab3 = Ti.UI.createLabel(lablelcatoptions1);
lab3.text = 'Вид номера:';
lab3.bottom = 0;

var lab4 = Ti.UI.createLabel(lablelcatoptions2);
lab4.text = '115127(80)15138 5';
lab4.bottom = 0;
lab4.left = 90;

var lab5 = Ti.UI.createLabel(lablelcatoptions1);
lab5.text = 'Следует вводить:';
lab5.bottom = -45;

var lab6 = Ti.UI.createLabel(lablelcatoptions2);
lab6.text = '11512780151385';
lab6.bottom = -45;
lab6.left = 126;

var lab7 = Ti.UI.createLabel(lablelcatoptions2);
lab7.text = '(весь номер без скобок и пробелов)';
lab7.bottom = -75;

viewLab.add(lab1);
viewLab.add(lab2);
viewLab.add(lab3);
viewLab.add(lab4);
viewLab.add(lab5);
viewLab.add(lab6);
viewLab.add(lab7);
win.add(viewLab);

