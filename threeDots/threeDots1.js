const ages = [1, 2, 3, 4, 5] 
const ages2 = [6, 7, 8, 9] 
const ages3 = [10, 11, 12, 13, 14] 
const allAges = ages.concat(ages2).concat(ages3)
console.log(allAges)

const allAges2 = [...ages, ...ages2,...ages3]
console.log(allAges2)

const allAges3 = ages.concat(ages2).concat([16]).concat(ages3)
console.log(allAges3)

const allAges4 = [...ages, 10000, ...ages2, ...ages3]
console.log(allAges4)

const Numbers = [650, 450, 550] 
const largerNumber = Math.max(...Numbers)
console.log(largerNumber)

