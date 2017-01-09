//Exercise #1
for (var i = 1; i <= 100; i++)
    console.log(i)

//Exercise #2

var triangle = "#"
    for (var triangle = "#"; triangle.length < 8; triangle+="#")
        console.log(triangle)
        
//Exercise #3

for (var i = 1; i <=100; i++){

    if ( i  % 5 == 0){
        console.log('Fizz');
}
    else if ( i % 3 == 0){
        console.log('Buzz');
          
}
    else if ( i % 5 && i % 3 === 0){
    console.log('FizzBuzz');
    }
    
}
//Exercise #4
for (var i = 0; i < 8; i++){
    if (i%2 == 0) {
        console.log("#"+" "+"#"+" "+"#"+" "+"#")+"\n";
    } 
    else {console.log(" "+"#"+" "+"#"+" "+"#"+" "+"#")+"\n";
        }
};

var output="";
for (var i = 0; i < 8; i++){
  for (var j = 0; j < 8; j++){
    if ((i+j)%2==0)
        output+=(" ");  
    else 
        output+=("#");   
};
    output+=("\n");
};
console.log(output);