function wrapping(gifts) {
    let bag = []
    for (let gift of gifts){
      let papper = "*"
      let wrap = papper.repeat(gift.length) +'**';
      let wrapped = wrap + `\n*${gift}*\n` + wrap
      bag.push(wrapped)
    }
    return bag
}

// ----test----

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
/* [
  "*****\n*cat*\n*****",
  "******\n*game*\n******",
  "*******\n*socks*\n*******"
] */

console.log(wrapping(["midu"]))

// Expected:
// [
//   "******\n*midu*\n******"
// ]

console.log(wrapping(["a"]))

// Expected:
// [
//   "***\n*a*\n***"
// ]

console.log(wrapping([]))

// Expected:
// []