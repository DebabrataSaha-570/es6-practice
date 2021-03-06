const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
// output: [
//     12, 14, 16, 13, 17, 15,
//     16, 12,  5, 25, 36, 22,
//     29
//   ]

const allAges2 = [...ages, ...ages2, 5,  ...ages3]
console.log(allAges2)
// output: [
//     12, 14, 16, 13, 17, 15,
//     16, 12,  5, 25, 36, 22,
//     29
//   ]

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib)
console.log(maximum)

const takaPoisa = [650, 450, 250] 
const maximum2  =  Math.max(...takaPoisa)
// output: 650;

// const maximum2  = Math.max(takaPoisa)
// output: NaN

console.log(maximum2)