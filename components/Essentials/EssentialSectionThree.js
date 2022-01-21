import React, { useEffect, useState } from 'react'
import Link from 'next/link';


export default function EssentialSectionThree({ seeAlso, page }) {

  const [feedBackThumbsDown, setFeedBackThumbsDown] = useState(false);
  const [feedBackThumbsUp, setFeedBackThumbsUp] = useState(false);

  const [voteThumbsUp, setVoteThumbsUp] = useState();

  const [isSubmitting, setIsSubmitting] = useState(false);


  const thumbsDownHandler = async (vote) => {
    if (window) {
      var cryptohasclicked = window.sessionStorage.getItem('cryptohasclicked');
      var forexhasclicked = window.sessionStorage.getItem('forexhasclicked');
      var stockshasclicked = window.sessionStorage.getItem('stockshasclicked');

      var returnContent = async () => {
        setIsSubmitting(true);
        let voteContent = { page, vote }
        const sendRequest = async () => {
          const response = await fetch('https://api.traderscentral.com/main-site/v1/submit-feedback', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(voteContent)
          });

          if (!response.ok) {
            throw new Error('posting vote data failed.');
          }

          const result = await response.json();

          console.log('Results from vote sent', result.data)

          if (vote === 'down' && page === result.data.page) {
            setVoteThumbsDown(result.data.downvotes);
            setFeedBackThumbsDown(true);
            setFeedBackThumbsUp(false)
            window.sessionStorage.setItem('hasclicked', true)
          } else if (vote === 'up' && page === result.data.page) {
            setVoteThumbsUp(result.data.upvotes);
            setFeedBackThumbsUp(true);
            setFeedBackThumbsDown(false)
          }

          return result.data;
        }
        try {
          await sendRequest();
        } catch (error) {
          console.log(error)
        }

        if (page == 'crypto') {
          window.sessionStorage.setItem('cryptohasclicked', true);
        } else if (page == 'forex') {
          window.sessionStorage.setItem('forexhasclicked', true);
        } else if (page == 'stocks') {
          window.sessionStorage.setItem('stockshasclicked', true);
        }
        setIsSubmitting(false);
      }

      if (!cryptohasclicked && page == 'crypto') {
        returnContent();
      } else if (!forexhasclicked && page == 'forex') {
        returnContent();
      } else if (!stockshasclicked && page == 'stocks') {
        returnContent();
      }

    }

  }
  const thumbsDownThumbsUp = (
    <div className='icons purple d-flex align-items-center justify-content-center'>
      <button className={`${feedBackThumbsDown ? 'essentialsLightPurple' : 'purple'} border-0 bg-transparent`} disabled={feedBackThumbsDown} onClick={() => { thumbsDownHandler('down') }}>
        <i className='fa fa-thumbs-down fa-3x mr-2'></i>
      </button>
      <button className={`${feedBackThumbsUp ? 'essentialsLightPurple' : 'purple'} border-0 bg-transparent`} disabled={feedBackThumbsUp} onClick={() => { thumbsDownHandler('up') }}>
        <i className='fa fa-thumbs-up fa-3x'></i>
      </button>
    </div>
  )
  const isSubmittingModalContent = <div className='d-flex justify-content-center align-items-center'><div className="spinner-border purple" role="status"><span className="sr-only">Loading...</span></div></div>;


  return (
    <div className='essentialsSectionThree d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-12 pb-5 '>
            <div
              className='purple mb-2 d-flex align-items-center justify-content-center'
            >
              <p>{feedBackThumbsDown || feedBackThumbsUp ? 'Thank you for your feedback!' : 'Did you find this information useful?'}</p>
            </div>
            {!isSubmitting && thumbsDownThumbsUp}
            {isSubmitting && isSubmittingModalContent}
            {feedBackThumbsDown && !isSubmitting &&
              <div className='essentialsLightPurple  mt-2 d-flex align-items-center justify-content-center'>
              </div>
            }
            {feedBackThumbsUp && !isSubmitting &&
              <div className='essentialsLightPurple  mt-2 d-flex align-items-center justify-content-center'>
                <p style={{ fontSize: '16px' }}>{voteThumbsUp} votes</p>
              </div>
            }


          </div>
          <div className='row justify-content-center align-items-center'>
            {seeAlso.map((pos, i) => (
              <div

                className='col-md-6 mb-5'
                key={i}
              >
                <div className='text-center mb-5'>
                  <Link
                    href={pos.see.link}>
                    <a>
                      <img
                        className='rounded-circle mx-auto'
                        alt="..."
                        src={pos.see.image}
                      />
                    </a>
                  </Link>
                </div>
                <div className='button text-center'>
                  <Link
                    href={pos.see.link}>
                    <a
                      rel='noopener noreferrer'
                      className='btn btn-black'
                    >
                      {pos.see.title}
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>


    </div>

  )
}
