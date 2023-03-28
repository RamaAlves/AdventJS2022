function createCube(size) {
    let space = ' ';
    let l = '/';
    let w ='\\' ;
    let h = '_';
    let cube='';
    let reverseCount=1;
  
    for (let i = 0; i < size*2; i++){
        if (i<size){
            cube += upCube(size, i)
        }else{
            if((size*2-1)===i){
                cube += downCube(size, i, reverseCount)  
            }else{
                cube += downCube(size, i, reverseCount)+'\n';
                reverseCount+=2;
            }
        }
    }
    function upCube(size, index){
        let _level='';
        _level += space.repeat(size-index-1)
        _level +=l
        _level +=(w+l).repeat(index)
        _level +=(w+h).repeat(size)
        _level +=w+'\n'
  
        return _level
    }
    function downCube(size, index, rCount){
        let _level='';
        _level += space.repeat(index-size)
        _level +=w
        _level +=(l+w).repeat(index-rCount)
        _level +=(l+h).repeat(size)
        _level +=l
  
        return _level
    }
    return cube
}

// ---- test ----

console.log(createCube(3))

// output:

//   /\_\_\_\
//  /\/\_\_\_\
// /\/\/\_\_\_\
// \/\/\/_/_/_/
//  \/\/_/_/_/
//   \/_/_/_/

console.log(createCube(1))

// output:

// /\_\
// \/_/

console.log(createCube(2))

// output:

//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/

console.log(createCube(10))

// Expected:
// "         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n        \\/\\/_/_/_/_/_/_/_/_/_/_/\n         \\/_/_/_/_/_/_/_/_/_/_/"