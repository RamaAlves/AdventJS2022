function getOptimalPath(path) {
    let arrNum = path.reverse().reduce((acc,curr)=>{
        return curr.map((x,i)=>{
            return x+Math.min(acc[i], acc[i+1])
        })
    })
    
    return arrNum.pop()
}


console.log(getOptimalPath([[0], [2, 3], [4,2,6],[6,3,2,7]])) // 6

//console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5

//console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8