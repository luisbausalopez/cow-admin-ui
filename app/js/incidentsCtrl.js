
/*
 * Angular controller to manage the Incidents (projects)
 */
supercow.controller('IncidentsCtrl', ['$scope','Core', function($scope,Core){
    console.log('creating IncidentsCtrl');
		
    $scope.project = Core.project(); //Get current project
    var store = Core.projectStore(); //Get projectstore
    $scope.projects = Core.projects(); //Get list of projects

	//Bind storechange to angular DOM
    store.bind('datachange', function () {
        $scope.$apply(function(){
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

