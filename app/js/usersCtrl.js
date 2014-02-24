
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
        })
    })
    //Set the current user
    $scope.setUser = function(user) {
        Core.user(user.id()).sync();
    };
	//Delete a user
    $scope.deleteUser = function(user) {
		Core.users(user.id()).deleted(true).sync();
    };


}]);

