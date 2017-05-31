'use strict'
/*function BreakinBadCharCtrl($scope, BreakinBadChar) {
	$scope.characters = BreakinBadChar.query();
}*/

angular.module('myApp.controllers', [])
    .controller('LibrosCtrl', ['$scope', '$http', function($scope, $http) {
    	
        $scope.newTodo = function() {
            // Hacemos un POST a la API para dar de alta nuestro nuevo ToDo
            $http.post("http://localhost:3000/api/libro/", $scope.nTodo).success(function(response) {
                if(response.status === "OK") { // Si nos devuelve un OK la API...
                    $scope.nTodo = {}; // Limpiamos el scope
                    getTodos(); // Actualizamos la lista de ToDo's
                }
            });
        }

        $scope.deleteTodo = function(id) {
            // Hacemos una petición DELETE a la API para borrar el id que nos pase el html por parametro
            $http.delete("http://localhost:3000/api/libro/" + id).success(function(response) {
                if(response.status === "OK") { // Si la API nos devuelve un OK...
                    getTodos(); // Actualizamos la lista de ToDo's
                }
            });
        }

        $scope.updateTodo = function(todo) {
            todo.id = todo._id; // Pasamos la _id a id para mayor comodidad del lado del servidor a manejar el dato.
            delete todo._id; // Lo borramos para evitar posibles intentos de modificación de un ID en la base de datos

            // Hacemos una petición PUT para hacer el update a un documento de la base de datos.
            $http.put("http://localhost:3000/api/libro/", todo).success(function(response) {
                if(response.status === "OK") {
                    getTodos(); // Actualizamos la lista de ToDo's
                }
            });
        }
		
        // Creamos una función para obtener los datos de la base de datos y actualizarlos cada que sea necesario.
        var getTodos = function() {
            $http.get("http://localhost:3000/api/libro/").success(function(response) {
                if(response.status == "OK") {
                    $scope.todos = response.data;
                }
            })
        }

        getTodos(); // Obtenemos la lista de ToDo al cargar la página


    }]);