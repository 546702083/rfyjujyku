(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopEditCtrl',['$scope','$stateParams','localStorageService',function ($scope,$stateParams,localStorageService) {
    $scope.title = $stateParams.title;
    $scope.property = $stateParams.property;
    $scope.shop = localStorageService.get('Shop',{
      name:'谢栋林',
      ab:'',
      name1:'谢栋林',
      phone:'13003800758',
      phone1:'13003800758',
      createTime:'2017-9-28 15:30:00',
      email:'546702083@qq.com',
      hylx:'111'

    });
    $scope.save = function () {
      localStorageService.update('Shop',$scope.shop);
    };
  }]);
})();
