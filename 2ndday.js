function greet(name){
    const newName = name.toLowerCase().split('');
    const finalGreet = [];
 for (let i = 0; i < newName.length; i++){  
  if(i === 0){
    const upp = newName[i].toUpperCase()
    finalGreet.push(upp)
  }else{
    finalGreet.push(newName[i])
  }
    
 }
 const num = finalGreet.join('');
 console.log(num)
   return `Hello ${num}!`
 
}

console.log(greet("AHAMMED"))