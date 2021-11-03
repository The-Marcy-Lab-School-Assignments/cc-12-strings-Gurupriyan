//write your code here
// -declare a function named "reverseString()' with a parameter that accepts a string argument
// -make a empty string variable
// -iterate through the argument with a for loop starting from last and going back to the first 
// - for each i add it to the empty string variable
// - return the empty string(which is not empty after the for loop)
function reverseString(string){
    let reverse = "";
    for(let i=string.length-1; i>=0; i--){
        reverse += string[i];
    }
    return reverse;
}

console.log(reverseString("hello"));