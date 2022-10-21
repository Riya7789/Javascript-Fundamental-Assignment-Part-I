// Write a JavaScript function to convert an object into a list of `[key, value]` pairs.


function CToKValuePair(obj){
    return Object.entries(obj);
}
const abcObject1 = {
    name:'Riya Shrestha',
    class:'V',
    roll:'7'
}
console.log(CToKValuePair(abcObject1))