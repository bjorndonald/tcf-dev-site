import React from 'react'

function ChallengeSectionOne () {
  return (
    <div className='challengeSectionOne'>
      <div className='tc-wrapper'>
        <h2>Game time!</h2>
        <h4>Unlock your free 10k challenge account.</h4>

        <div className='puzzle'>
          <img src='/images/challenge/puzzle.jpg' alt='' />
          <h4>Claim your free account now</h4>
        </div>

        <div className='tc-card purple'>
          <h3>Top 5 winners get a free 10k challenge</h3>
          <p>
            Guarantee yourself a free challenge by being one of the top five to
            complete the game.
          </p>
        </div>

        <div className='tc-card pink'>
          <h3>Guaranteed 10% discount for every participant</h3>
          <p>
            Sign-up to the portal to claim 10% discount regardless of the game
            outcome.
          </p>
        </div>

        <div className='tc-card purple'>
          <h3>Stake your TCTs for yield with weekly wagers</h3>
          <p>Place bets with a binary outcome to earn a yield.</p>
        </div>

        <div className='tc-card pink'>
          <h3>Shake phone and collect 50 TCTs daily</h3>
          <p>
            Achieve a 30 day streak to earn TCTs and get an additional 15%
            discount off plans.
          </p>
        </div>

        <div className='button'>
          <a href='' className='btn btn-black'>
            Learn more
          </a>
        </div>
      </div>
    </div>
  )
}

export default ChallengeSectionOne
