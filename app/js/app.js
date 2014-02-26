'use strict';

var supercow = angular.module('superCOW', [
  "ui.router",
  'ui.bootstrap',
  "leaflet-directive"])
  .run([ '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

        // It's very handy to add references to $state and $stateParams to the $rootScope
        // so that you can access them from any scope within your applications.For example,
        // <li ui-sref-active="active }"> will set the <li> // to active whenever
        // 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
      // if(Core === 'undefined') {alert('aargh');}
  }]);

supercow.config([ 
  '$stateProvider', '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider
	  .otherwise("/");
      
    $stateProvider

////////////////
//   Login    //
////////////////
	  .state("login", {
		url: "/",
        views: {
          'main@': {
            templateUrl: "templates/login.html"
          }
        },
        controller: "LoginCtrl"
      })

////////////////
// Incidents  //
////////////////
      .state('incidents', {
          url: "/incidents",
            views: {
              'main@': {
                templateUrl: "templates/incidentList.html",
                controller: 'IncidentsCtrl'
                }
            }
        })

///////////////////////////
// Incidents > Incident  //
///////////////////////////
        .state('incidents.incident', {
            // With abstract set to true, that means this state can not be explicitly activated.
            // It can only be implicitly activated by activating one of it's children.
            // abstract: true,
            url: '/:incidentID',
            views: {
              'main@': {
                templateUrl: "templates/incident.html",
                controller: 'IncidentCtrl'
              },
              'sidebar@': {
                templateUrl: "templates/sidebar/incidents.html",
                controller: 'IncidentSidebarCtrl'
              }
            }
        })

///////////////////////////////////
// Incidents > Incident > Groups //
///////////////////////////////////
/*        .state('incidents.incident.groups', {
            url: "/group",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/beeld.html",
                controller: 'BeeldCtrl'
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/beeld.html"
                }
            }
        })*/

////////////////
//  Features  //
////////////////
        .state('features', {
          url: "/features",
            views: {
              'main@': {
                templateUrl: "templates/featureList.html",
                controller: 'FeaturesCtrl'
                }
            }
        })

////////////////
//    Users   //
////////////////
        .state('users', {
          url: "/users",
            views: {
              'main@': {
                templateUrl: "templates/userList.html",
                controller: 'UsersCtrl'
                }
            }
        })

//////////////////////
//    Users > User  //
//////////////////////
        .state('users.user', {
            // With abstract set to true, that means this state can not be explicitly activated.
            // It can only be implicitly activated by activating one of it's children.
            abstract: true,
            url: '/:userID'
        })

////////////////
//    Peers   //
////////////////
        .state('peers', {
          url: "/peers",
            views: {
              'main@': {
                templateUrl: "templates/peerList.html",
                controller: 'PeersCtrl'
                }
            }
        })

//////////////////////
//    Peers > Peer  //
//////////////////////
        .state('peers.peer', {
            // With abstract set to true, that means this state can not be explicitly activated.
            // It can only be implicitly activated by activating one of it's children.
            abstract: true,
            url: '/:peerID'
        })

          //////////////////////
          // Incident > Beeld //
          //////////////////////
        

/*         .state('incidents.incident.beeld', {
            url: "/:beeldType",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/beeld.html",
                controller: 'BeeldCtrl'
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/beeld.html"
                }
            }
        }) */

          ///////////////////
          // Beeld > Kaart //
          ///////////////////
        

        /* .state('incidents.incident.beeld.kaart', {
            url: "/kaart",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/kaart.html"
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/kaart.html"
                }
            }
        }) */

          ///////////////////
          // Beeld > Text //
          ///////////////////
        

        /* .state('incidents.incident.beeld.text', {
            url: "/text",
            views: {

              // So this one is targeting the unnamed view within the parent state's template.
              'main@': {
                templateUrl: "templates/text.html"
                },
               'sidebar@': {
                templateUrl: "templates/sidebar/text.html"
                }
            }
        }); */
    }]);

