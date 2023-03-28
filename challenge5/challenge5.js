function getMaxGifts(giftsCities, maxGifts, maxCities) {
  
    let combinaciones = [] 
  
    combinaciones.push(
      [],[giftsCities[0]]
    )
  
    giftsCities.shift()
  
    giftsCities.map(x=>{
      let newList = combinaciones.map(combinacion=>{
        let _combinacion = [...combinacion]
        if (_combinacion.length < maxCities){
          _combinacion.push(x)
        }
        return _combinacion
      })
      combinaciones = combinaciones.concat(newList)
    })
  
    combinaciones.shift()
  
    return Math.max(...combinaciones.map(x=>{
      let sum = x.reduce((total,num)=>total+num)
      return sum > maxGifts ? 0 : sum
    }))
}

// ---- test ----

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// the highest sum of gifts to distribute
// visiting a maximum of 3 cities
// is 20: [12, 3, 5]

// the highest sum would be [12, 7, 11]
// but it exceeds the limit of 20 gifts and he
// would have to leave a city half-way.

console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20 (12 + 3 + 5)

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100

console.log(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4))

// Expected:
// 100

console.log(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000))

// Expected:
// 115