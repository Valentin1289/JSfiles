let thisText="I am a superhero!";
let a=0;
anotherFunction();
a=999999;

const thirdFunction=function(toLog,secondToLong){
    logIntoTerminal(toLog,secondToLong);
}
thirdFunction("Some will think i am crazy!",a);
let name="Anne";
console.log(greetings(name));
name="Alice";
console.log(greetings(name));
name="Berzelote";
console.log(greetings(name));
name="Minata";
console.log(greetings(name));
name="Zeref";
console.log(greetings(name));

function anotherFunction(){
    logIntoTerminal("Some will think i am crazy!",a);
}

function logIntoTerminal(toLog,secondToLong){
    let localText="I am also a villain!";
    console.log(thisText);
    console.log(localText);

    function fourthFunction(){
        console.log("I fight to bring Paradise on earth.");
    }
    fourthFunction();
    console.log(toLog+" "+secondToLong+"\n");
}

function greetings(theName){
    return "Greetings, "+theName+"!";
}