function countHours(year, holidays) {
    let extraHours = 0;
    for (let day of holidays){
      let weekday = new Date (`${day}, ${year}`)
      if (weekday.getDay()!==0 && weekday.getDay()!==6){
        extraHours+=2;
      }
    }
    return extraHours;
  }

// ---- test ----

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays) // 2 days -> 4 extra hours in the year


console.log(countHours(2023, ['01/06', '04/01', '12/25']))

// Expected:
// 4

console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))

// Expected:
// 10

console.log(countHours(2000, ['01/01']))

// Expected:
// 0