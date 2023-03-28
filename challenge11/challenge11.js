function getCompleted(part, total) {
    let a = part
    let b = total
    let mcd
    function maxComDivisor (a, b){
        let _temp;//Para no perder b
        while (b != 0) {
            _temp = b;
            b = a % b;
            a = _temp;
        }
        mcd=a;
    }
    
    a= part.split(':').map(element=>{return Number(element)})
      .reduce((acc,curr)=>{
            acc= acc*60 + curr
            return acc
        })
  
    b= total.split(':').map(element=>{return Number(element)})
      .reduce((acc,curr)=>{
            acc= acc*60 + curr
            return acc
        })
    maxComDivisor(a,b)
    let result = a/mcd +'/'+ b/mcd
    return result
}

// ---- test ----

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('02:20:20', '03:30:30')) // '2/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5'