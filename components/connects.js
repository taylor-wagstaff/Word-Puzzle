export function connects(letters) {
  const param = [
    [0, 7, 14],
    [1, 8, 15],
    [2, 9, 16],
    [3, 10, 17],
    [6, 13, 20],
    [12, 19, 26],
    [18, 25, 32],
    [2, 7, 12],
    [3, 8, 18],
    [4, 9, 14],
    [5, 10, 15],
    [11, 16, 21],
    [17, 22, 27],
    [23, 28, 33],
  ]

  const param4 = [
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [6, 13, 20, 27],
    [12, 19, 26, 33],
    [3, 8, 13, 18],
    [4, 9, 14, 19],
    [5, 10, 15, 20],
    [11, 16, 21, 26],
    [17, 22, 27, 32],
  ]

  const param5 = [
    [0, 7, 14, 21, 28],
    [1, 8, 15, 22, 29],
    [6, 13, 20, 27, 34],
    [4, 9, 14, 19, 24],
    [5, 10, 15, 20, 25],
    [11, 16, 21, 26, 31],
  ]
  const param6 = [
    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30],
  ]

  const paramNext = [
    [7, 14, 21],
    [8, 15, 22],
    [9, 16, 23],
  ]

  const repeats = []
  const repeats4 = []
  const repeats5 = []
  const repeats6 = []
  const repeatsNext = []
  let score = 0

  // check for three matches
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

  // check for Four matches
  param4.map((x) => {
    x.map((num, i) => {
      letters.map((letter, index) => {
        if (index === num) {
          repeats4.push(letter)
        }
      })
    })
  })
  const res4 = []
  const chunkSize4 = 4
  for (let i = 0; i < repeats4.length; i += chunkSize4) {
    const chunk = repeats4.slice(i, i + chunkSize4)
    res4.push(chunk)
  }

  // check for Five matches
  param5.map((x) => {
    x.map((num, i) => {
      letters.map((letter, index) => {
        if (index === num) {
          repeats5.push(letter)
        }
      })
    })
  })
  const res5 = []
  const chunkSize5 = 5
  for (let i = 0; i < repeats5.length; i += chunkSize5) {
    const chunk = repeats5.slice(i, i + chunkSize5)
    res5.push(chunk)
  }

  // check for Six matches
  param6.map((x) => {
    x.map((num, i) => {
      letters.map((letter, index) => {
        if (index === num) {
          repeats6.push(letter)
        }
      })
    })
  })
  const res6 = []
  const chunkSize6 = 6
  for (let i = 0; i < repeats6.length; i += chunkSize6) {
    const chunk = repeats6.slice(i, i + chunkSize6)
    res6.push(chunk)
  }

  // NEXT check for three matches
  paramNext.map((x) => {
    x.map((num, i) => {
      letters.map((letter, index) => {
        if (index === num) {
          repeatsNext.push(letter)
        }
      })
    })
  })

  const resNext = []
  const chunkSizeNext = 3
  for (let i = 0; i < repeatsNext.length; i += chunkSizeNext) {
    const chunk = repeatsNext.slice(i, i + chunkSizeNext)
    resNext.push(chunk)
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

  // [12, 19, 26],
  const result6 = res[5].every((x) => {
    if (x === res[5][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [18, 25, 32],
  const result7 = res[6].every((x) => {
    if (x === res[6][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // Going Across-left three times // check letters are equal
  // [2, 7, 12]
  const result8 = res[7].every((x) => {
    if (x === res[7][2] && x !== '') {
      return true
    } else {
      return false
    }
  })
  // [3, 8, 18],
  const result9 = res[8].every((x) => {
    if (x === res[8][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [4, 9, 14],
  const result10 = res[9].every((x) => {
    if (x === res[9][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [5, 10, 15],
  const result11 = res[10].every((x) => {
    if (x === res[10][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [11, 16, 21],
  const result12 = res[11].every((x) => {
    if (x === res[11][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [17, 22, 27],
  const result13 = res[12].every((x) => {
    if (x === res[12][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [23, 28, 33],
  const result14 = res[13].every((x) => {
    if (x === res[13][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // Four matches going across
  // [0, 7, 14, 21],
  const result15 = res4[0].every((x) => {
    if (x === res4[0][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [1, 8, 15, 22],
  const result16 = res4[1].every((x) => {
    if (x === res4[1][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [2, 9, 16, 23],
  const result17 = res4[2].every((x) => {
    if (x === res4[2][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [6, 13, 20, 27],
  const result18 = res4[3].every((x) => {
    if (x === res4[3][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [12, 19, 26, 33],
  const result19 = res4[4].every((x) => {
    if (x === res4[4][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [3, 8, 13, 18],
  const result20 = res4[5].every((x) => {
    if (x === res4[5][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [4, 9, 14, 19],
  const result21 = res4[6].every((x) => {
    if (x === res4[6][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [5, 10, 15, 20],
  const result22 = res4[7].every((x) => {
    if (x === res4[7][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [11, 16, 21, 26],
  const result23 = res4[8].every((x) => {
    if (x === res4[8][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [17, 22, 27, 32],
  const result24 = res4[9].every((x) => {
    if (x === res4[9][3] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // Five matches going across

  //  [0, 7, 14, 21, 28],
  const result25 = res5[0].every((x) => {
    if (x === res5[0][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [1, 8, 15, 22, 29],
  const result26 = res5[1].every((x) => {
    if (x === res5[1][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // Five matches going across-left

  // [6, 13, 20, 27, 34],
  const result27 = res5[2].every((x) => {
    if (x === res5[2][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [4, 9, 14, 19, 24],
  const result28 = res5[3].every((x) => {
    if (x === res5[3][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [5, 10, 15, 20, 25],
  const result29 = res5[4].every((x) => {
    if (x === res5[4][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [11, 16, 21, 26, 31],
  const result30 = res5[5].every((x) => {
    if (x === res5[5][4] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [0, 7, 14, 21, 28, 35],
  const result31 = res6[0].every((x) => {
    if (x === res6[0][5] && x !== '') {
      return true
    } else {
      return false
    }
  })
  //[5, 10, 15, 20, 25, 30],
  const result32 = res6[1].every((x) => {
    if (x === res6[1][5] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // The Next Three matches
  // [7, 14, 21]
  const result33 = resNext[0].every((x) => {
    if (result15 === false && x === resNext[0][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  //  [8, 15, 22],
  const result34 = resNext[1].every((x) => {
    if (result16 === false && x === resNext[1][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // [9, 16, 23],
  const result35 = resNext[2].every((x) => {
    if (result17 === false && x === resNext[2][2] && x !== '') {
      return true
    } else {
      return false
    }
  })

  // if three letters are equal add to score
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
  if (result6 === true) {
    score = score + 15
  }
  if (result7 === true) {
    score = score + 15
  }
  if (result8 === true) {
    score = score + 15
  }
  if (result9 === true) {
    score = score + 15
  }
  if (result10 === true) {
    score = score + 15
  }
  if (result11 === true) {
    score = score + 15
  }
  if (result12 === true) {
    score = score + 15
  }
  if (result13 === true) {
    score = score + 15
  }
  if (result14 === true) {
    score = score + 15
  }
  /// check four going across
  if (result15 === true) {
    score = score + 10
  }
  if (result16 === true) {
    score = score + 10
  }
  if (result17 === true) {
    score = score + 10
  }
  if (result18 === true) {
    score = score + 10
  }
  if (result19 === true) {
    score = score + 10
  }
  if (result20 === true) {
    score = score + 10
  }
  if (result21 === true) {
    score = score + 10
  }
  if (result22 === true) {
    score = score + 10
  }
  if (result23 === true) {
    score = score + 10
  }
  if (result24 === true) {
    score = score + 10
  }
  /// check five going across
  if (result25 === true) {
    score = score + 10
  }
  if (result26 === true) {
    score = score + 10
  }
  if (result27 === true) {
    score = score + 10
  }
  if (result28 === true) {
    score = score + 10
  }
  if (result29 === true) {
    score = score + 10
  }
  if (result30 === true) {
    score = score + 10
  }
  /// check six going across
  if (result31 === true) {
    score = score + 10
  }
  if (result32 === true) {
    score = score + 10
  }
  //////////////////////////////////
  // the Next Three Matches
  if (result33 === true) {
    score = score + 15
  }
  if (result34 === true) {
    score = score + 15
  }
  if (result35 === true) {
    score = score + 15
  }

  // console.log(result)
  // console.log('res5', res5)
  console.log(score)
  return score
}
