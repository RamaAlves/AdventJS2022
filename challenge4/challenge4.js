function fitsInOneBox(boxes) {
    let orderBoxes = boxes.sort((box1, box2)=> box1.l - box2.l);

    return !!orderBoxes.reduce((acc, curr)=>
        acc = (acc.l < curr.l && acc.w < curr.w && acc.h < curr.h) 
        ? acc = curr
        : false )
}

// ---- test ----

let boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]
  
console.log(fitsInOneBox(boxes)) // false

boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]
  
console.log(fitsInOneBox(boxes)) // true

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]))
  
//Expected:
//false

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 }
]))

//Expected:
//true

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }
]))

//Expected:
//false

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2}
]))

// Expected:
// false

console.log(fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
]))

// Expected:
// true