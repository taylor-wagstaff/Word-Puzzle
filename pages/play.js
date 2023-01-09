import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Play() {
  return (
    <div className="how-to-play">
      <Link href="/" style={{ textDecoration: 'underline', color: 'blue' }}>
        <p>Home</p>
      </Link>
      <h1>How To Play</h1>
      <h3>Create words from the starting letters going across</h3>
      <ul>
        <li> To gain points you must have letters matching diagonally</li>
        <li>
          Letters can also go down diagonally decending top-right or top-left
        </li>
        <li>Three matching letters diagonally equals 15 points.</li>
        <li>
          Any letter matching after three diagonally is an extra 10 points{' '}
        </li>
      </ul>
      <div className="play-container">
        <section className="rule1">
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
        </section>
        <section className="direction">
          Three matching letters diagonally equals 15 points.
        </section>

        <section className="rule2">
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
        </section>
        <section className="direction">
          Four matching letters diagonally equals 25 points (15 + 10).
        </section>

        <section className="rule3">
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
        </section>
        <section className="direction">
          Five matching letters diagonally equals 35 points (15 + 10 + 10).
        </section>

        <section className="rule4">
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
        </section>
        <section className="direction">
          Six matching letters diagonally equals 45 points (15 + 10 + 10 + 10).
        </section>

        <section className="rule5">
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p>A</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </section>
        <section className="direction">
          You can also combine or branch out from other matches.
        </section>
      </div>
      <div className="example">
        <Image
          src="/example.png"
          alt="example of gameplay"
          width={400}
          height={400}
        />
        <ul>
          <li>The example above would equal 100 points</li>
          <li>Points as follows: (15 + 15 + 15 + 15 + 25 + 15)</li>
        </ul>
      </div>
    </div>
  )
}
