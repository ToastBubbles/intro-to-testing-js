// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(name){

    if(typeof name === "string" && name.length > 1 && isNaN(parseFloat(name))) {
        return "Hello, " + name.toString() + "!"
    }else{
        return "Hello, World!"
    }

}

function isFive(five){
    return parseInt(five) === 5;
}

// function sayHello(name){
//
//     if(name === "Alex") {
//         return "Hello, Alex!";
//     }else if (name === "Jane"){
//         return "Hello, Jane!";
//     }else if(name === "Pat"){
//         return "Hello, Pat!";
//     }else{
//         return ""
//     }
//
// }