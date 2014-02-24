'use strict';

/* Controllers */

var superCOWcontrollers = angular.module('superCOW.controllers', []);

superCOWcontrollers.controller('MyCtrl1', [function() {

  }]);

superCOWcontrollers.controller('MyCtrl2', [function() {

  }]);

superCOWcontrollers.controller('IncidentsCtrl' ,['$scope','ProjectStore', function($scope,ProjectStore){
    console.log('creating IncidentsCtrl');
    $scope.projectStore = {};
    ProjectStore.on('datachange',function(data) {
          $scope.projectStore.projects = cowapi.projects();
    });

    $scope.projectStore.projects = cowapi.projects();    

    //TODO: momenteel wordt de core.project alleen hier gezet, als je rechtstreeks via een link binennkomt
    //gaat het mis
    $scope.setProject = function(project) {
       ProjectStore.incident = project.data('name')||project.id();
        core.project(project.id());
    };
  }]);

