function receivesAFunction(callBack){
    return callBack();
}

function returnsANamedFunction (){
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        return () => console.log("this is an anonymous function");
    }
}