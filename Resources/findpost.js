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
	text: 'Результат поиска'
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

//------------------------------------------------------------------------------------------------------------------

var datatab = [{
	oper: 'Экспорт',
	dt: '07.05.11',
	ops: 'Москва ЦМП'
},{
	oper: 'Обработка',
	dt: '12.05.11',
	ops: 'Сургут'
},{
	oper: 'Невручение',
	dt: '23.05.11',
	ops: 'Волгоград 66'
},{
	oper: 'Вручение',
	dt: '07.06.11',
	ops: 'Якутск 8'
},{
	oper: 'Экспорт',
	dt: '08.06.11',
	ops: 'Москва PCI-2'
},{
	oper: 'Экспорт',
	dt: '13.08.11',
	ops: 'Югорск'
},{
	oper: 'Вручение',
	dt: '23.08.11',
	ops: 'Страхов'
},{
	oper: 'Обработка',
	dt: '25.08.11',
	ops: 'Москва ЦМП'
}];

//-----------------------------------------------------------------------

// button for close
var bzvezda = Titanium.UI.createButton({
	height:33,
	width: 69,
	right: 5,
	top: 4,
	backgroundImage:'images/zvezda_button.png',
	backgroundSelectedImage: 'images/zvezda_button_click.png'
});

// close_button listener
bzvezda.addEventListener('click', function() {
	// var winmap = Titanium.UI.createWindow(win.o.content);
	// winmap.url = 'map.js';
	// winmap.o = win.o;
	// winmap.open();
});
navbar.add(bzvezda);

//------------------------------------------------------------------------------------------------------------------
var row1 = Ti.UI.createTableViewRow({
	hasChild: false,
	touchEnabled: false,
	selectionStyle: Ti.UI.iPhone.TableViewCellSelectionStyle.NONE,
	height: 'auto',
	width: '100%',
	//leftImage:
}); 
 
 
var labelPT1 = Ti.UI.createLabel({
	text:'Операция',
	top:12,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:14,
		//fontFamily: 'Helv-Regular'
	}
});



var cont1 = Ti.UI.createView({
	width: '30%',
	height: 43,
	top:2,
	backgroundGradient: {
		type:'linear',
		colors:[{
			color:'#c8e2fc',
			position:0.0
		},{
			color:'#99ccff',
			position:0.5
		},{
			color:'#b1d7fe',
			position:0.5
		}]
	},
	left: 0,
	//borderColor: '#c2cabe'
});
cont1.add(labelPT1);
//cont1.add(labelPV1)
row1.add(cont1);

var labelPT2 = Ti.UI.createLabel({
	text:'Дата',
	top:12,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:14,
		//fontFamily: 'MyriadPro-Regular'
	}
});



var cont2 = Ti.UI.createView({
	width: '25%',
	top: 2,
	left: '30%',
	height: 43,
	backgroundGradient: {
		type:'linear',
		colors:[{
			color:'#c8e2fc',
			position:0.0
		},{
			color:'#99ccff',
			position:0.5
		},{
			color:'#b1d7fe',
			position:0.5
		}]
	},
	//borderColor: '#c2cabe'
});

 cont2.add(labelPT2);
// cont2.add(labelPV2);
row1.add(cont2);

var labelPT3 = Ti.UI.createLabel({
	text:'ОПС',
	top:12,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:14,
		//fontFamily: 'MyriadPro-Regular'
	}
});



var cont3 = Ti.UI.createView({
	width: '45%',
	right: 0,
	top: 2,
	height: 43,
	backgroundGradient: {
		type:'linear',
		colors:[{
			color:'#c8e2fc',
			position:0.0
		},{
			color:'#99ccff',
			position:0.5
		},{
			color:'#b1d7fe',
			position:0.5
		}]
	},
	//borderColor: '#c2cabe'
});
 cont3.add(labelPT3);
// cont3.add(labelPV3);
row1.add(cont3);
//------------------------------------------------------------------------------------------------------------------

var labelPV1 = {
	bottom: 12,
	left: 7,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:13.5,
		//fontFamily: 'MyriadPro-Semibold',
	}
};

var labelPV2 = {
	left: 110,
	bottom: 12,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:13.5
	}
};

var labelPV3 = {
	right: 21,
	bottom: 12,
	width: 'auto',
	height:'auto',
	textAlign:'center',
	color: '#0c224d',
	font: {
		fontSize:13.5
	}
};


var vie = {
	backgroundImage: 'images/line_small.png',
	width: 1,
	height: 34
}

var vier = {
	backgroundImage: 'images/line_small.png',
	width: 1,
	height: 43,
	left: 96
}
var vier2 = {
	backgroundImage: 'images/line_small.png',
	width: 1,
	height: 43,
	left: 177
}

var rview = Ti.UI.createView(vier);
row1.add(rview);
	
var mview = Ti.UI.createView(vier2);
row1.add(mview);	

//------------------------------------------------------------------------------------------------------------------
   var data = [];
   
    data[0] = row1;


	var footerView = Ti.UI.createView({
		height:2
	});

for (var c=0;c<datatab.length;c++) {
   	var rowcattabl = Ti.UI.createTableViewRow({
   		hasChild: true
   	});
   	var leftlabel = Ti.UI.createLabel(labelPV1);
		leftlabel.text = datatab[c].oper;
		rowcattabl.add(leftlabel);
	
	var leftview = Ti.UI.createView(vie);
	leftview.left = '32%';
	rowcattabl.add(leftview);
	
	var midlabel = Ti.UI.createLabel(labelPV2);
		midlabel.text = datatab[c].dt;
		rowcattabl.add(midlabel);
    
    var midview = Ti.UI.createView(vie);
	midview.left = '59%';
	rowcattabl.add(midview);
	
	var rightlabel = Ti.UI.createLabel(labelPV3);
		rightlabel.text = datatab[c].ops;
		rowcattabl.add(rightlabel);		
	
	if ((c % 2) == 0){
		rowcattabl.backgroundGradient = {
		type:'linear',
		colors:[{
			color:'#fcfdfe',
			position:0.0
		},{
			color:'#d8eafc',
			position:1.0
		}]
	 }
	} else {
		rowcattabl.backgroundGradient = {
		type:'linear',
		colors:[{
			color:'#fff',
			position:0.0
		},{
			color:'#e6e6e8',
			position:1.0
		}]
	 }
	}	
   	data[c+1] = rowcattabl;
}



	var tview = Ti.UI.createTableView({
		data: data,
		top: 41,
		style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
		backgroundColor:'transparent',
		separatorStyle: Ti.UI.iPhone.TableViewSeparatorStyle.NONE,
		footerView: footerView
	});

	win.add(tview);