import React from 'react'

function BitesSectionOne () {
  return (
    <div className='bitesSectionOne'>
      {/* <div className='text-center'>
        <h2>
          Traders Central
          <br />
          Media Resources
        </h2>
      </div> */}
      <div className='bitesHeader'>
        <img src='/images/bites/background.jpg' alt='' className='background' />
        <div className='heading'>
          <h2>
            Stay updated, one
            <br />
            bite at the time!
          </h2>
          <h4>Weekly on TCs social media</h4>
        </div>
        <h4 className='desc'>
          All you need to know,
          <br />
          at the glance of one click
        </h4>
        <div className='left-section'>
          <img src='/images/bites/telephone.png' alt='' />
          <ul>
            <li>Crypto</li>
            <li>Forex</li>
            <li>Stocks</li>
          </ul>
        </div>
      </div>

      <div className='episodes-section'>
        <h3 className=''>Latest Episodes</h3>
        <div className='container'>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
          <div className='episode'>
            <div className='placeholder-image'></div>
            <h4>Click to view</h4>
          </div>
        </div>
      </div>

      <div className='social-section'>
        <div className='container'>
          <h3>Follow for more episodes</h3>
          <div className='social-inner'>
            <a
              className='column'
              href='https://www.instagram.com/traderscentralfund/?utm_source=ig_profile_share&igshid=1h8hs678fgu04'
            >
              <i className='fa fa-instagram'></i>
              <span>Instagram</span>
            </a>
            <a className='column' href='https://www.facebook.com/TradersCPF/'>
              <i className='fa fa-facebook'></i>
              <span>Facebook</span>
            </a>
            <a className='column' href='https://twitter.com/TradersCentral'>
              <i className='fa fa-twitter'></i>
              <span>Twitter</span>
            </a>
            <a
              className='column'
              href='https://youtube.com/channel/UCXnnh-fnrMW2R_HMWFC_6dA'
            >
              <i className='fa fa-youtube-play'></i>
              <span>Youtube</span>
            </a>
            <a className='column' href='https://t.me/Traderscentralchatroom'>
              <i className='fa fa-telegram'></i>
              <span>Telegram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BitesSectionOne
