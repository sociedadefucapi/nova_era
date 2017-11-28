'use strict';

angular.module('novaEraApp')
    .controller('cadastroController', function ($scope, $rootScope, $http, $location, $routeParams) {
        var URL_API = "http://localhost/api/produto.php";

        $scope.editando = false;

        $scope.init = function () {
            if ($routeParams.id) {
                $scope.editando = true;

                $http.get(URL_API + $routeParams.id).then(function (response) {
                    console.log(routeParams);
                }).catch(function (error) {
                    console.log(error);
                    toastr.error("Erro ao recuperar produto");
                });
            } else {
                $scope.produto = {
                    nome: '',
                    codigo: '',
                    setor: '',
                    preco: '',
                    disponibilidade:'1'
                };
            }
        };

        $scope.editar = function (id) {
            $location.path("/cadastro/" + id);
        };

        $scope.salvar = function () {
            console.log($scope.produto);
            $http.post(URL_API, $scope.produto).then(function () {
                console.log("produto salvo");
                $location.path("/");
            }).catch(function (error) {
                // console.log(error);
                console.log("Erro ao salvar produto!");
            });

        };
        $scope.init();
    });