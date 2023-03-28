function getGiftsToRefill(a1, a2, a3) {
    //unir listas
    const stocksShops = [].concat(a1).concat(a2).concat(a3)
    //limpiar elementos repetidos
    let stockTotalGifts = stocksShops.filter((item,index)=>{
      return stocksShops.indexOf(item) === index;
    })
    
    let restock = []
    //verificar si se encuentra en mas de una lista
    stockTotalGifts.forEach(gift=>{
        let a = a1.includes(gift)
        let b = a2.includes(gift)
        let c = a3.includes(gift)
        
        if ((!a&&!b)||(!c&&!b)||(!c&&!a)){
            restock.push(gift)
        }
        
    })
    return restock
}

// ---- test ----

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

/* The store a1 has "bike" and "car".
The store a2 has "car", "bike" and "doll".
The store a3 has "bike" and "pc".

The gift "doll" and "pc" are only in the stores a2 and a3 respectively.
*/

const gifts = getGiftsToRefill(a1, a2, a3) 
console.log(gifts) // ['doll', 'pc']

console.log(getGiftsToRefill(a1, a2, a3))

// Expected:
// [
//   "muñeca",
//   "pc"
// ]

console.log(getGiftsToRefill([], [], []))

// Expected:
// []

console.log(getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a']))

// Expected:
// []

console.log(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c']))

// Expected:
// [
//   "a",
//   "b",
//   "c"
// ]

console.log(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f']))

// Expected:
// [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f"
// ]