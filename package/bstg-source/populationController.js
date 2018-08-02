(function () {
    var _ = require('underscore');
    var Highcharts = require('highcharts');
    function SumCitiesPopulation ($scope, appScriptService) {
       
        appScriptService.callAppScript('country/population', {})
        .then(function(response){
            $scope.countries = response;

            var responseToArrays = _(response).each(function(elem, key){
                response[key] = _(elem).values();
              });
           
            var myChart = new Highcharts.Highcharts.Chart({
                chart: {
                    renderTo: 'container',
                    type: 'column'
                },
                title: {
                    text: 'Countries Population'
                },
                xAxis: {
                    type: 'category',
                    labels: {
                        rotation: -45,
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Population'
                    }
                },
                legend: {
                    enabled: false
                },
                tooltip: {
                    pointFormat: 'Population: <b>{point.y:.1f} million people</b>'
                },
                series: [{
                    name: 'Population',
                    data: responseToArrays,
                    dataLabels: {
                        enabled: true,
                        rotation: -90,
                        color: '#FFFFFF',
                        align: 'right',
                        format: '{point.y}', // one decimal
                        y: 10, // 10 pixels down from the top
                        style: {
                            fontSize: '13px',
                            fontFamily: 'Verdana, sans-serif'
                        }
                    }
                }]
            });
          });
    }

    getBackstageAppModule()
    .controller('PopulationCtrl', ['$scope', 'appScriptService', SumCitiesPopulation]);
    
    })();
