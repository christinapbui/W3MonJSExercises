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


// Does any inventor have the letter 'y' in their name?
// note: need to index and find individual letters
let resultY = inventors.some(item => item === 'y')
console.log("inventor names with y:",resultY)


// Does every inventor have the letter 'e' in their name?
let resultE = inventors.some(item => item === 'e')
console.log("inventor names with e:",resultE)

// Does every inventor have a first name that's longer than 4 characters?