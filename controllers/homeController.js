app.controller('homeController', ['$scope', function($scope) {

    $scope.optionChosen= function(option){
        $scope.itemChosen.name= option.name;
        $scope.itemChosen.imgUrl=option.imgUrl;
        
        $scope.computerPick = $scope.computerOptions[Math.floor(Math.random()*$scope.computerOptions.length)];
        
        if ($scope.itemChosen.name==$scope.computerPick.name){
            $scope.scores.status="We're All Winners"
        }
        if($scope.itemChosen.name=="rock"&& $scope.computerPick.name=="scissors"||$scope.itemChosen.name=="scissors"&& $scope.computerPick.name=="paper"||$scope.itemChosen.name=="paper"&&$scope.computerPick.name=="rock"){
            $scope.scores.user++;
            $scope.scores.status="You Won!"
        }
        
        else if($scope.computerPick.name=="rock"&& $scope.itemChosen.name=="scissors"||$scope.computerPick.name=="scissors"&& $scope.itemChosen.name=="paper"||$scope.computerPick.name=="paper"&&$scope.itemChosen.name=="rock"){
            $scope.scores.computer++;     
            $scope.scores.status="Nyahaha You Lost"
        }
    };
    
    $scope.scores={
        user:0,
        computer:0,
        status:""
    };
    
    $scope.itemChosen={};
    $scope.userOptions =[
        {
            name: "rock",
            imgUrl:"img/rock.png"
        },
        {
            name:"paper",           
            imgUrl:"img/paper.png"
            
        },
        {
            name:"scissors",
            imgUrl:"img/scissors.png"
        }
        ]
        
        
        $scope.computerOptions =[
        {
            name: "rock",
            imgUrl:"img/rock.png"
        },
        {
            name:"paper",           
            imgUrl:"img/paper.png"
            
        },
        {
            name:"scissors",
            imgUrl:"img/scissors.png"
        }
        ]

}]);
