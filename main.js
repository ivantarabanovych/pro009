function checkIfnumber(arg){
    if(typeof arg === 'number' &&!isNaN(arg)){
        console.log("Аргумент є числом: ", arg);
    } else {
        console.log("Аргумент не є числом: ", arg);
    }
}

checkIfnumber(24);
checkIfnumber("Hello!");
checkIfnumber(4);
checkIfnumber("This is text");