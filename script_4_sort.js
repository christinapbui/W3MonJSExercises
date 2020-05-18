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

// Sort all the inventors in alphabetical order, A-Z.

let alphaOrder = inventors.sort()

console.log("alphabetical order",alphaOrder)

// Sort all the inventors in reverse alphabetical order, Z-A. Do not use the reverse method.

let reverseAlphaOrder = inventors.sort((a,b) => {
    if (a<b){
        return 1
    }else if(a>b){
        return -1
    }else{
        return 0
    }
})

console.log("reverse alphabetical order",reverseAlphaOrder)

// Sort all the inventors by length of name, shortest name first.

let eachLetters = name.split('')
console.log("test",eachLetters)
//     for(x=0;x<eachLetters.length;x++){
//       if(eachLetters[x]===eachLetters[x+1]){
//         return true;
//       }
//     }
//     return false;
// })



// let nameLength = inventors.sort((name,i) => {
//     let eachLetters = name.split('')
//     for(x=0;x<eachLetters.length;x++){
//       if(eachLetters[x]===eachLetters[x+1]){
//         return true;
//       }
//     }
//     return false;
// })

// console.log("inventor names with double letters:",doubleLetters)


// console.log("sort inventors by length of name",nameLength)

// Sort all the inventors by length of name, longest name first. Do not use the reverse method.


