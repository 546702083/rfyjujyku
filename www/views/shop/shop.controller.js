(function () {
  'use strict';
  angular.module('starter.controllers').controller('ShopCtrl',['$scope','localStorageService','$state',function ($scope,localStorageService,$state) {
    $scope.shop={};

    $scope.editShop=function (titleValue,propertyValue) {
      $state.go('app.shop-edit',{
        title:titleValue,
        property:propertyValue
      });
    };

    $scope.$on('$stateChangeSuccess',function () {
      $scope.shop=localStorageService.get('Shop',{
        name:'谢栋林',
        ab:'',
        name1:'谢栋林',
        phone:'13003800758',
        phone1:'13003800758',
        createTime:'2017-9-28 15:30:00',
        email:'546702083@qq.com',
        hylx:'111'
      });
    });
  }])
})();
