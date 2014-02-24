

supercow.factory('Core', ['$rootScope', function($rootScope) {
   
   var cow = new Cow.core({
          wsUrl: 'wss://websocket.geodan.nl:443/new'
        });   
    cow.userStore().loaded.then(function(){
        cow.users({_id:'1'}).data('name','Anonymous').sync();
        cow.user('1');
    });
   return cow;

}])

supercow.factory('Utils', ['$rootScope', function ($rootScope) {
  return {
     filter: function (items,beeld) { 
        return _(items).filter(function(d){
           return d.data('beeld') == beeld; 
        });

      }
    } 

}])





/* 

// Deze functie wrapped de websocket trigger naar angular

supercow.factory('ItemStore',['$rootScope',function($rootScope) {
    var itemStore;

    if(core.project()) { 
        itemStore = core.project().itemStore();
        return {
            on: function(eventName, fn) {
                itemStore.on(eventName, function(data) {
                    $rootScope.$apply(function() {
                        fn(data);
                    });
                });
            },
            filter: function (items,beeld) {
    		return _(items).filter(function(d){
                   return d.data('beeld') == beeld; 
	            });
	        }
	    }
	}

    else {
        return {
        	on: function(eventName, fn){},
            filter: function (items) {
    			return _(items).filter(function(d){
                   return d.type() == "feature"; 
            	});
    		}
    	}
    }
    
}]);






// Deze functie wrapped de websocket trigger naar angular

supercow.factory('ProjectStore',['$rootScope',function($rootScope) {
    var projectStore = core.projectStore();

    return {
        on: function(eventName, fn) {
            projectStore.on(eventName, function(data) {
                $rootScope.$apply(function() {
                    fn(data);
                });
            });
        }
    };
}]);


// Deze functie wrapped de websocket trigger naar angular

 supercow.factory('FeatureStore',['$rootScope',function($rootScope) {
    var featureStore = {};
	pjs = core.projects();
	for (project in pjs) {
		if (project.id() != 0) {
			featureStore = featureStore + project.items();
		}
	}

    return {
        on: function(eventName, fn) {
            featureStore.on(eventName, function(data) {
                $rootScope.$apply(function() {
                    fn(data);
                });
            });
        }
    };
}]); 


// Deze functie wrapped de websocket trigger naar angular

supercow.factory('UserStore',['$rootScope',function($rootScope) {
    var userStore = core.userStore();

    return {
        on: function(eventName, fn) {
            userStore.on(eventName, function(data) {
                $rootScope.$apply(function() {
                    fn(data);
                });
            });
        }
    };
}]);


// Deze functie wrapped de websocket trigger naar angular

supercow.factory('PeerStore',['$rootScope',function($rootScope) {
    var peerStore = core.peerStore();

    return {
        on: function(eventName, fn) {
            peerStore.on(eventName, function(data) {
                $rootScope.$apply(function() {
                    fn(data);
                });
            });
        }
    };
}]);

// De definities van de verschillende beelden inclusief hun onderdelen
supercow.factory('Beelden', ['$rootScope',function($rootScope) {
    var data = {};
    data.beelden = [
        { beeld: 'situatie', title: 'Situatie', beeldonderdeel: 
        	[	{id:'situatie', title: 'Situatie'}
        	]}    
        ,{ beeld: 'meldingen', title: 'Meldingen', beeldonderdeel: 
        	[	{title:'Tijdlijn',id:'Tijdlijn'},
        		{title:'Meldingen beeld',id:'meldingen' },
        		{title: 'Acute meldingen', id:'acuut'},
        		{title: 'Situatie Plaats Incident',id: 'spi'} ,
        		{title: 'Genomen acties',id:'acties' }
    		]}
        ,{ beeld: 'wat', title: 'Operationeel (WAT)', beeldonderdeel: 
       		[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},
       			{title:'Veiligheid medewerkers',id:'veiligheid'},
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}
        ,{ beeld: 'wot', title: 'Tactisch (WOT)', beeldonderdeel:
         	[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},       		
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}   			
        ,{ beeld: 'wbt', title: 'Strategisch (WBT)', beeldonderdeel: 
        	[	{title:'Tijdlijn',id:'tijdlijn'},
       			{title:'Beeldvorming',id:'beeldvorming'},
       			{title:'Oordeelsvorming',id:'oordeelsvorming'},
       			{title:'Besluitsvorming',id:'besluitsvorming'},
       			{title:'Knelpunten',id:'knelpunten'},
       			{title:'Acties/maatregelen',id:'maatregelen'},       		
       			{title:'Prognose (verwachting)',id:'prognose'}
   			]}
        ,{ beeld: 'scenarios', title: 'Scenario\'s / maatregelen', beeldonderdeel: 
        	[	{title:'Meest waarschijnlijk',id:'meest'},
        		{title:'Minder waarschijnlijk',id:'minder'},
        		{title:'Minst waarschijnlijk',id:'minst'}
    		]}
        ,{ beeld: 'communicatie', title: 'Communicatie', beeldonderdeel: 
        	[	{title:'Kernboodschap',id:'kernboodschap'},
        		{title:'Omgevingsbeeld',id:'omgevingsbeeld'},
        		{title:'Communicatie vanuit het waterschap',id:'extern'},
        		{title:'Communicatie intern het waterschap',id:'intern'}
    		]}
    ];
    return data;
}])

 */