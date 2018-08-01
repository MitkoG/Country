(function () {
    var lodash = require('lodash');

    function CountryBlockCtrl ($scope, $page, $blockOptions, $i18n, $log, databaseService) {
        $scope.name = $page.model.name;
        $scope.region = $page.model.region;
        $scope.code = $page.model.code;
        
        databaseService.docsOfType('city')
        .then(function(cities, err){
            $scope.cities = lodash.filter(cities, function(city){ 
                return city.country === $page.model.fp_ext_id})
        })
    }
    
    require('frontstage')
    .controller('Country2BlockCtrl', ['$scope', '$page', '$blockOptions', '$i18n', '$log', "databaseService", CountryBlockCtrl]);
    
    })();