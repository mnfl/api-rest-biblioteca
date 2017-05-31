<!DOCTYPE html>
<html lang="en" ng-app="app">
<head>
	<link rel="stylesheet" type="text/css" href="/css/bootstrap.css">
	<meta charset="UTF-8">
	<title>BIBLIOTECA</title>
</head>
<body>
	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">    
	          	<a class="navbar-brand" href="#">Sistema de consulta</a>
	        </div>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
		</div>
	</nav>
	
	<div class=".jumbotron">
	    <div class="container">
	    	<h4>fdfd</h4>
			<form id="formulario" method="Post" class="navbar-form navbar-right"> 
				<input type="text" placeholder="Titulo o Autor" id="texto"/> 
				<input type="hiden" name="">
				<input type="button" name="enviar" value="Enviar" onclick="recibir()"/> 
			</form> 
	    </div>
    </div>
    
<?php
echo "string";
?>
    <div class="row" ng-controller="appController">
    	<ul>
            <li ng-repeat="data in datos">
                <p>
	                titulo: {{ data.titulo }} 
	                <br /> 
	                autor: {{ data.autor }}
                </p>
            </li>
        </ul>
    </div>
	
	<h4>FIN</h4>
	<!--SCRIPTS UTILIZADOS-->
	<script src="JS/Resolucion.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.js"></script>
	<script type="text/javascript" src="js/recibir.js"></script>
</body>
</html>