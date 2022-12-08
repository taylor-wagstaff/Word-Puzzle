import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react'

import { WORDS } from '../components/wordlist'
import { fetchWords } from './api/dictionary'
import { connects } from '../components/connects'

const getRandomWords = () => {
  return WORDS[Math.floor(Math.random() * WORDS.length)]
}
function getWords(param) {
  return WORDS[param]
}

// To do:
// make only letters in input (unresolved)
// check each word with api from parts of array after each handlechange (done)
// change colour if word is correct (done)
// Fix first word has to be different (done)
// conditions for letter going down and across then (done)
// add points based on letter values to a point summary (done)

// change colour if letters go in certain directions
// Random word each date
// add directions for gameplay
// styling, webpage grid, logo,

export default function Home() {
  const [randomWord, setRandomWord] = useState([])
  const [displayWord, setDisplayWord] = useState([])
  const [words, setWords] = useState(['', '', '', '', '', ''])
  const [start, setStart] = useState(false)
  const [backspace, setBackspace] = useState(false)

  //styles for each word if correct
  const [oneStyle, setOneStyle] = useState(false)
  const [twoStyle, setTwoStyle] = useState(false)
  const [threeStyle, setThreeStyle] = useState(false)
  const [fourStyle, setFourStyle] = useState(false)
  const [fiveStyle, setFiveStyle] = useState(false)
  const [sixStyle, setSixStyle] = useState(false)

  //ref
  // const ref = useRef(null)

  // setscore

  const [score, setScore] = useState(0)

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
  // Daily word
  useEffect(() => {
    const day = []

    // for today
    var M = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var x = new Date()
    var m = x.getMonth()
    var y = x.getFullYear()
    if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) {
      ++M[1]
    }
    var Y = 0
    for (var i = 0; i < m; ++i) {
      Y += M[i]
    }
    day.push(Y + x.getDate())
    console.log(day)
    console.log('day[0]', day[0])
    //////////////////
    const newWord = getWords(day[0])
    const splitWord = newWord.split('')
    setRandomWord(newWord)
    setDisplayWord(newWord)
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

    sliceIntoChunks(letter)
    colorCheck(letter)
    setStart(true)
    const fetchScore = connects(letter)
    setScore(fetchScore)
  }, [])

  // const dailyWord = () => {

  // random word
  // const handleClick = () => {
  //   // ref.current.value = ''
  //   // shuffle array and pick random

  //   const newWord = getRandomWords()

  //   // split letters to enter into array
  //   const splitWord = newWord.split('')

  //   setRandomWord(newWord)
  //   setLetter([
  //     splitWord[0].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     splitWord[1].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     splitWord[2].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     splitWord[3].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     splitWord[4].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //     splitWord[5].toLowerCase(),
  //     '',
  //     '',
  //     '',
  //     '',
  //     '',
  //   ])

  //   sliceIntoChunks(letter)
  //   colorCheck(letter)
  //   setStart(true)
  //   const fetchScore = connects(letter)
  //   setScore(fetchScore)
  // }

  // Add letter to the array
  const handleChange = (event, param1) => {
    const regex = /^[a-zA-Z]+$/
    const result = event.target.value

    if (result.match(regex)) {
      ;[...letter.splice(param1, 1, event.target.value)]
      // new array insert at its position
      setLetter([...letter])
      sliceIntoChunks(letter)

      setStart(true)

      colorCheck(letter)
      // perform connection function for matching
      const fetchScore = connects(letter)

      setScore(fetchScore)
    }
  }
  // Backspace
  const onKeyDown = (event, param2) => {
    const empty = ''

    if (event.key === 'Backspace') {
      // remove letter at postion, only one
      ;[...letter.splice(param2, 1, empty)]
      // new array insert at its position

      const fetchScore = connects(letter)

      setScore(fetchScore)

      setBackspace(true)
      setLetter(letter)
      sliceIntoChunks(letter)
      colorCheck(letter)
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
    // sliceIntoChunks(letter)
    setStart(false)
    setBackspace(false)

    if (
      /[a-zA-Z]/g.test(words[0]) &&
      words[0].length === 6 &&
      words[0] !== randomWord.toLowerCase()
    ) {
      let firstWord = words[0]
      // fetchWords(words[0])
      if (fetchWords(firstWord)) {
        setOneStyle(true)
      }
    } else {
      setOneStyle(false)
    }
    if (/[a-zA-Z]/g.test(words[1]) && words[1].length === 6) {
      let secondWord = words[1]
      // fetchWords(words[0])
      if (fetchWords(secondWord)) {
        setTwoStyle(true)
      }
    } else {
      setTwoStyle(false)
    }
    if (/[a-zA-Z]/g.test(words[2]) && words[2].length === 6) {
      let thirdWord = words[2]
      // fetchWords(words[0])
      if (fetchWords(thirdWord)) {
        setThreeStyle(true)
      }
    } else {
      setThreeStyle(false)
    }
    if (/[a-zA-Z]/g.test(words[3]) && words[3].length === 6) {
      let fourWord = words[3]
      // fetchWords(words[0])
      if (fetchWords(fourWord)) {
        setFourStyle(true)
      }
    } else {
      setFourStyle(false)
    }
    if (/[a-zA-Z]/g.test(words[4]) && words[4].length === 6) {
      let fiveWord = words[4]

      if (fetchWords(fiveWord)) {
        setFiveStyle(true)
      }
    } else {
      setFiveStyle(false)
    }
    if (/[a-zA-Z]/g.test(words[5]) && words[5].length === 6) {
      let sixWord = words[5]

      if (fetchWords(sixWord)) {
        setSixStyle(true)
      }
    } else {
      setSixStyle(false)
    }
  }, [start, backspace])

  function colorCheck(letter) {
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

  return (
    <div>
      <div className="">
        <Head>
          <title>Across It</title>
          <meta name="Across It" />
          <link rel="icon" href="/faviconlogo.ico" />
        </Head>

        <div className="container">
          <div className="header">
            <Image
              src="/AcrossItheader.png"
              alt="Picture of the author"
              width={220}
              height={60}
            />
             {/* <button
              type="button"
              className={styles.button}
              onClick={() => window.location.reload(false)}
            >
              NEW GAME
            </button> */}
         
           
          </div>
          <div className="game-container">
            <div className="game-items">
              <div className="score">
                <p>score: {score}</p>
              </div>
            </div>

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
                    // ref={ref}
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
          </div>
          <div className="button-container">
           
            <a
              className="tweetbutton"
              href={`https://twitter.com/intent/tweet?text=${words}%20%28Score:%20${score}%29`}
            >
              Tweet
            </a>
          </div>
      </div>
        </div>
    </div>
  )
}
