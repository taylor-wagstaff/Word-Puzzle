let score = []
const param = [
  [1, 8, 15],
  [0, 7, 14],
]

export function connects(letters) {
  test(param, letters)
}

function test(param, letters) {
  const repeats = []

  param.map((num, i) => {
    console.log(num)
    letters.map((char, index) => {
      if (index === num[0] && char !== '') {
        repeats.push(char)
      }
    })
  })

  ///
  console.log(repeats)
  console.log(score)
}
