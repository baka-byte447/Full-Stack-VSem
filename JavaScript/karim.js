function a (a){
    return function b(b){
        return function c(c){
            return a+b+c;
        }
    }
}

// const add = a => b => c => a+b+c; does the same thing 

console.log(a(1)(2)(3));