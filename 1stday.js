
function sumation(num){
    let total = 0;
    for(let i = 0; i <= num; i++){
        total += i;
        console.log(total);

    }

    return total;
}


console.log(sumation(8))


function getGrade (s1, s2, s3) {
    let avgScore = (s1 + s2 + s3)/3
    
    if(avgScore >= 90 && avgScore <= 100 ){
      return 'A'
    }
    
    if (avgScore >= 80 && avgScore < 90 ){
      return 'B'
  }
  
    if(70 <= avgScore && avgScore < 80 ){
      return 'C'
    }
    
    if (60 <= avgScore && avgScore < 70){
      return 'D'
  }
}

console.log(getGrade(80,90,100));

function grow(x){
  
    let total = 1;
  for (let i = 0; i < x.length; i++ ){
    total *= x[i];
  
  }
    
    return total;
  }

  console.log(grow([1,2,3,6,5]))

function opposite(number) {
  
    if (number > 0){
      return -`${number}`
    }else{
      return +`${-number}`
    }
    
  }

  console.log(opposite(1))



function getMiddle(s){
    const newCh = s.split('');
    if(newCh.length%2 === 0){
        const even = s.charAt(newCh.length/2);
        return s.charAt(newCh.length/2 - 1) + even;
    }
    if(newCh.length%2 !== 0){
       const odd = s.charAt(newCh.length/2);
       return odd;
    }
    // first we have to split the word 
    // look through odd or even 
    // make if condition for odd and even then return result accordingly 
    //Code goes here!
  }

function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }

console.log(getMiddle('testing'))
const newNUm = Math.sqrt(4)

console.log(Number.isInteger(newNUm))

function isSquare(n){
    const num = Math.sqrt(n);
   if(Number.isInteger(num)){
    return true;
   }else{
    return true;
   }
   }
console.log(isSquare(26))

function fiver(start, end){
    let nums = []
    let result = [];
    for(let i = start; i <= end; i++){
        nums.push(i)
    if(i%5 !== 0){
        result.push(i)
    }
      
    }

   let newNum = nums.filter(e => (Number.isInteger(e/5)) && (e%2 === 0));
   console.log(newNum)

  const total = result.concat(newNum);

  console.log(total)

   return total.length;
}

console.log(fiver(1, 90))


