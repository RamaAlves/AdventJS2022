function selectSleigh(distance, sleighs) {
    const sleighsOk = sleighs.filter(sleigh=>(sleigh.consumption*distance<=20))
    return sleighsOk.length!=0 ? sleighsOk[sleighsOk.length-1].name : null
  }


// ------ test ------
const distance = 30
const sleighs = [
  { name: "Gorusuke", consumption: 0.3 },
  { name: "Madeval", consumption: 0.5 },
  { name: "Lolivier", consumption: 0.7 },
  { name: "Hyuuh", consumption: 1 }
]

console.log(selectSleigh(distance, sleighs)) // => "Madeval"

// Gorusuke consumes 9W to cover 30 distance
// Madeval consumes 15W to cover 30 distance
// Lolivier consumes 21W to cover 30 distance
// Hyuuh consumes 30W to cover 30 distance

// The best sleigh to cover the distance is Madeval.

// Gorusuke covers the distance but it's a worse sleigh
// Lolivier and Hyuuh can't cover the distance with 20W.\

console.log(selectSleigh(1, [
    { name: 'pheralb', consumption: 0.3 },
    { name: 'TMChein', consumption: 0.5 }
  ])) // => TmChein

console.log(selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 5 }
  ])) // => Pedrosillano

console.log(selectSleigh(10, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])) // => SamarJaffal

console.log(selectSleigh(50, [
    { name: 'Pedrosillano', consumption: 1 },
    { name: 'SamarJaffal', consumption: 2 },
    { name: 'marcospage', consumption: 3 }
  ])) // => null