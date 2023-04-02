function decorateTree(base) {
    let tree = [];
    tree.push(base);
    let arr = base.split(' ');
    while(arr.length > 1){
        let newLevel =[]
        arr.reduce((acc,curr)=>{
            if (acc === curr){
              newLevel.push(acc);
            }else{
              let combine = ['R','B','P'];
              let index1= combine.indexOf(acc);
              combine.splice(index1,1);
              let index2= combine.indexOf(curr);
              combine.splice(index2,1);
              newLevel.push(String(combine));
            }
            return acc = curr;
        })
        arr = newLevel
        tree.push(arr.join(' '))

    }

    return tree.reverse()
}


// ---- test ----

console.log(decorateTree('B P R P'))
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

console.log(decorateTree('B B')) // ['B', 'B B']

console.log( decorateTree('B B P R P R R'))

// Expected:
// [
//   "B",
//   "R P",
//   "B P P",
//   "P R B R",
//   "P P B B P",
//   "B R B B B R",
//   "B B P R P R R"
// ]

console.log(decorateTree('R R P R R'))

// Expected:
// [
//   "R",
//   "R R",
//   "P B P",
//   "R B B R",
//   "R R P R R"
// ]