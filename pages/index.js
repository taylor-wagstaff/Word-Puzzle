import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

import { WORDS } from '../components/wordlist'
import { fetchWords } from './api/dictionary'

const getRandomWords = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}

// To do:
// make only letters in input (unresolved)
// check each word with api from parts of array after each handlechange (done)
// change colour if word is correct (done)
// Fix first word has to be different (done)
// conditions for letter going down and across then...
// add points based on letter values to a point summary
// change colour if letters go in certain directions

// Random word each date
// add directions for gameplay
// styling

export default function Home() {
  const [randomWord, setRandomWord] = useState([])
  const [words, setWords] = useState(['', '', '', '', '', ''])
  const [start, setStart] = useState(false)
  //styles for each word if correct
  const [oneStyle, setOneStyle] = useState(false)
  const [twoStyle, setTwoStyle] = useState(false)
  const [threeStyle, setThreeStyle] = useState(false)
  const [fourStyle, setFourStyle] = useState(false)
  const [fiveStyle, setFiveStyle] = useState(false)
  const [sixStyle, setSixStyle] = useState(false)

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
    // split letters to enter into array
    const splitWord = newWord.split('')

    setRandomWord(newWord)
    setLetter([
      splitWord[0].toLowerCase(),
      '',
      '',
      '',
      '',
      '',
      splitWord[1].toLowerCase(),
      '',
      '',
      '',
      '',
      '',
      splitWord[2].toLowerCase(),
      '',
      '',
      '',
      '',
      '',
      splitWord[3].toLowerCase(),
      '',
      '',
      '',
      '',
      '',
      splitWord[4].toLowerCase(),
      '',
      '',
      '',
      '',
      '',
      splitWord[5].toLowerCase(),
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
      // // remove letter at postion, only one
      // setLetter([...letter.splice(param1, 1)])
      // // new array insert at its position
      // setLetter([...letter.slice(0, param1), result, ...letter.slice(param1)])

      ;[...letter.splice(param1, 1, event.target.value)]
      // new array insert at its position
      setLetter([...letter])

      setStart(true)

      diagonal(letter)
    }
  }

  //slice array into individual words
  const sliceIntoChunks = async () => {
    const res = []
    const chunkSize = 6
    for (let i = 0; i < letter.length; i += chunkSize) {
      const chunk = letter
        .slice(i, i + chunkSize)
        .join('')
        .toLowerCase()
      res.push(chunk)
    }

    return setWords(res)
  }

  //check if word is an actual word
  useEffect(() => {
    // split letters into words
    sliceIntoChunks(letter)
    setStart(false)

    if (
      /[a-zA-Z]/g.test(words[0]) &&
      words[0].length === 6 &&
      words[0] !== randomWord.toLowerCase()
    ) {
      fetchWords(words[0])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[0]) {
            console.log('response is a word')

            setOneStyle(true)
          } else {
            setOneStyle(false)
          }

          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    if (/[a-zA-Z]/g.test(words[1]) && words[1].length === 6) {
      fetchWords(words[1])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[1]) {
            console.log('response is a word')
            setTwoStyle(true)
          } else {
            setTwoStyle(false)
          }
          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    if (/[a-zA-Z]/g.test(words[2]) && words[2].length === 6) {
      fetchWords(words[2])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[2]) {
            console.log('response is a word')
            setThreeStyle(true)
          } else {
            setThreeStyle(false)
          }
          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    if (/[a-zA-Z]/g.test(words[3]) && words[3].length === 6) {
      fetchWords(words[3])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[3]) {
            console.log('response is a word')
            setFourStyle(true)
          } else {
            setFourStyle(false)
          }
          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    if (/[a-zA-Z]/g.test(words[4]) && words[4].length === 6) {
      fetchWords(words[4])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[4]) {
            console.log('response is a word')
            setFiveStyle(true)
          } else {
            setFiveStyle(false)
          }
          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    }
    if (/[a-zA-Z]/g.test(words[5]) && words[5].length === 6) {
      fetchWords(words[5])
        .then((res) => {
          // console.log('its a word')
          if (res.body[0].word === words[5]) {
            console.log('response is a word')
            setSixStyle(true)
          } else {
            setSixStyle(false)
          }
          console.dir(res.body)
        })
        .finally(() => {
          // console.log('word is checked')
        })
        .catch((err) => {
          console.error(err.message)
        })
    } else {
      console.log('not a word')
    }
  }, [start])

  // Backspace
  const onKeyDown = (event, param2) => {
    const empty = ''

    if (event.key === 'Backspace') {
      // remove letter at postion, only one
      ;[...letter.splice(param2, 1, empty)]
      // new array insert at its position
      setLetter([...letter])

      colorCheck(letter)
    }
  }

  const colorCheck = (letter) => {
    const empty = ''

    switch (empty) {
      case letter[1]:
        setOneStyle(false)
        break
      case letter[2]:
        setOneStyle(false)
        break
      case letter[3]:
        setOneStyle(false)
        break
      case letter[4]:
        setOneStyle(false)
        break
      case letter[5]:
        setOneStyle(false)
        break
      case letter[7]:
        setTwoStyle(false)
        break
      case letter[8]:
        setTwoStyle(false)
        break
      case letter[9]:
        setTwoStyle(false)
        break

      case letter[10]:
        setTwoStyle(false)
        break

      case letter[11]:
        setTwoStyle(false)
        break

      case letter[13]:
        setThreeStyle(false)
        break
      case letter[14]:
        setThreeStyle(false)
        break
      case letter[15]:
        setThreeStyle(false)
        break

      case letter[16]:
        setThreeStyle(false)
        break
      case letter[17]:
        setThreeStyle(false)
        break

      case letter[19]:
        setFourStyle(false)
        break
      case letter[20]:
        setFourStyle(false)
        break
      case letter[21]:
        setFourStyle(false)
        break

      case letter[22]:
        setFourStyle(false)
        break
      case letter[23]:
        setFourStyle(false)
        break
      case letter[25]:
        setFiveStyle(false)
        break
      case letter[26]:
        setFiveStyle(false)
        break
      case letter[27]:
        setFiveStyle(false)
        break
      case letter[28]:
        setFiveStyle(false)
        break
      case letter[29]:
        setFiveStyle(false)
        break

      case letter[31]:
        setSixStyle(false)
        break

      case letter[32]:
        setSixStyle(false)
        break
      case letter[33]:
        setSixStyle(false)
        break
      case letter[34]:
        setSixStyle(false)
        break
      case letter[35]:
        setSixStyle(false)
        break
      default:
      // execute default code block
    }
  }
  // check values for diagonal
  const diagonal = async (letter) => {
    const indexes = []
    const letterIndex = []
    const repeatedChar = []

    console.log(letter)

    const set = new Set(letter)

    // Characters that repeat
    const duplicates = letter.filter((item) => {
      if (set.has(item)) {
        set.delete(item)
      } else {
        return item
      }
    })

    repeatedChar.push(duplicates)

    console.log(repeatedChar)

    //Indexes of all letters
    for (let index = 0; index < letter.length; index++) {
      if (/[a-zA-Z]/.test(letter[index])) {
        // push it to the indexes at where it occurs
        indexes.push(index)
      }
    }

    console.log(indexes)
  }

  // function log() {
  //   console.log(letter)
  // }

  // log()

  return (
    <div className={styles.container}>
      <Head>
        <title>AcrossIt!</title>
        <meta name="AcrossIt :)" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="logo">
        <Image src="/acrossitblack.jpg" alt="logo" width={180} height={50} />
      </div> */}
      <div>
        <h2>AcrossIt</h2>
      </div>
      <div className="container">
        <div className="game-board">
          <div className="box">
            {/* frist letter */}
            <div className="letter">{randomWord[0]}</div>
          </div>
          <div className="box">
            <div>
              {/* two letter */}
              <input
                style={
                  oneStyle === true
                    ? { backgroundColor: '#7efa82' }
                    : { color: 'red' }
                }
                id="letter"
                type="text"
                autoComplete="off"
                maxLength={1}
                onChange={(event) => handleChange(event, 1)}
                onKeyDown={(event) => onKeyDown(event, 1)}
              ></input>
            </div>
          </div>
          <div className="box">
            {/* three letter */}
            <input
              style={
                oneStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 2)}
              onKeyDown={(event) => onKeyDown(event, 2)}
            ></input>
          </div>
          <div className="box">
            {/* four letter */}
            <input
              style={
                oneStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 3)}
              onKeyDown={(event) => onKeyDown(event, 3)}
            ></input>
          </div>
          <div className="box">
            {/* five letter */}
            <input
              style={
                oneStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 4)}
              onKeyDown={(event) => onKeyDown(event, 4)}
            ></input>
          </div>
          <div className="box">
            {/* six letter */}
            <input
              style={
                oneStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 5)}
              onKeyDown={(event) => onKeyDown(event, 5)}
            ></input>
          </div>
          <div className="box">
            {/* seven letter */}
            <div className="letter">{randomWord[1]}</div>
          </div>
          <div className="box">
            {/* eight letter */}
            <input
              style={
                twoStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 7)}
              onKeyDown={(event) => onKeyDown(event, 7)}
            ></input>
          </div>
          <div className="box">
            {/* nine letter */}
            <input
              style={
                twoStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 8)}
              onKeyDown={(event) => onKeyDown(event, 8)}
            ></input>
          </div>
          <div className="box">
            {/* tenth letter */}
            <input
              style={
                twoStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 9)}
              onKeyDown={(event) => onKeyDown(event, 9)}
            ></input>
          </div>
          <div className="box">
            {/* eleventh letter */}
            <input
              style={
                twoStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 10)}
              onKeyDown={(event) => onKeyDown(event, 10)}
            ></input>
          </div>
          <div className="box">
            {/* 12 letter */}
            <input
              style={
                twoStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 11)}
              onKeyDown={(event) => onKeyDown(event, 11)}
            ></input>
          </div>
          <div className="box">
            {/* 13 letter */}
            <div className="letter">{randomWord[2]}</div>
          </div>
          <div className="box">
            {/* 14 letter */}
            <input
              style={
                threeStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 13)}
              onKeyDown={(event) => onKeyDown(event, 13)}
            ></input>
          </div>
          <div className="box">
            {/* 15 letter */}
            <input
              style={
                threeStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 14)}
              onKeyDown={(event) => onKeyDown(event, 14)}
            ></input>
          </div>
          <div className="box">
            {/* 16 letter */}
            <input
              style={
                threeStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 15)}
              onKeyDown={(event) => onKeyDown(event, 15)}
            ></input>
          </div>
          <div className="box">
            {/* 17 letter */}
            <input
              style={
                threeStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 16)}
              onKeyDown={(event) => onKeyDown(event, 16)}
            ></input>
          </div>
          <div className="box">
            {/* 18 letter */}
            <input
              style={
                threeStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 17)}
              onKeyDown={(event) => onKeyDown(event, 17)}
            ></input>
          </div>
          <div className="box">
            {/* 19 letter */}
            <div className="letter">{randomWord[3]}</div>
          </div>
          <div className="box">
            {/* 20 letter */}
            <input
              style={
                fourStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 19)}
              onKeyDown={(event) => onKeyDown(event, 19)}
            ></input>
          </div>
          <div className="box">
            {/* 21 letter */}
            <input
              style={
                fourStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 20)}
              onKeyDown={(event) => onKeyDown(event, 20)}
            ></input>
          </div>
          <div className="box">
            {/* 22 letter */}
            <input
              style={
                fourStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 21)}
              onKeyDown={(event) => onKeyDown(event, 21)}
            ></input>
          </div>
          <div className="box">
            {/* 23 letter */}
            <input
              style={
                fourStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 22)}
              onKeyDown={(event) => onKeyDown(event, 22)}
            ></input>
          </div>
          <div className="box">
            {/* 24 letter */}
            <input
              style={
                fourStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 23)}
              onKeyDown={(event) => onKeyDown(event, 23)}
            ></input>
          </div>
          <div className="box">
            {/* 25 letter */}
            <div className="letter">{randomWord[4]}</div>
          </div>
          <div className="box">
            {/* 26 letter */}
            <input
              style={
                fiveStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 25)}
              onKeyDown={(event) => onKeyDown(event, 25)}
            ></input>
          </div>
          <div className="box">
            {/* 27 letter */}
            <input
              style={
                fiveStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 26)}
              onKeyDown={(event) => onKeyDown(event, 26)}
            ></input>
          </div>
          <div className="box">
            {/* 28 letter */}
            <input
              style={
                fiveStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 27)}
              onKeyDown={(event) => onKeyDown(event, 27)}
            ></input>
          </div>
          <div className="box">
            {/* 29 letter */}
            <input
              style={
                fiveStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 28)}
              onKeyDown={(event) => onKeyDown(event, 28)}
            ></input>
          </div>
          <div className="box">
            {/* 30 letter */}
            <input
              style={
                fiveStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 29)}
              onKeyDown={(event) => onKeyDown(event, 29)}
            ></input>
          </div>
          <div className="box">
            {/* 31 letter */}
            <div className="letter">{randomWord[5]}</div>
          </div>
          <div className="box">
            {/* 32 letter */}
            <input
              style={
                sixStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 31)}
              onKeyDown={(event) => onKeyDown(event, 31)}
            ></input>
          </div>
          <div className="box">
            {/* 33 letter */}
            <input
              style={
                sixStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 32)}
              onKeyDown={(event) => onKeyDown(event, 32)}
            ></input>
          </div>
          <div className="box">
            {/* 34 letter */}
            <input
              style={
                sixStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 33)}
              onKeyDown={(event) => onKeyDown(event, 33)}
            ></input>
          </div>
          <div className="box">
            {/* 35 letter */}
            <input
              style={
                sixStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 34)}
              onKeyDown={(event) => onKeyDown(event, 34)}
            ></input>
          </div>
          <div className="box">
            {/* 36 letter */}
            <input
              style={
                sixStyle === true
                  ? { backgroundColor: '#7efa82' }
                  : { color: 'red' }
              }
              id="letter"
              type="text"
              autoComplete="off"
              maxLength={1}
              onChange={(event) => handleChange(event, 35)}
              onKeyDown={(event) => onKeyDown(event, 35)}
            ></input>
          </div>
        </div>
        <div></div>
      </div>
      <div>
        <button
          type="button"
          className={styles.button}
          onClick={() => window.location.reload(false)}
        >
          NEW GAME
        </button>
        <button type="button" className={styles.button} onClick={handleClick}>
          NEW WORD
        </button>
      </div>
      <div></div>
    </div>
  )
}
