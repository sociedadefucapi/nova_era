'use strict';

angular.module('novaEraApp').controller('mainController', function ($scope, $rootScope, $http, $location, $routeParams) {
    var URL_API = "http://localhost/api/produto.php";
    var filtro = '';
    $scope.init = function () {
        $scope.listar();
    };

    $scope.listar = function () {
        $http.get(URL_API).then(function (response) {
            $scope.produtos = response.data;
        }).catch(function (error) {
            console.log(error);
            toastr.error("Erro ao recuperar lista de produtos!");
        });

    };

    $scope.selecionarProduto = function(produto){
        $scope.produtoSelecionado = produto;
    };

    $scope.init();
});