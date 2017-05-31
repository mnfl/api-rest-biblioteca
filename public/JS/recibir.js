function recibir(){ 
	var valor = document.getElementById("texto").value
	if(valor == ""){
	}else{
		var ruta = "../api/libro/"+valor
		console.log(ruta)
		window.location = ruta
	}
}

function generarTabla(datos) {
  	if( datos != '' ) {
    	var i
    	var atributos = Array()
    	if( datos.length > 0 ) {
      		for( var aux in datos[0] )
        		atributos.push(aux)
    	}
    	console.log(datos)
    	/*var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                document.getElementById("employee").innerHTML = xmlhttp.responseText;
            }
        };
        xmlhttp.open("GET", "../PHP/Tabla.php");
        xmlhttp.send();
    	/*$.ajax({
      			type: "POST",
      			url: "../PHP/Tabla.php",
      			data: { "datos" :  "datos" },
      			success: function(data){
          		alert(data);
      		},
      		error: function(){
			alert('Error!');
			}
 		});*/
	}
}

function dibujar(){

  	/*var app = angular.module("app", [])

    app.controller("appController", function($scope, $http) {
    	$http.get(datos).sucess(function(data) {
    		$scope.datos=data
    	})
    })*//*
    var body = document.getElementsByTagName("body")[0];
    var tabla = $('<table border="1" cellspacing="0" cellpadding="2"></table>')
    var head = $('<tr></tr>').css('text-transform', 'capitalize')
    for( i = 0; i < atributos.length; i++) {
      head.append('<th>' + atributos[i] + '</th>')
    }
    tabla.append($('<thead></thead>').append(head))

    var tbody = $('<tbody></tbody>');
    for(i = 0; i < datos.length; i++ ) {
      var tr = $('<tr></tr>')
      for(j = 0; j < atributos.length; j++ )
        tr.append('<td>' + eval('datos[i].' + atributos[j]) + '</td>')

      tbody.append(tr)
    }
    tabla.append(tbody)
    $('body').append(tabla)*/
}


module.exports = {
	generarTabla,
	recibir
}