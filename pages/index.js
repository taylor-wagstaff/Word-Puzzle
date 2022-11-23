import Head from 'next/head'

import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import { WORDS } from '../components/wordlist'
import { fetchWords } from './api/dictionary'

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
// Random word each date
// add directions for gameplay
// styling

export default function Home() {
  const [randomWord, setRandomWord] = useState([])
  const [words, setWords] = useState([])
  const [start, setStart] = useState(false)
  const [letter, setLetter] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ])

  // random word
  const handleClick = () => {
    // shuffle array and pick random

    const newWord = getRandomWords()
    const splitWord = newWord.split('')

    setRandomWord(newWord)
    setLetter([
      splitWord[0],
      '',
      '',
      '',
      '',
      '',
      splitWord[1],
      '',
      '',
      '',
      '',
      '',
      splitWord[2],
      '',
      '',
      '',
      '',
      '',
      splitWord[3],
      '',
      '',
      '',
      '',
      '',
      splitWord[4],
      '',
      '',
      '',
      '',
      '',
      splitWord[5],
      '',
      '',
      '',
      '',
      '',
    ])
  }

  // Add letter to the array
  const handleChange = (event, param1) => {
    const regex = /^[a-zA-Z]+$/
    const result = event.target.value

    if (result.match(regex)) {
      // remove letter at postion, only one
      letter.splice(param1, 1)
      // new array insert at its position
      setLetter([...letter.slice(0, param1), result, ...letter.slice(param1)])
      setStart(true)
      // check if word matches after each state change
    }
  }

  // Backspace
  const onKeyDown = (event) => {}

  function log() {
    return [...letter.join('')]
  }

  log()

  //slice array into individual words
  const sliceIntoChunks = async () => {
    const res = []
    const chunkSize = 6
    for (let i = 0; i < letter.length; i += chunkSize) {
      const chunk = letter.slice(i, i + chunkSize).join('')
      res.push(chunk)
    }
    return setWords(res)
  }

  //check if word is an actual word
  useEffect(() => {
    sliceIntoChunks(letter)
    setStart(false)
    // const wordOne = data[0]
    // console.log(` this is wordOne ${wordOne}`)
    console.log(` this is the words useState: ${words[0]}`)
    fetchWords(words[0])
      .then((res) => {
        // console.log('its a word')
        console.dir(res.body)
      })
      .finally(() => {
        // console.log('word is checked')
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [start])

  // console.log(words)

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
