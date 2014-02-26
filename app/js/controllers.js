'use strict';

/* Controllers */

/*
 * Angular controller for Login
 */
supercow.controller('LoginCtrl',['$scope','Core', function($scope,Core){
	
    console.log('creating LoginCtrl');
	
	var user = {};
	user.id = Core.user().id();
	user.name = Core.user().data("name");
	user.status = Core.user().status();
	user.deleted = Core.user().deleted();
	user.updated = Core.user().timestamp();
	user.deltas = Core.user().deltas().length;
	user.id = Core.user().id();
	
	$scope.user = user;
	
	//Bind storechange to angular DOM
    user.bind('datachange', function () {
        $scope.$apply(function(){
			Core.users($scope.user.id()).data('name', $scope.user.name ).sync();
			Core.user($scope.user.id()).sync();
            $scope.user = Core.user();
        })
    })
	
    //Set the current user
    $scope.setUser = function(u) {
        Core.users(u.id()).data("name").sync();
		Core.user(u.id()).sync();
    };
	
	

}])


/*
 * Angular controller to manage Peers
 */
supercow.controller('PeersCtrl', ['$scope','Core', function($scope,Core){
    console.log('creating PeersCtrl');

    $scope.peer = Core.peer(); //Get current peer
    var store = Core.peerStore(); //Get peerStore
    $scope.peers = Core.peers(); //Get list of peers

	//Bind storechange to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
            $scope.peers = Core.peers();
            $scope.peer = Core.peer();
        })
    })
	
    $scope.deletePeer = function(p) {
      Core.peers(p.id()).deleted(true).sync;
    };

    $scope.cleanPeerStatus = function(p) {
	  if (p.status() == "dirty") {
		Core.peers(peer.id()).sync();
	  }
    };

}]);


/*
 * Angular controller to manage the Users
 */
supercow.controller('UsersCtrl', ['$scope','Core', function($scope,Core){
    console.log('creating UsersCtrl');
		
    $scope.user = Core.user(); //Get current user
    var store = Core.userStore(); //Get userstore
    $scope.users = Core.users(); //Get list of users

	//Bind storechange to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
            $scope.users = Core.users();
            $scope.user = Core.user();
        })
    })
    //Set the current user
    $scope.setUser = function(user) {
		console.log('UsersCtrl->setUser');
        Core.user(user.id()).sync();
    };
	//Delete a user
    $scope.deleteUser = function(user) {
		console.log('UsersCtrl->deleteUser');
		Core.users(user.id()).deleted(true).sync();
    };

    $scope.cleanUserStatus = function(user) {
		console.log('UsersCtrl->cleanUserStatus');
	  if (user.status() == "dirty") {
		Core.users(user.id()).sync();
	  }
    };


}]);



/*
 * Angular controller to manage the Incidents (projects)
 */
supercow.controller('IncidentsCtrl', ['$scope','Core', function($scope,Core){
    console.log('creating IncidentsCtrl');
	
    $scope.project = Core.project(); //Get current project
    var store = Core.projectStore(); //Get projectstore
    $scope.projects = Core.projects(); //Get list of projects

	// Bind projectstore change to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
			$scope.project = Core.project(); //Get current project
            $scope.projects = Core.projects();
        })
    })
    //Set the current project
    $scope.setProject = function(project) {
        Core.project(project.id());
    };
	//Delete a project
    $scope.deleteProject = function(project) {
		Core.projects(project.id()).deleted(true).sync();
    };

}]);



/*
 * Angular controller to manage an Incident (project)
 */
supercow.controller('IncidentCtrl', ['$scope', '$stateParams', 'Core', 'Utils', function($scope, $stateParams, Core, Utils){
    
	console.log('creating IncidentCtrl');
	
	if(!Core.projects($stateParams.incidentID)) {
		Core.projects({_id:$stateParams.incidentID});
		console.log('IncidentCtrl $stateParams.incidentID');
	}
	
    //var store = Core.projectStore(); //Get projectstore
    //$scope.projects = Core.projects(); //Get list of projects
	$scope.project = Core.projects($stateParams.incidentID); //Get current project
	
	var groupStore = Core.projects($stateParams.incidentID).groupStore();
	var itemStore = Core.projects($stateParams.incidentID).itemStore();
	$scope.groups = Core.projects($stateParams.incidentID).groups();
	$scope.items = Core.projects($stateParams.incidentID).items();
	
	//Bind groupstore changes to angular DOM
    groupStore.bind('datachange', function () {
        $scope.$apply(function(){
            $scope.groups = Core.projects($stateParams.incidentID).groups();
        })
    })

	//Bind itemstore changes to angular DOM
    itemStore.bind('datachange', function () {
        $scope.$apply(function(){
			$scope.items = Core.projects($stateParams.incidentID).items();
        })
    })
	
	var newProject = {};
	newProject.id = $scope.project.id();
	newProject.name = $scope.project.data("name");
	newProject.status = $scope.project.status();
	newProject.created = $scope.project.id();
	newProject.updated = $scope.project.timestamp();
	newProject.deleted = $scope.project.deleted();
	newProject.deltas = $scope.project.deltas().length;
	newProject.description = $scope.project.data("description");
	$scope.newProject = newProject;
	
    // Update the current project
    $scope.updateProject = function() {
			console.log('update IncidentCtrl');
		if ( $scope.project.data("name") != $scope.newProject.name ) {
			Core.projects($scope.project.id()).data("name",newProject.name);
		}
		if ( $scope.project.timestamp() != $scope.newProject.updated ) {
			Core.projects($scope.project.id()).timestamp(newProject.updated);
		}
		if ( $scope.project.status() != $scope.newProject.status ) {
			Core.projects($scope.project.id()).status(newProject.status);
		}
		if ( $scope.project.data("description") != $scope.newProject.description ) {
			Core.projects($scope.project.id()).data("description",newProject.description);
		}
		if (Core.projects($scope.project.id()).status() == "dirty") {
			Core.projects($scope.project.id()).sync();
		}
    };
	
 	//Delete a project
    $scope.deleteProject = function(projectid) {
		Core.projects(projectid).deleted(true).sync();
    };


}]);



/*
 * Angular controller to manage an Incident (project)
 */
supercow.controller('IncidentSidebarCtrl', ['$scope', '$stateParams', 'Core', 'Utils', function($scope, $stateParams, Core, Utils){
    
	console.log('creating IncidentSidebarCtrl');
	
    var store = Core.projectStore(); //Get projectstore
    $scope.projects = Core.projects(); //Get list of projects
	$scope.project = Core.projects($stateParams.incidentID); //Get current project

	//Bind storechange to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
			console.log('bind IncidentCtrl');
            $scope.project = Core.projects($stateParams.incidentID);
            $scope.projects = Core.projects();
		})
    });
	
}]);





















