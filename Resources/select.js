var win = Ti.UI.currentWindow;
win.backgroundImage = 'images/simple_fon.png';
var ch = win.ch;

dataRegion = [
{title:'Амурская область', header:'А'},
	{title:'Архангельская область'},
	{title:'Астраханская область'},
	{title:'Белгородская область', header:'Б'},
	{title:'Брянская область'},
	{title:'Владимирская область', header:'В'},
	{title:'Волгоградская область'},
	{title:'Вологодская область'},
	{title:'Воронежская область'},
	{title:'Ивановская область', header:'И'},
	{title:'Иркутская область'},
	{title:'Калиниградская область', header:'К'},
	{title:'Калужская область'},
	{title:'Камчатская область'},
	{title:'Кемеровская область'},
	{title:'Кировская область'},
	{title:'Костромская область'},
	{title:'Костромская область'},
	{title:'Курганская область'},
	{title:'Курская область'},
	{title:'Ленинградская область', header:'Л'},
	{title:'Липецкая область'},
	{title:'Магаданская область', header:'М'},
	{title:'Московская область'},
	{title:'Мурманская область'},
	{title:'Нижегородская область', header:'Н'},
	{title:'Новгородская область'},
	{title:'Новосибирская область'},
	{title:'Омская область', header:'О'},
	{title:'Оренбургская область'},
	{title:'Орловская область'},
	{title:'Пензенская область', header:'П'},
	{title:'Пермская область'},
	{title:'Псковская область'},
	{title:'Ростовская область', header:'Р'},
	{title:'Рязанская область'},
	{title:'Самарская область', header:'С'},
	{title:'Саратовская область'},
	{title:'Сахалинская область'},
	{title:'Свердловская область'},
	{title:'Смоленская область'},
	{title:'Тамбовская область', header:'Т'},
	{title:'Тверская область'},
	{title:'Томская область'},
	{title:'Тульская область'},
	{title:'Тюменская область'},
	{title:'Ульяновская область', header:'У'},
	{title:'Челябинская область', header:'Ч'},
	{title:'Читинская область'},
	{title:'Ярославская область', header:'Я'}
];


var search = Titanium.UI.createSearchBar({
	showCancel:true,
	//autocapitalization: Titanium.UI.TEXT_AUTOCAPITALIZATION_WORDS,
	value: ch,
	barColor: '#314192',
	hintText: ''
});
 
var canBut = Ti.UI.createButton({
	height:33,
	width: 68,
	right: 3,
	backgroundImage:'images/cancel_button.png',
	backgroundSelectedImage: 'images/cancel_button_click.png'
});
canBut.addEventListener('click', function() {
	win.close();
});
search.add(canBut);

var footerView = Ti.UI.createView({
	height: 2
});

// create table view
var tableview = Titanium.UI.createTableView({
	data:dataRegion,
	//top: 43,
	search:search,
	footerView: footerView,
	filterAttribute:'title'
});

 search.addEventListener('blur', function(){ 	  	
 //search.showCancel = true;
  canBut.hide();
	// }
 });
 search.addEventListener('focus', function(){
 	canBut.show();
 });
win.add(tableview);
tableview.addEventListener('click', function(e) {

			Ti.App.fireEvent('passCity', {
				passCityValue: e.rowData.title,
				//passCityID : e.rowData.cityid,
				//regflag: 'true'
			});
	setTimeout( function() {
	 win.close();	
	},300);

});

//search.focus();