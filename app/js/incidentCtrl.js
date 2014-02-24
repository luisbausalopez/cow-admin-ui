
/*
 * Angular controller to manage the Incidents (projects)
 */
supercow.controller('IncidentCtrl', ['$scope', '$stateParams', 'Core', 'Utils', function($scope, $stateParams, Core, Utils){
    
	console.log('creating IncidentCtrl');
	
	if ($stateParams.incidentID == "new") {
		var d = new Date().getTime();
		$scope.project == Core.project(_id:d);
	} else {
		$scope.project = Core.project($stateParams.incidentID); //Get current project
	}


    store.bind('datachange', function () {
        $scope.$apply(function(){
            $scope.project = Core.projects($scope.currentProject.id()); 
        })
    });
	
    //Set the current project
    $scope.saveProject = function() {
		if ($scope.project.id() != "") {
			var p = Core.projects(currentProject.id());
			if ( $scope.project.data("name") != p.data("name") ) {
				Core.projects(p.id()).data("name",$scope.project.data("name")).sync();
			}
			if ( $scope.project.timestamp() != p.timestamp() ) {
				Core.projects(p.id()).timestamp($scope.project.timestamp()).sync();
			}
			if ( $scope.project.status() != p.status() ) {
				Core.projects(p.id()).status($scope.project.status()).sync();
			}
			
		}
    };
	
/* 	//Delete a project
    $scope.deleteProject = function(project) {
		Core.projects(project.id()).deleted(true).sync();
    };
    //Add new project
    $scope.newProject = function(project) {
        Core.project(project.id()).sync();
    };
    //Edit a project
    $scope.editProject = function(project) {
        Core.project(project.id()).sync();
    }; */


}]);

