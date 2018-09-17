//#15
//Could explain what is the problem of the function below? If you were the author, how do you refactor it?
function badFunc(val) {
    if(val <= 0) {
        throw new Error('Error happened');
    }
    return Promise.resolve(val);
}
//Write your solution here.
function betterFunc(val) {
    //Write your code here
}
