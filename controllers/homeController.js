app.controller('homeController', ['$scope','optionService', function($scope, optionService) {
/*history route that keeps track of the game points*/
    $scope.itemChosen=optionService.itemChosen;  
    // $scope.computerPick=optionService.computerPick;
    $scope.historyList= optionService.historyList;
    $scope.computerHistory=optionService.computerHistory;
    
    $scope.optionChosen= function(option){
        $scope.itemChosen.name= option.name;
        $scope.itemChosen.imgUrl=option.imgUrl;
        $scope.computerPick = optionService.computerOptions[Math.floor(Math.random()*optionService.computerOptions.length)];
        
        $scope.itemCopy= angular.copy($scope.itemChosen)
        $scope.historyList.push($scope.itemCopy);
        console.log($scope.historyList);
        
        $scope.computerItemCopy= angular.copy($scope.computerPick)
        $scope.computerHistory.push($scope.computerItemCopy);
        console.log($scope.computerHistory);
        
        if ($scope.itemChosen.name==$scope.computerPick.name){
            $scope.scores.status="We're All Winners"
        }
        if($scope.itemChosen.name=="rock"&& $scope.computerPick.name=="scissors"||$scope.itemChosen.name=="scissors"&& $scope.computerPick.name=="paper"||$scope.itemChosen.name=="paper"&&$scope.computerPick.name=="rock"){
            $scope.scores.user++;
            $scope.scores.status="You Won!"
        }
        
        else if($scope.computerPick.name=="rock"&& $scope.itemChosen.name=="scissors"||$scope.computerPick.name=="scissors"&& $scope.itemChosen.name=="paper"||$scope.computerPick.name=="paper"&&$scope.itemChosen.name=="rock"){
            $scope.scores.computer++;     
            $scope.scores.status="You Lose!"
        }
    };
    
    $scope.scores=optionService.scores;
    $scope.userOptions = optionService.userOptions;
    $scope.computerOptions= optionService.computerOptions;
}]);
