(function () {

    function ExportCountryData ($scope, eventService) {
        eventService.getEventDocByFpExtId(eventService.getCurrentEvent(), $scope.dataRow.country)
        .then(function (city) {
            $scope.cityName = city.name;
        })
    }
    
    getBackstageAppModule()
    .controller('ExportCountryDataController', ['$scope', 'eventService', ExportCountryData]);
    
    })();