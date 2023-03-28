function checkPart(part) {
    if (part==part.split("").reverse().join("")){
      return true
    }
    for (let i in part){
      let _variation = part.split("")
      _variation.splice(i, 1)
      if(_variation.join('')==_variation.reverse().join("")){
        return true
      }
    }
    return false    
}

// ---- test ----

console.log(checkPart("uwu")) // true
// "uwu" is a palindrome without removing any character

console.log(checkPart("miidim")) // true
// "miidim" can be a palindrome after removing the first "i"

console.log(checkPart("midu")) // false
// "midu" cannot be a palindrome after removing a character

console.log(checkPart("lolol")) // true

console.log(checkPart("yolooloy")) // true

console.log(checkPart("zzzoonzzz")) // true