

supercow.controller('PeersCtrl', ['$scope','Core','PeerStore', function($scope,PeerStore){
    console.log('creating PeersCtrl');
    $scope.peerStore = {};
    PeerStore.on('datachange',function(data) {
          $scope.peerStore.peers = cowapi.peers();
    });

    $scope.peerStore.peers = cowapi.peers();
	
    $scope.deletePeer = function(peer) {
	  peer.status("deleted");
      core.peers(peer.id()).status("deleted");
    };

    $scope.changePeerStatus = function(peer) {
	  p = core.peers(peer.id());
	  if (p.status() == "clean") {
		core.peer(peer.id()).status("dirty");
	  } else if (p.status() == "dirty") {
		core.peer(peer.id()).status("deleted");
	  } else if (p.status() == "deleted") {
		core.peer(peer.id()).status("clean");
	  }
    };

}]);

