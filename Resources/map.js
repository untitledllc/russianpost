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
	text: 'Карта'
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
navbar.add(bcloset);

// button for close
var blist = Titanium.UI.createButton({
	height:35,
	width: 73,
	right: 5,
	backgroundImage:'images/list_button.png',
	backgroundSelectedImage: 'images/list_button_click.png'
});

// close_button listener
blist.addEventListener('click', function() {

});
navbar.add(blist);

var mapview = Titanium.Map.createView({
	mapType: Ti.Map.STANDART_TYPE,
	region: {
		//latitude:55.7743911,
		latitude:55.6943911,
		longitude:37.624634,
		latitudeDelta:0.2,
		longitudeDelta:0.2
	},
	animate:true,
	regionFit:true,
	userLocation:true,
	//	bottom: '20%',
	size: {
		height:'89.5%',
		width: '100%'
	},
	borderColor: '#d1d0cd',
	borderWidth: '2',
	zindex: 14,
	top: 43,
	//annotations:[mountainView, mountainView2]
});

win.add(mapview);

var mountainView = Ti.Map.createAnnotation({
	latitude: 55.691337,
	longitude: 37.620229,
	title:"117105",
	subtitle:'Варшавское шоссе д.18 к.2',
	image:'images/pin1.png',
	animate:true,
	//rightButton:'images/arrow.png',
	
});
mapview.addAnnotation(mountainView);
var mountainView1 = Ti.Map.createAnnotation({
	latitude: 55.690558,
	longitude: 37.607145,
	title:"117152",
	subtitle:'Севастопольский пр., 11, к. 1',
	image:'images/pin1.png',
	animate:true,
	//rightButton:'images/arrow.png',
	
});
mapview.addAnnotation(mountainView1);
var mountainView2 = Ti.Map.createAnnotation({
	latitude: 55.689125,
	longitude: 37.623410,
	title:"117127",
	subtitle:'Варшавское шоссе, 37',
	image:'images/pin1.png',
	animate:true,
	//rightButton:'images/arrow.png',
	
});
mapview.addAnnotation(mountainView2);
mapview.zoom(1);
mapview.zoom(1);
mapview.zoom(1);
mapview.zoom(1);