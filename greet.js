function greeting(name){
  return `Hola, ${name}`;
}
console.log(greeting("Node.js"));

function helloCourse(){
  return `Hello Friend`;
}

module.exports = {
 
  greeting:greeting,
  helloCourse:helloCourse


};