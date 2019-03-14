// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'auto', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/listas/',
    	url: 'listas.html',
    	name: 'listas',
  		},
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		{
		path: '/tabs/',
    	url: 'tabs.html',
    	name: 'tabs',
  		},
		{
		path: '/accordions/',
    	url: 'accordions.html',
    	name: 'accordions',
  		},
		{
		path: '/modal/',
    	url: 'modal.html',
    	name: 'modal',
  		},
		{
		path: '/modal2/',
    	url: 'modal2.html',
    	name: 'modal2',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;



var notificationWelcome = myApp.notification.create({
  icon: '<i class="material-icons">info</i>',
  title: '¡Bienvenido!',
  subtitle: 'Aplicaciones con Framework7',
  text: '',
  closeButton: true,
  closeTimeout: 3000,
});
$$('.open-welcome').on('click', function () {
  notificationWelcome.open();
});
$$(window).on('load', function () {
  notificationWelcome.open();
});




 

