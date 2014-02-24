

supercow.controller('FeaturesCtrl' ,['$scope','Core','ItemStore', function($scope,ItemStore){
    console.log('creating FeaturesCtrl');
    $scope.itemStore = {};
    ItemStore.on('datachange',function(data) {
          $scope.itemStore.features = cowapi.features();
    });

    $scope.itemStore.features = cowapi.features();    
	
/*     $scope.setFeature = function(u) {
      ItemStore.feature = u.data('name')||u.id();
      core.feature(u.id());
    }; */
	
    $scope.deleteFeature = function(feature) {
	  feature.status("deleted");
      core.item(feature.id()).status("deleted");
    };
	
    // $scope.deleteUser = function(user) {
	//   user.status("deleted");
    //   core.users(user.id()).status("deleted").sync();
	//   FeatureStore.syncStore();
    // };

/*     $scope.enableOrDisable = function(user) {
	  user = core.users(user.status());
	  if (us == "clean") {
		core.users(user.status()).status("dirty");
	  } else if (us == "dirty") {
		core.users(user.status()).status("deleted");
	  } else if (us == "deleted") {
		core.users(user.status()).status("clean");
	  }
    }; */

}]);

