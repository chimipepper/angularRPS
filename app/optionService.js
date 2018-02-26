app.service('optionService', function(){
    this.scores={
        user:0,
        computer:0,
        status:""
    };
    
    this.itemChosen={};
    // this.computerPick={};
    this.historyList=[];
    this.computerHistory=[];
    this.userOptions =[
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
        ];
    this.computerOptions=[
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
        ];
    
});