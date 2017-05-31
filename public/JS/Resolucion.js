//Scrip para adaptar pagina
/*
var height=0; var width=0;
if (self.screen) {     // for NN4 and IE4
	width = screen.width;
	height = screen.height
}
else
if (self.java) {   // for NN3 with enabled Java
	var jkit = java.awt.Toolkit.getDefaultToolkit();
	var scrsize = jkit.getScreenSize();
	width = scrsize.width;
	height = scrsize.height; 
}
document.writeln("<center>")
if (width > 0 && height > 0) {
	document.writeln('Tu Resolucion de Pantalla es: ',width,'x',height) 
} else {
	document.writeln('Tu Resolucion de Pantalla no puede ser determinada')
}
document.writeln("</center>")
*/
if(window.screen.availWidth == 2560)
	window.parent.document.body.style.zoom="80%"; 
if(window.screen.availWidth == 1920 || window.screen.availWidth == 1080)
	window.parent.document.body.style.zoom="90%";
if(window.screen.availWidth == 1440)
	window.parent.document.body.style.zoom="95%"; 
if(window.screen.availWidth == 1366)
	window.parent.document.body.style.zoom="100%"; 
if(window.screen.availWidth == 1024 || window.screen.availWidth == 768)
	window.parent.document.body.style.zoom="100%"; 
if(window.screen.availWidth == 800 || window.screen.availWidth == 600)
	window.parent.document.body.style.zoom="125%";
if(window.screen.availWidth == 480 || window.screen.availWidth == 800)
	window.parent.document.body.style.zoom="150%";
if(window.screen.availWidth == 360 || window.screen.availWidth == 640)
	window.parent.document.body.style.zoom="175%"; 
if(window.screen.availWidth == 240 || window.screen.availWidth == 320)
	window.parent.document.body.style.zoom="200%";