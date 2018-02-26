app.controller('historyController',['$scope', 'optionService', function($scope, optionService) {
            $scope.computerHistory= optionService.computerHistory;
            $scope.historyList= optionService.historyList;
}]);