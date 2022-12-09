export function connects(letters) {
  let score = 0

  const dir1 = [0, 7, 14, 21, 28, 35]
  const dir2 = [5, 10, 15, 20, 25, 30]
  const dir3 = [1, 8, 15, 22, 29]
  const dir4 = [6, 13, 20, 27, 34]
  const dir5 = [11, 16, 21, 26, 31]
  const dir6 = [4, 9, 14, 19, 24]
  const dir7 = [2, 9, 16, 23]
  const dir8 = [12, 19, 26, 33]
  const dir9 = [17, 22, 27, 32]
  const dir10 = [3, 8, 13, 18]
  const dir11 = [3, 10, 17]
  const dir12 = [18, 25, 32]
  const dir13 = [23, 28, 33]
  const dir14 = [2, 7, 12]

  const repeats = []
  const repeats2 = []
  const repeats3 = []
  const repeats4 = []
  const repeats5 = []
  const repeats6 = []
  const repeats7 = []
  const repeats8 = []
  const repeats9 = []
  const repeats10 = []
  const repeats11 = []
  const repeats12 = []
  const repeats13 = []
  const repeats14 = []

  // check for Six matches across [0, 7, 14, 21, 28, 35]
  ////////////////////////////
  dir1.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats.push(letter)
      }
    })
  })

  const newArr = repeats.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  // want the consective values positions
  const findDuplicates = newArr.filter((item, index) => newArr.indexOf(item) !== index)
 

  const values = []


  newArr.map((letter, i) => {
    dir1.map((num, index) => {
      if (index === i && letter != '$') {
        
        values.push(num)
      }
    })
  })

  /////////////////////////

  let matchCount = newArr.join('')
  let LetterCounter = []

  const s = matchCount.match(/([a-zA-Z])\1*/g) || []
  s.map((itm) => {
    LetterCounter.push([itm.charAt(0), itm.length])
  })

  LetterCounter.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////

  ////////////////////////////
  dir2.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats2.push(letter)
      }
    })
  })

  const newArr2 = repeats2.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount2 = newArr2.join('')
  let LetterCounter2 = []

  const s2 = matchCount2.match(/([a-zA-Z])\1*/g) || []
  s2.map((itm) => {
    LetterCounter2.push([itm.charAt(0), itm.length])
  })

  LetterCounter2.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir3.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats3.push(letter)
      }
    })
  })

  const newArr3 = repeats3.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount3 = newArr3.join('')
  let LetterCounter3 = []

  const s3 = matchCount3.match(/([a-zA-Z])\1*/g) || []
  s3.map((itm) => {
    LetterCounter3.push([itm.charAt(0), itm.length])
  })

  LetterCounter3.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir4.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats4.push(letter)
      }
    })
  })

  const newArr4 = repeats4.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount4 = newArr4.join('')
  let LetterCounter4 = []

  const s4 = matchCount4.match(/([a-zA-Z])\1*/g) || []
  s4.map((itm) => {
    LetterCounter4.push([itm.charAt(0), itm.length])
  })

  LetterCounter4.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir5.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats5.push(letter)
      }
    })
  })

  const newArr5 = repeats5.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount5 = newArr5.join('')
  let LetterCounter5 = []

  const s5 = matchCount5.match(/([a-zA-Z])\1*/g) || []
  s5.map((itm) => {
    LetterCounter5.push([itm.charAt(0), itm.length])
  })

  LetterCounter5.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir6.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats6.push(letter)
      }
    })
  })

  const newArr6 = repeats6.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount6 = newArr6.join('')
  let LetterCounter6 = []

  const s6 = matchCount6.match(/([a-zA-Z])\1*/g) || []
  s6.map((itm) => {
    LetterCounter6.push([itm.charAt(0), itm.length])
  })

  LetterCounter6.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir7.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats7.push(letter)
      }
    })
  })

  const newArr7 = repeats7.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount7 = newArr7.join('')
  let LetterCounter7 = []

  const s7 = matchCount7.match(/([a-zA-Z])\1*/g) || []
  s7.map((itm) => {
    LetterCounter7.push([itm.charAt(0), itm.length])
  })

  LetterCounter7.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir8.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats8.push(letter)
      }
    })
  })

  const newArr8 = repeats8.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount8 = newArr8.join('')
  let LetterCounter8 = []

  const s8 = matchCount8.match(/([a-zA-Z])\1*/g) || []
  s8.map((itm) => {
    LetterCounter8.push([itm.charAt(0), itm.length])
  })

  LetterCounter8.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir9.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats9.push(letter)
      }
    })
  })

  const newArr9 = repeats9.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount9 = newArr9.join('')
  let LetterCounter9 = []

  const s9 = matchCount9.match(/([a-zA-Z])\1*/g) || []
  s9.map((itm) => {
    LetterCounter9.push([itm.charAt(0), itm.length])
  })

  LetterCounter9.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir10.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats10.push(letter)
      }
    })
  })

  const newArr10 = repeats10.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount10 = newArr10.join('')
  let LetterCounter10 = []

  const s10 = matchCount10.match(/([a-zA-Z])\1*/g) || []
  s10.map((itm) => {
    LetterCounter10.push([itm.charAt(0), itm.length])
  })

  LetterCounter10.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir11.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats11.push(letter)
      }
    })
  })

  const newArr11 = repeats11.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount11 = newArr11.join('')
  let LetterCounter11 = []

  const s11 = matchCount11.match(/([a-zA-Z])\1*/g) || []
  s11.map((itm) => {
    LetterCounter11.push([itm.charAt(0), itm.length])
  })

  LetterCounter11.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir12.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats12.push(letter)
      }
    })
  })

  const newArr12 = repeats12.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount12 = newArr12.join('')
  let LetterCounter12 = []

  const s12 = matchCount12.match(/([a-zA-Z])\1*/g) || []
  s12.map((itm) => {
    LetterCounter12.push([itm.charAt(0), itm.length])
  })

  LetterCounter12.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir13.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats13.push(letter)
      }
    })
  })

  const newArr13 = repeats13.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount13 = newArr13.join('')
  let LetterCounter13 = []

  const s13 = matchCount13.match(/([a-zA-Z])\1*/g) || []
  s13.map((itm) => {
    LetterCounter13.push([itm.charAt(0), itm.length])
  })

  LetterCounter13.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////
  ////////////////////////////
  dir14.map((num, i) => {
    letters.map((letter, index) => {
      if (index === num) {
        repeats14.push(letter)
      }
    })
  })

  const newArr14 = repeats14.map((x) => {
    if (x === '') {
      return '$'
    }
    return x
  })

  let matchCount14 = newArr14.join('')
  let LetterCounter14 = []

  const s14 = matchCount14.match(/([a-zA-Z])\1*/g) || []
  s14.map((itm) => {
    LetterCounter14.push([itm.charAt(0), itm.length])
  })

  LetterCounter14.map((x) => {
    if (x[1] === 3) {
      score = score + 15
    }
    if (x[1] === 4) {
      score = score + 25
    }
    if (x[1] === 5) {
      score = score + 35
    }
    if (x[1] === 6) {
      score = score + 45
    }
  })

  ////////////////////////////

  return score
}
