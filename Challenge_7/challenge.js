
//magic eightball

var numberofreplys = 2;
function ask(){
    var choice = Math.floor(Math.random() * numberofreplys +1);
    var reply = 'You need to make some options using if/else'



    if (choice=1) {
            guessAgain();
    }
    else if (choice=2) {
            outlooknotsogood()
    }
    else (choice=3) {
            withoutadoubt()
    }    
    console.log(choice);
}

ask();