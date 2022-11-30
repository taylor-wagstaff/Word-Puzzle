export function connects(letters) {

  const param = [
    [0, 7, 14],
    [1, 8, 15],
    [2, 9, 16],
    [3, 10, 17],
    [6, 13, 20],
  ]
  const repeats = []
  let score = 0

  param.map((x) => {
    x.map((num, i) => {
      letters.map((letter, index) => {
        if (index === num) {
          repeats.push(letter)
        }
      })
    })
  })

  const res = []
  const chunkSize = 3
  for (let i = 0; i < repeats.length; i += chunkSize) {
    const chunk = repeats.slice(i, i + chunkSize)
    res.push(chunk)
  }

  // Going Across three times // check letters are equal
  // [0, 7, 14]
  const result = res[0].every((x) => {
    if (x === res[0][2] && x !== '') {
      return true
    } else {
      return false
    }
  })
  // [1, 8, 15],
  const result2 = res[1].every((x) => {
    if (x === res[1][2] && x !== '') {
      return true
    } else {
      return false
    }
  })
  // [2, 9, 16],
  const result3 = res[2].every((x) => {
    if (x === res[2][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [3, 10, 17],
  const result4 = res[3].every((x) => {
    if (x === res[3][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [6, 13, 20],
  const result5 = res[4].every((x) => {
    if (x === res[4][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // if letters are equal add to score
  if (result === true) {
    score = score + 15
  }
  if (result2 === true) {
    score = score + 15
  }
  if (result3 === true) {
    score = score + 15
  }
  if (result4 === true) {
    score = score + 15
  }
  if (result5 === true) {
    score = score + 15
  }

  ///

  // console.log(result)
  console.log('res', res)
  console.log(score)
  return score
}

// function test(param, letters) {
//   const repeats = []
//   let score = 0

//   param.map((x) => {
//     x.map((num, i) => {
//       letters.map((letter, index) => {
//         if (index === num) {
//           repeats.push(letter)
//         }
//       })
//     })
//   })

//   const res = []
//   const chunkSize = 3
//   for (let i = 0; i < repeats.length; i += chunkSize) {
//     const chunk = repeats.slice(i, i + chunkSize)
//     res.push(chunk)
//   }

//   // Going Across three times // check letters are equal
//   // [0, 7, 14]
//   const result = res[0].every((x) => {
//     if (x === res[0][2] && x !== '') {
//       return true
//     } else {
//       return false
//     }
//   })
//   // [1, 8, 15],
//   const result2 = res[1].every((x) => {
//     if (x === res[1][2] && x !== '') {
//       return true
//     } else {
//       return false
//     }
//   })
//   // [2, 9, 16],
//   const result3 = res[2].every((x) => {
//     if (x === res[2][2] && x !== '') {
//       return true
//     } else {
//       return false
//     }
//   })

//   // [3, 10, 17],
//   const result4 = res[3].every((x) => {
//     if (x === res[3][2] && x !== '') {
//       return true
//     } else {
//       return false
//     }
//   })

//   // [6, 13, 20],
//   const result5 = res[4].every((x) => {
//     if (x === res[4][2] && x !== '') {
//       return true
//     } else {
//       return false
//     }
//   })

//   // if letters are equal add to score
//   if (result === true) {
//     score = score + 15
//   }
//   if (result2 === true) {
//     score = score + 15
//   }
//   if (result3 === true) {
//     score = score + 15
//   }
//   if (result4 === true) {
//     score = score + 15
//   }
//   if (result5 === true) {
//     score = score + 15
//   }

//   ///

//   // console.log(result)
//   console.log('res', res)
//   console.log(score)
//   return score
// }
