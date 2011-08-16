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
	text: 'Ближайшее'
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
var bmap = Titanium.UI.createButton({
	height:35,
	width: 73,
	right: 5,
	backgroundImage:'images/map_button.png',
	backgroundSelectedImage: 'images/map_button_click.png'
});

// close_button listener
bmap.addEventListener('click', function() {
	var winmap = Titanium.UI.createWindow(win.o.content);
	winmap.url = 'map.js';
	winmap.o = win.o;
	winmap.open();
});
navbar.add(bmap);

// label options
var labcatoptions3 = {
	shadowOffset: {
		x:1,
		y:1
	},
	shadowColor: '#a0b991',
	textAlign:'right',
	top:3,
	right:20,
	width: 'auto',
	height:'auto',
	color: '#323e32',
	font: {
		fontSize:14
	}
};

var data = [{
	title:'Варшавское шоссе, д. 37',
	header:'До 1км',
	name: 'Москва 127',
	m: '300м',
	index: '117127',
	tel: '8 (499) 782-24-32',
	latitude: 55.689125,
	longitude: 37.623410,
	times: 'пн-пт. с 9 до 18, сб. c 10 до 17',
	hasChild: true
},{
	title:'Варшавское шоссе д.18 к.2',
	index: '117105',
	name: 'Москва 105',
	latitude: 55.691337,
	longitude: 37.620229,
	tel: '8 (495) 954-85-71',
	times: 'пн-пт. с 9 до 18, сб. c 10 до 17',
	hasChild: true
},{
	title:'Севастопольский пр. д.11 к.1',
	index: '117152',
	name: 'Москва 152',
	tel: '8 (499) 123-80-00',
	latitude: 55.690558,
	longitude: 37.607145,
	times: 'пн-пт. с 9 до 18, сб. c 10 до 17',
	m: '4,2км',
	hasChild: true
},{
	title:'ул. Всякая, д.1 корп.3',
	m: '420м',
	hasChild: true
},{
	title:'ул. Разная, д.2',
	m: '705м',
	hasChild: true
},{
	title:'ул. Местная, д.6',
	header:'До 3км',
	m: '1,1км',
	hasChild: true
},{
	title:'ул. Соседняя, д.13',
	m: '1,7км',
	hasChild: true
},{
	title:'пер. Незаметный, д.2',
	m: '2,8м',
	hasChild: true
},{
	title:'ул. Непроходимая, д.66',
	header:'До 5км',
	m: '3км',
	hasChild: true
}
];

//var data = [];

// for (var i=0;i<datarow.length;i++) {
// // create rows in the table and fill data for the next window
// var rowscategory = Ti.UI.createTableViewRow({
// hasChild: true,
// title: datarow[i].text
// });
//
// var mlabel = Ti.UI.createLabel(labcatoptions3);
// mlabel.text = datarow[i].m;
// rowscategory.add(mlabel);
//
// data[i] = rowscategory;
// };
var search = Titanium.UI.createSearchBar({
	showCancel:false
});
var footerView = Ti.UI.createView({
	height: 2
});

// create table view
var tableview = Titanium.UI.createTableView({
	data:data,
	top: 43,
	//search:search,
	footerView: footerView,
	filterAttribute:'title'
});

// create table view event listener
tableview.addEventListener('click', function(e) {
	// event data
	var index = e.index;
	var section = e.section;
	var row = e.row;
	var rowdata = e.rowData;
	winm = Ti.UI.createWindow(win.o.content);
	winm.url = 'postinfo.js';
	winm.o = win.o;
	winm.ttl = e.rowData.title;
    winm.index = e.rowData.index;
    winm.tel = e.rowData.tel;
    winm.latitude = e.rowData.latitude;
    winm.times = e.rowData.times; 
    winm.longitude = e.rowData.longitude;
    winm.name = e.rowData.name;
	winm.open();

});
// add table view to the window
win.add(tableview);