var basectrl = angular.module('basectrl',[]);

basectrl.controller('homecontroler',function($scope,$http){

    $scope.aleretinfo = function(){
        alert("This function is called from home page");
    };

});