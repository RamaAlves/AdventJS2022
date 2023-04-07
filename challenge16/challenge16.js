function fixLetter(letter) {
  const regexSpace =/\s+/g; 
  const regexSpaceSignal = /\s{1}([,\.\!\?])/g
  const regexQuestion =/\?+/g; 
  const regexComma =/,\s*/g;
  const regexSanta= /santa\sclaus/ig;
  const regexFirstLetter = /^[a-z]|[\.\?\!]+\s[a-z]/gi
  const regexFinal = /([a-z])$/gi
  const replacedStr = letter
      .trim()    
      .replaceAll(regexSpace, ' ')
      .replaceAll(regexSpaceSignal, '$1')
      .replaceAll(regexQuestion, '?')
      .replaceAll(regexComma, ', ')
      .replaceAll(regexSanta , "Santa Claus")
      .replaceAll(regexFirstLetter , x=>x.toUpperCase())
      .replaceAll(regexFinal, '$1.')

  return replacedStr
}

console.log(fixLetter(` hello ,  how are you??     do you know if santa claus exists?  i really hope he does!  bye    `))
// Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.

console.log(fixLetter("  Hi Santa claus . I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
// Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?

console.log(fixLetter("  hi    santa    claus "))

// Expected:
// "Hi Santa Claus."

console.log(fixLetter("  hi    santa    claus . santa claus is the best  "))

// Expected:
// "Hi Santa Claus. Santa Claus is the best."

console.log(fixLetter('  hi,santa claus. are you there ?   '))

// Expected:
// "Hi, Santa Claus. Are you there?"

console.log(fixLetter("Hey santa Claus .  I want a bike.   I want a videogame! "))

// Expected:
// "Hey Santa Claus. I want a bike. I want a videogame!"