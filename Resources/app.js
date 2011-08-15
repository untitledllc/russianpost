// namespace
//var A2B = {};

// include helper functions
//Ti.include('utils.js');
Ti.include('config.js');
Titanium.UI.setBackgroundColor('#000');
// Ti.Geolocation.purpose = "Receive User Location";
//
// // vars
// A2B.mapview = null;
// A2B.streetLabel = null
// A2B.cityCountryLabel = null;
// A2B.tableView = null;
// A2B.checkInArray = [];
//
// // create window
// A2B.win = Ti.UI.createWindow({
// backgroundColor:'#fff'
// });
//
// // setup view and check into current location
// A2B.createView();
// A2B.checkIn();
//
// // retrieve all past checkins
// A2B.getCheckIns();
//
// // open window
// A2B.win.open();

var wMain = Ti.UI.createWindow({
	//barImage: 'images/top_bar_free.jpg',
	backgroundImage: 'iphone/Default.png'
});

//wMain.cityid = '1';

// declare global vars
var tabGroupWindows = {
	navtop: [],
	navbottom: []
};

var tabgroup = new Class_Tabgroup({
	tabgroup: {
		width: sc(480),
		top: sc(50),
		bottom: sc(0),

	},
	bar: {
		width: sc(480),
		height: sc(70),
		bottom: sc(0),
		//backgroundImage: 'images/tabbar-new-back.jpg',
		backgroundColor:'#77adf8',
		opacity: 0.7
	},
	content: {
		width: sc(480),
		//top: sc(63),
		bottom: sc(70)
	}
}, null, 'search', 'navbottom');

tabgroup.addTab({
	o: {
		name: 'search',
		on: 'images/tab1_click.png',
		off: 'images/tab1.png'
	},
	left: sc(0),
	top: sc(0),
	width: sc(160),
	height: sc(70),
	canScale: true,
	enableZoomControls: false
});
tabgroup.addTab({
	o: {
		name: 'tracking',
		on: 'images/tab2_click.png',
		off: 'images/tab2.png'
	},
	left: sc(160),
	top: sc(0),
	width: sc(160),
	height: sc(70),
	canScale: true,
	enableZoomControls: false,
	//zindex: 15
});
tabgroup.addTab({
	o: {
		name: 'help',
		on: 'images/tab3_click.png',
		off: 'images/tab3.png'
	},
	left: sc(321),
	top: sc(0),
	width: sc(160),
	height: sc(70),
	canScale: true,
	enableZoomControls: false
});

//tabgroup.create();

function openApp() {
	setTimeout( function() {
		wMain.open({
			transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
		});
		tabgroup.create();
		wMain.add(tabgroup.tabgroup);
		wMain.backgroundImage = '';
	}, 2300);
	//setTimeout(function(){

	// wMain.open({
	// //	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
	// });
	// var options = {
	// contentURL:'images/Splash-anime.mp4',
	// //backgroundColor:'#111',
	// scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL,
	// movieControlMode: Titanium.Media.VIDEO_CONTROL_NONE,
	// mediaControlStyle: Titanium.Media.VIDEO_CONTROL_EMBEDDED
	// };
	// var activeMovie = Titanium.Media.createVideoPlayer(options);
	// wMain.add(activeMovie);
	// setTimeout( function() {
	// activeMovie.hide();
	// wMain.backgroundImage='';
	// tabgroup.create();
	// wMain.add(tabgroup.tabgroup);
	// tabgroup.setActive('search.js');
	// }, 2100);
}

openApp();