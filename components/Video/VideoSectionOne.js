import React from 'react'

function VideoSectionOne () {
  return (
    <div className='videoSectionOne'>
      <div className='container'>
        <h2>Traders Central Affiliate Program</h2>
        <h4>
          Help connect great traders with the best funding solution and get
          rewarded for your efforts
        </h4>

        <div className='video'>
          <video
            loop={true}
            playsInline
            className='image'
            autoPlay='autoplay'
            muted={true}
          >
            <source src='videos/affiliate/Affiliate.mp4' type='video/mp4' />
            <source src='videos/affiliate/Affiliate.webm' type='video/webm' />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='paragraph'>
          <b>What is the Affiliate Commission Structure?</b>
          <p>
            You will receive 10% cashback on whatever plan your friend
            purchases. You can track affiliates and withdraw your commissions in
            the referrals section of the profile tab.
          </p>
        </div>
        <div className='paragraph'>
          <b>How do I become an Affiliate?</b>
          <ul>
            <li>
              <span className='purple'>Step 01</span>
              <a href='https://fund.traderscentral.com/sign-up'>Sign up</a> for
              a Traders Central Account.
            </li>
            <li>
              <span className='purple'>Step 02</span>
              Click on the Profile tab once you are logged in, then go to the
              referrals section.
            </li>
            <li>
              <span className='purple'>Step 03</span>
              Grab your referral link and share it with your friends. Once they
              signup, you are all set to receive your commissions when they
              purchase any plan.
            </li>
          </ul>
        </div>
        <div className='button'>
          <a
            target='_blank'
            href='https://fund.traderscentral.com/sign-up'
            className='btn btn-black'
          >
            Sign up now
          </a>
        </div>
      </div>
    </div>
  )
}

export default VideoSectionOne
