const ages = [1, 2, 3, 4, 5]
const ages2 = [6, 7, 8, 9, 10] 
const ages3 = [11, 12, 13, 14, 15] 
const allAges = ages.concat(ages2).concat(ages3)
console.log(allAges)

const allAges2 = [...ages, ...ages2, ...ages3] 
console.log(allAges2)

const numbers = [650, 450, 550] 
const maxNumber = Math.max(...numbers)
console.log(maxNumber)