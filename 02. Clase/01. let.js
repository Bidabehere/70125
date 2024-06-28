let a = 0
function foo(){
    let i = 1;
    if(true){
        i++;
        a++
    }
    //return i;
    console.log(i);
}
console.log(a);
foo();
console.log(a);
//console.log(i);
