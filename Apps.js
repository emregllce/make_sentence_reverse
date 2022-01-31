let my__text = prompt("enter a text to reverse.. it should be more than one word");
const mytextarray = my__text.split(" ");
let result = "";
for (i = mytextarray.length-1; i >= 0 ;i--){
    
    result += (mytextarray[i] + " ")
}
    

console.log(result);

