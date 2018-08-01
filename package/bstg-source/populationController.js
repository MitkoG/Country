(function () {

    function SumCitiesPopulation ($scope, appScriptService) {

        appScriptService.callAppScript('country/population', {})
        .then(function(response){
            $scope.countries = response;
          });
    }

    getBackstageAppModule()
    .controller('PopulationCtrl', ['$scope', 'appScriptService', SumCitiesPopulation]);
    
    })();
