import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import { WORDS } from '../components/wordlist'


const getRandomWords = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}

// To do:
// make only letters in input
// check each word with api from parts of array after each handlechange
// change colour if word is correct
// conditions for letter going down and across then...
// add points based on letter values to a point summary
// change colour if letters go in certain directions
// add directions for gameplay
// styling


export default function Home() {
 
  const [randomWord, setRandomWord] = useState([])
  const [letter, setLetter] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
  ])

  // random word
  const handleClick = () => {
    // shuffle array and pick random

    const newWord = getRandomWords()
    const splitWord = newWord.split('')

    setRandomWord(newWord)
    setLetter([
      splitWord[0],
      '1',
      '2',
      '3',
      '4',
      '5',
      splitWord[1],
      '7',
      '8',
      '9',
      '10',
      '11',
      splitWord[2],
      '13',
      '14',
      '15',
      '16',
      '17',
      splitWord[3],
      '19',
      '20',
      '21',
      '22',
      '23',
      splitWord[4],
      '25',
      '26',
      '27',
      '28',
      '29',
      splitWord[5],
      '31',
      '32',
      '33',
      '34',
      '35',
    ])
    //removing postion from array

    //  replace items with newWord at postion remove

    // const replacedSet = letter.map((letters, index) => {
    //   const splitWord = newWord.split('')
    //   const remove = [0, 6, 12, 18, 24, 30]

    //   console.log(`this is letters: ${splitWord}`)
    //   console.log(`this is index of each letter: ${index}`)

    //   if ((index === 0, 6, 12, 18, 24, 30)) {
    //     console.log('conditions met')

    //     const newLetterList = [
    //       // Items before the insertion point:
    //       ...letter.slice(0, index),
    //       // New item:
    //       splitWord,
    //       // Items after the insertion point:
    //       ...letter.slice(index),
    //     ]

    //     setLetter(newLetterList)
    //   } else {
    //     // The rest haven't changed
    //     return letters
    //   }
    // })
    // console.log(letter)
  }

  // Add letter
  const handleChange = (event, param1) => {
    const regex = /^[a-zA-Z]+$/
    const result = event.target.value

    if (result.match(regex)) {
      // remove letter at postion, only one
      letter.splice(param1, 1)
      // new array insert at its position
      setLetter([...letter.slice(0, param1), result, ...letter.slice(param1)])
      console.log(param1)

      // check if word matches after each state change
    }
  }

  // Backspace
  const onKeyDown = (event) => {
    // const array = [...letter]
    // const result = event.target.value
    // const regex = /^[a-zA-Z]+$/
    // const index = array.indexOf(event.target.value)
    // if (event.keyCode === 8 && result.match(regex)) {
    //   setLetter([...letter.slice(0, index), ...letter.slice(index)])
    // }
  }

  function log() {
    return console.log(letter)
  }

  log()

  return (
    <div className={styles.container}>
      <Head>
        <title>Word Game!</title>
        <meta name="word game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <div className="game-board">
          <div className="box">
            {/* frist letter */}
            <div className="letter">{randomWord[0]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 1)}
              onKeyDown={(event) => onKeyDown(event, 1)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 2)}
              onKeyDown={(event) => onKeyDown(event, 2)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 3)}
              onKeyDown={(event) => onKeyDown(event, 3)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 4)}
              onKeyDown={(event) => onKeyDown(event, 4)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 5)}
              onKeyDown={(event) => onKeyDown(event, 5)}
            ></input>
          </div>
          <div className="box">
            {/* second letter */}
            <div className="letter">{randomWord[1]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 7)}
              onKeyDown={(event) => onKeyDown(event, 7)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 8)}
              onKeyDown={(event) => onKeyDown(event, 8)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 9)}
              onKeyDown={(event) => onKeyDown(event, 9)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 10)}
              onKeyDown={(event) => onKeyDown(event, 10)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 11)}
              onKeyDown={(event) => onKeyDown(event, 11)}
            ></input>
          </div>
          <div className="box">
            {/* third letter */}
            <div className="letter">{randomWord[2]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 13)}
              onKeyDown={(event) => onKeyDown(event, 13)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 14)}
              onKeyDown={(event) => onKeyDown(event, 14)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 15)}
              onKeyDown={(event) => onKeyDown(event, 15)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 16)}
              onKeyDown={(event) => onKeyDown(event, 16)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 17)}
              onKeyDown={(event) => onKeyDown(event, 17)}
            ></input>
          </div>
          <div className="box">
            {/* fourth letter */}
            <div className="letter">{randomWord[3]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 19)}
              onKeyDown={(event) => onKeyDown(event, 19)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 20)}
              onKeyDown={(event) => onKeyDown(event, 20)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 21)}
              onKeyDown={(event) => onKeyDown(event, 21)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 22)}
              onKeyDown={(event) => onKeyDown(event, 22)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 23)}
              onKeyDown={(event) => onKeyDown(event, 23)}
            ></input>
          </div>
          <div className="box">
            {/* fifth letter */}
            <div className="letter">{randomWord[4]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 25)}
              onKeyDown={(event) => onKeyDown(event, 25)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 26)}
              onKeyDown={(event) => onKeyDown(event, 26)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 27)}
              onKeyDown={(event) => onKeyDown(event, 27)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 28)}
              onKeyDown={(event) => onKeyDown(event, 28)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 29)}
              onKeyDown={(event) => onKeyDown(event, 29)}
            ></input>
          </div>
          <div className="box">
            {/* six letter */}
            <div className="letter">{randomWord[5]}</div>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 31)}
              onKeyDown={(event) => onKeyDown(event, 31)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 32)}
              onKeyDown={(event) => onKeyDown(event, 32)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 33)}
              onKeyDown={(event) => onKeyDown(event, 33)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 34)}
              onKeyDown={(event) => onKeyDown(event, 34)}
            ></input>
          </div>
          <div className="box">
            <input
              id="letter"
              type="text"
              maxLength={1}
              onChange={(event) => handleChange(event, 35)}
              onKeyDown={(event) => onKeyDown(event, 35)}
            ></input>
          </div>
        </div>
        <div></div>
      </div>
      <button type="button" className={styles.button} onClick={handleClick}>
        Generate
      </button>
    </div>
  )
}
