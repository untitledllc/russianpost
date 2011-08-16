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
		fontFamily: 'MyriadPro-It',
		fontSize:20
	},
	// shadowColor:'#151f12',
	// shadowOffset: {
		// x:1,
		// y:1
	// },
	
});

if (win.name!=null) {
	titleLabel.text = win.name;
} else {
	titleLabel.text = 'Информация'
}

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
navbar.add(bcloset);
var viewFoto = Ti.UI.createView();
if (win.index=='117127') {
	viewFoto.backgroundImage = 'images/fotoMain.jpg';
} else {
	viewFoto.backgroundImage = 'images/foto1.jpg';
}


var view1 = Ti.UI.createView({
	backgroundImage: 'images/foto.jpg'
});
var l1 = Ti.UI.createLabel({
	text:'View 1',
	color:'#fff',
	width:'auto',
	height:'auto'
});
//view1.add(l1);

var view2 = Ti.UI.createView({
	backgroundColor:'blue'
});
var l2 = Ti.UI.createLabel({
	text:'Click Me (View 2 - see log)',
	color:'#fff',
	width:'auto',
	height:'auto'
});
//view2.add(l2);

var view3 = Ti.UI.createView({
	backgroundColor:'green'
});
var l3 = Ti.UI.createLabel({
	text:'View 3',
	color:'#fff',
	width:'auto',
	height:'auto'
});
//view3.add(l3);

var view4 = Ti.UI.createView({
	backgroundColor:'black'
});
var l4 = Ti.UI.createLabel({
	text:'View 4',
	color:'#fff',
	width:'auto',
	height:'auto'
});
//view4.add(l4);

var scrollView = Titanium.UI.createScrollableView({
	views:[viewFoto,view1,view2,view3,view4],
	//showPagingControl:true,
	top: 56,
	//width: '68%',
	width: 228,
	//pagingControlHeight:30,
	maxZoomScale:2.0,
	currentPage:0,
	height: 120
});

var i=0;
var activeView = viewFoto;

// scrollView.addEventListener('scroll', function(e) {
	// activeView = e.view;  // the object handle to the view that is about to become visible
	// i = e.currentPage;
	// Titanium.API.info("scroll called - current index " + i + ' active view ' + activeView);
// });
// scrollView.addEventListener('click', function(e) {
	// Ti.API.info('ScrollView received click event, source = ' + e.source);
	// i = (scrollView.currentPage + 1) % scrollView.views.length;
	// scrollView.currentPage = i;
// });
// scrollView.addEventListener('touchend', function(e) {
	// Ti.API.info('ScrollView received touchend event, source = ' + e.source);
// });
win.add(scrollView);

var rightArrow = Ti.UI.createButton({
	backgroundImage: 'images/arrow-right.png',
	right: 13,
	height: 30,
	width: 21,
	top: 100
});
rightArrow.addEventListener('click', function(e)
{
	if (i === (scrollView.views.length-1)){ return; }
	i++;
	scrollView.scrollToView(scrollView.views[i]);
});
win.add(rightArrow);

var leftArrow = Ti.UI.createButton({
	backgroundImage: 'images/arrow-left.png',
	left: 13,
	height: 31,
	width: 21,
	top: 100
});
leftArrow.addEventListener('click', function(e)
{
	if (i === 0){ return; }
	i--;
	scrollView.scrollToView(i);
});
win.add(leftArrow);

var viewReiting = Ti.UI.createView({
	top: 183,
	height: 35,
	width: '100%',
	//backgroundColor: 'yellow'
});

win.add(viewReiting);

var reiting = Ti.UI.createLabel({
	textAlign:'left',
	left: 50,
	font: {
		fontSize:14.5,
		fontWeight: 'bold'
	},
	wordWrap: false,
	color: '#a9abae',
	text: 'Рейтинг отделения',
	bottom: 5
});

var stars = Ti.UI.createView({
	top: 5,
	backgroundImage: 'images/stars.png',
	width: 80,
	height: 29,
	right: 43
});

viewReiting.add(reiting);
viewReiting.add(stars);

var viewAdrs = Ti.UI.createView({
	top: 220,
	height: '41%',
	width: '95%',
	backgroundColor: '#fff',
	borderColor: '#cfd0ce',
	borderRadius: 7
});

win.add(viewAdrs);

// label options for the name
var lablelcatoptions1 = {
	textAlign:'left',
	left: 15,
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
	
	font: {
		fontSize:12.5
	},
	wordWrap: true,
	color: '#000'
};

var lab1 = Ti.UI.createLabel(lablelcatoptions1);
lab1.text = 'Адрес:';
lab1.bottom = 110;
viewAdrs.add(lab1);

if (win.ttl != null){
var labAdrs = Ti.UI.createLabel(lablelcatoptions2);
labAdrs.text = 'г. Москва ' + win.ttl;
labAdrs.bottom = 110;
labAdrs.left = 65,
viewAdrs.add(labAdrs);
}

var lab2 = Ti.UI.createLabel(lablelcatoptions1);
lab2.text = 'Часы работы:';
lab2.bottom = 50;
viewAdrs.add(lab2);

var labTime = Ti.UI.createLabel(lablelcatoptions2);
labTime.text = win.times;
labTime.bottom = 50;
labTime.left = 109;
viewAdrs.add(labTime);


var lab3 = Ti.UI.createLabel(lablelcatoptions1);
lab3.text = 'Индекс:';
lab3.bottom = -20;
viewAdrs.add(lab3);

var labInd = Ti.UI.createLabel(lablelcatoptions2);
labInd.text = win.index;
labInd.bottom = -20;
labInd.left = 70;
viewAdrs.add(labInd);

var lab4 = Ti.UI.createLabel(lablelcatoptions1);
lab4.text = 'Телефон:';
lab4.bottom = -90;
viewAdrs.add(lab4);

var labTel = Ti.UI.createLabel(lablelcatoptions2);
labTel.text = win.tel;
labTel.bottom = -90;
labTel.left = 80;
viewAdrs.add(labTel);


var bmap = Titanium.UI.createButton({
	height:35,
	width: 73,
	right: 5,
	backgroundImage:'images/map_button.png',
	backgroundSelectedImage: 'images/map_button_click.png',
	bottom: 7
});

// close_button listener
bmap.addEventListener('click', function() {
	var winmap = Titanium.UI.createWindow(win.o.content);
	winmap.url = 'mapsingle.js';
	winmap.o = win.o;
	winmap.latitude = win.latitude;
	winmap.longitude = win.longitude;
	winmap.ttl = win.ttl;
	winmap.index = win.index;
	winmap.open();
});
viewAdrs.add(bmap);