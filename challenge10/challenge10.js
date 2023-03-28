function checkJump(heights) {
    let heighestIndex = heights.indexOf(Math.max(...heights))
    let asc = heights.slice(0,heighestIndex)
    let desc = heights.slice(heighestIndex)
    let ascSorted = [...asc].sort().join('')
    let descReverse = [...desc].sort((a,b)=>{return a-b}).reverse().join('')
    return (asc.length>0 
      && desc.length>1 && asc.join('')==ascSorted 
      && desc.join('')==descReverse
      )
}

// ---- test ----

let heights = [1, 3, 8, 5, 2]
console.log(checkJump(heights)) // true

/*
It's `true`.
The jump goes up-down.

    8 (highest point)
   ↗ ↘
  3   5
 ↗     ↘
1       2
*/

heights = [1, 7, 3, 5]
console.log(checkJump(heights)) // false

/*
It's `false`.
It goes up-down-up.

  7   5 
 ↗ ↘ ↗
1   3
*/

console.log(checkJump([1, 2, 1])) // true

console.log(checkJump([1, 2, 3, 2, 1])) // true

console.log(checkJump([1, 2, 2, 2, 1])) // true

console.log(checkJump([0, 1, 0])) // true

console.log(checkJump([2, 2, 2, 2])) // false

console.log(checkJump([1, 2, 3])) // false

console.log(checkJump(checkJump([1, 2, 3, 2, 1, 2, 3]))) // false

console.log(checkJump([1, 1000, 900, 800])) // true

console.log(checkJump([1, 1000, 100, 800])) // false

console.log(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])) // true

console.log(checkJump([1, 2, 3, 1, 3, 1])) // false

console.log(checkJump([1, 3, 2, 5, 4, 3, 2, 1])) // false