
//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'



    if (choice=1) 
           console.log("Guess Again");
    
    else if (choice=2) 
            console.log("Outlook Not So Good");
    
    else (choice=3) 
            console.log("Without a Doubt");
    
    console.log(choice);
}

ask();