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

  const letterValues = []
  const letterValues2 = []
  const letterValues3 = []
  const letterValues4 = []
  const letterValues5 = []
  const letterValues6 = []
  const letterValues7 = []
  const letterValues8 = []
  const letterValues9 = []
  const letterValues10 = []
  const letterValues11 = []
  const letterValues12 = []
  const letterValues13 = []
  const letterValues14 = []

  const letterMap = []
  const letterMap2 = []
  const letterMap3 = []
  const letterMap4 = []
  const letterMap5 = []
  const letterMap6 = []
  const letterMap7 = []
  const letterMap8 = []
  const letterMap9 = []
  const letterMap10 = []
  const letterMap11 = []
  const letterMap12 = []
  const letterMap13 = []
  const letterMap14 = []

  const directionValues = []

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
  //////////////////////////

  LetterCounter.map((x) => {
    if (x[1] === 3) {
      letterValues.push(x[0])
    }
    if (x[1] === 4) {
      letterValues.push(x[0])
    }
    if (x[1] === 5) {
      letterValues.push(x[0])
    }
    if (x[1] === 6) {
      letterValues.push(x[0])
    }
  })

  letterValues.map((x, i) => {
    // letter values is ['c']
    newArr.map((y, index) => {
      // if "c" equal y consectively push the index at where it occurs.
      // newarr (6) ['a', '$', 'a', 'a', 'a', 'a']
      if (x === y) {
        letterMap.push(index)
      }
    })
  })

  // if letter map contain consective numbers push to new..

  const test = []

  letterMap.map((x) => test.push(x === x + 1))

  letterMap.map((x, i) => {
    dir1.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  // console.log('newarr', newArr)
  // console.log('letterMap', letterMap)
  console.log('test', test)

  console.log('directionValues', directionValues)

  //////////////////////////
  //////////////////////////

  LetterCounter2.map((x) => {
    if (x[1] >= 3) {
      letterValues2.push(x[0])
    }
  })

  letterValues2.map((x, i) => {
    newArr2.map((y, index) => {
      if (x === y) {
        letterMap2.push(index)
      }
    })
  })

  letterMap2.map((x, i) => {
    dir2.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter3.map((x) => {
    if (x[1] >= 3) {
      letterValues3.push(x[0])
    }
  })

  letterValues3.map((x, i) => {
    newArr3.map((y, index) => {
      if (x === y) {
        letterMap3.push(index)
      }
    })
  })

  letterMap3.map((x, i) => {
    dir3.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter4.map((x) => {
    if (x[1] >= 3) {
      letterValues4.push(x[0])
    }
  })

  letterValues4.map((x, i) => {
    newArr4.map((y, index) => {
      if (x === y) {
        letterMap4.push(index)
      }
    })
  })

  letterMap4.map((x, i) => {
    dir4.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter5.map((x) => {
    if (x[1] >= 3) {
      letterValues5.push(x[0])
    }
  })

  letterValues5.map((x, i) => {
    newArr5.map((y, index) => {
      if (x === y) {
        letterMap5.push(index)
      }
    })
  })

  letterMap5.map((x, i) => {
    dir5.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter6.map((x) => {
    if (x[1] >= 3) {
      letterValues6.push(x[0])
    }
  })

  letterValues6.map((x, i) => {
    newArr6.map((y, index) => {
      if (x === y) {
        letterMap6.push(index)
      }
    })
  })

  letterMap6.map((x, i) => {
    dir6.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter7.map((x) => {
    if (x[1] >= 3) {
      letterValues7.push(x[0])
    }
  })

  letterValues7.map((x, i) => {
    newArr7.map((y, index) => {
      if (x === y) {
        letterMap7.push(index)
      }
    })
  })

  letterMap7.map((x, i) => {
    dir7.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter8.map((x) => {
    if (x[1] >= 3) {
      letterValues8.push(x[0])
    }
  })

  letterValues8.map((x, i) => {
    newArr8.map((y, index) => {
      if (x === y) {
        letterMap8.push(index)
      }
    })
  })

  letterMap8.map((x, i) => {
    dir8.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter9.map((x) => {
    if (x[1] >= 3) {
      letterValues9.push(x[0])
    }
  })

  letterValues9.map((x, i) => {
    newArr9.map((y, index) => {
      if (x === y) {
        letterMap9.push(index)
      }
    })
  })

  letterMap9.map((x, i) => {
    dir9.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter10.map((x) => {
    if (x[1] >= 3) {
      letterValues10.push(x[0])
    }
  })

  letterValues10.map((x, i) => {
    newArr10.map((y, index) => {
      if (x === y) {
        letterMap10.push(index)
      }
    })
  })

  letterMap10.map((x, i) => {
    dir10.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter11.map((x) => {
    if (x[1] >= 3) {
      letterValues11.push(x[0])
    }
  })

  letterValues11.map((x, i) => {
    newArr11.map((y, index) => {
      if (x === y) {
        letterMap11.push(index)
      }
    })
  })

  letterMap11.map((x, i) => {
    dir11.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter12.map((x) => {
    if (x[1] >= 3) {
      letterValues12.push(x[0])
    }
  })

  letterValues12.map((x, i) => {
    newArr12.map((y, index) => {
      if (x === y) {
        letterMap12.push(index)
      }
    })
  })

  letterMap12.map((x, i) => {
    dir12.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter13.map((x) => {
    if (x[1] >= 3) {
      letterValues13.push(x[0])
    }
  })

  letterValues13.map((x, i) => {
    newArr13.map((y, index) => {
      if (x === y) {
        letterMap13.push(index)
      }
    })
  })

  letterMap13.map((x, i) => {
    dir13.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////
  //////////////////////////

  LetterCounter14.map((x) => {
    if (x[1] >= 3) {
      letterValues14.push(x[0])
    }
  })

  letterValues14.map((x, i) => {
    newArr14.map((y, index) => {
      if (x === y) {
        letterMap14.push(index)
      }
    })
  })

  letterMap14.map((x, i) => {
    dir14.map((y, index) => {
      if (x === index) {
        directionValues.push(y)
      }
    })
  })

  ////////////////////////////////

  return [score, directionValues]
}
