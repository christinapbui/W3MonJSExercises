const inventors = [
    "Albert Einstein",
    "Issac Newton",
    "Galileo Galilei",
    "Marie Curie",
    "Johannes Kepler",
    "Nicolaus Copernicus",
    "Max Planck",
    "Katherine Blodgett",
    "Ada Lovelace",
    "Sarah E. Goode",
    "Lise Meitner",
    "Hanna Hammarstrom"
];
  
const numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55];
  
let newArray = [];
  
// Milestone 2
  
// Print out an array of the inventors whose name starts with 'A'.
// DONE
let startsWithA = inventors.filter(name => {
    return name.includes("A");
});
console.log("inventor names that start with A:",startsWithA)

  
// Print out an array of the inventors whose name contains 'n'.
// DONE
let letterN = inventors.filter(name => name.includes('n'))

console.log("inventor names containing N:",letterN)


// Print out an array of the inventors whose name has the same letter twice in a row (e.g. nn or mm).
let doubleLetters = inventors.filter((name,i) => {
    let eachLetters = name.split('')
    for(x=0;x<eachLetters.length;x++){
      if(eachLetters[x]===eachLetters[x+1]){
        return true;
      }
    }
    return false;
})

console.log("inventor names with double letters:",doubleLetters)


// Print out an array of the numbers which are odd.
// DONE
function isOdd(numbers){
    if(numbers%2==1){ 
      return true
    }
    else {
      return false
    }
}
  
for(let i=0; i<numbers.length; i++){
    isOdd(numbers[i])
}
  
newArray = numbers.filter(isOdd)
  
console.log("array of odd numbers:", newArray)
  

// Print out an array of the numbers that have two digits.
// DONE
function twoDigits(numbers){
    if(numbers>=10 && numbers <=99){
      return true
    } else {
      return false
    }
}
  
newArray = numbers.filter(twoDigits)
console.log("array of two digits:",newArray)
  
// Print out an array of the numbers which are prime.
// NEED TO FINISH
// function primeNumbers(number){
//     if(number === 1){
//         return false;
//     }else if(number === 2){
//         return true;
//     }else{
//         for (var i=2;i<number;i++){
//             if(number%i === 0){
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log("prime numbers:",primeNumbers)