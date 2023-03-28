function distributeGifts(packOfGifts, reindeers) {
    let packWeight = 0
    let canCarry = 0
  
    for (const item of packOfGifts){
      packWeight+= item.length;
    }
    
    for (const reindeer of reindeers){
      canCarry+= (reindeer.length*2);
    }
    
    return Math.trunc(canCarry/packWeight)
  }

// ---- test ----

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

// pack weights 4 + 4 + 4 = 12
// reindeers can carry (2 * 6) + (2 * 6) = 24
distributeGifts(packOfGifts, reindeers) // 2
