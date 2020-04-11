var cup = 5
let dice = 1



function count(){
    return (cup)
}

function less (){
     cup=cup-1
    return (cup);
}

function more (){
    cup=cup+1
    
    return(cup);
}

function count (){
     return (cup)
}




function roll() {
    return Array.apply(null, Array(cup)).map(function() {
       return Math.round(Math.random() * 5)+1;
       count()
       
      
    
    });
}

count()