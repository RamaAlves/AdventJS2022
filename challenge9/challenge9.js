function countTime(leds) {
    let arr = leds.join("").split("1")
    arr[0] += arr.pop()
    return Math.max(...arr.map((led) => led.length)) * 7
}

// ---- test ----

const leds = [0, 1, 1, 0, 1]
console.log(countTime(leds)) // 7
// 7 seconds because in the first change
// all the lights turned on
// 0s: [0, 1, 1, 0, 1]
// 7s: [1, 1, 1, 1, 1]

console.log(countTime([0, 0, 0, 1])) // 21
// 21 seconds because it needs three changes:
// 0s: [0, 0, 0, 1]
// 7s: [1, 0, 0, 1]
// 14s: [1, 1, 0, 1]
// 21s: [1, 1, 1, 1]

console.log(countTime([0, 0, 1, 0, 0])) // 28
// 28 seconds because it needs four changes:
// 0s: [0, 0, 1, 0, 0]
// 7s: [0, 0, 1, 1, 0]
// 14s: [0, 0, 1, 1, 1]
// 21s: [1, 0, 1, 1, 1]
// 28s: [1, 1, 1, 1, 1]

console.log(countTime([1, 0, 0, 1, 0, 0])) // 14
// 14 seconds because it needs two changes:
// 0s: [1, 0, 0, 1, 0, 0]
// 7s: [1, 1, 0, 1, 1, 0]
// 14s: [1, 1, 1, 1, 1, 1]

console.log( countTime([1, 1, 0, 0, 0, 0])) // 28
// 28 seconds because it needs four changes:
// 0s: [1, 1, 0, 0, 0, 0]
// 7s: [1, 1, 1, 0, 0, 0]
// 14s: [1, 1, 1, 1, 0, 0]
// 21s: [1, 1, 1, 1, 1, 0]
// 28s: [1, 1, 1, 1, 1, 1]

console.log(countTime([1, 1, 1])) // 0