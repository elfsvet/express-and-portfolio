// lets calculate weight from ounces to grams
const weightOuncesToGrams = (weight) => (weight*28.34952).toFixed(2)
const weightGramsToOunces = (weight) => (weight/28.34952).toFixed(2)

console.log(weightOuncesToGrams(11.5))
console.log(weightGramsToOunces(326))
