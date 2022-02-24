import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import {featuredTradersList} from "./traders";
import {useRouter} from "next/router";


export default function FeaturedTraderVote({seeAlso, page}) {
    const router = useRouter()
    const [feedBackThumbsDown, setFeedBackThumbsDown] = useState(false);
    const [feedBackThumbsUp, setFeedBackThumbsUp] = useState(false);

    const [voteThumbsUp, setVoteThumbsUp] = useState();

    const [isSubmitting, setIsSubmitting] = useState(false);


    const thumbsDownHandler = async (vote) => {
        if (window) {
            var voted = window.sessionStorage.getItem(page + "Set");

            var returnContent = async () => {
                setIsSubmitting(true);
                let voteContent = {page, vote}
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

                window.sessionStorage.setItem(page + 'Set', true);
                setIsSubmitting(false);
            }

            if (!voted) {
                returnContent();
            }

        }

    }
    const thumbsDownThumbsUp = (
        <div className='icons purple d-flex align-items-center justify-content-center'>
            <button className={`${feedBackThumbsDown ? 'essentialsLightPurple' : 'purple'} border-0 bg-transparent`}
                    disabled={feedBackThumbsDown} onClick={() => {
                thumbsDownHandler('down')
            }}>
                <i className='fa fa-thumbs-down fa-3x mr-2'></i>
            </button>
            <button className={`${feedBackThumbsUp ? 'essentialsLightPurple' : 'purple'} border-0 bg-transparent`}
                    disabled={feedBackThumbsUp} onClick={() => {
                thumbsDownHandler('up')
            }}>
                <i className='fa fa-thumbs-up fa-3x'></i>
            </button>
        </div>
    )
    const isSubmittingModalContent = <div className='d-flex justify-content-center align-items-center'>
        <div className="spinner-border purple" role="status"><span className="sr-only">Loading...</span></div>
    </div>;


    return (
        <div className='essentialsSectionThree d-flex align-items-center'>
            <div className='container'>
                <div className='row d-flex align-items-center justify-content-center'>
                    <div className='col-12'>
                        <div
                            className='purple mb-2 d-flex align-items-center justify-content-center'
                        >
                            <p>{feedBackThumbsDown || feedBackThumbsUp ? 'Thank you for your feedback!' : 'Did you find this information useful?'}</p>
                        </div>
                    </div>
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        {!isSubmitting && thumbsDownThumbsUp}
                        {isSubmitting && isSubmittingModalContent}
                        {feedBackThumbsDown && !isSubmitting &&
                            <div
                                className='essentialsLightPurple  mt-2 d-flex align-items-center justify-content-center'>
                            </div>
                        }
                    </div>
                    <div className="col-12  pb-5 d-flex align-items-center justify-content-center">
                        {feedBackThumbsUp && !isSubmitting &&
                            <div
                                className='essentialsLightPurple  mt-2 d-flex align-items-center justify-content-center'>
                                <p style={{fontSize: '16px'}}>{voteThumbsUp} votes</p>
                            </div>
                        }


                    </div>


                </div>
            </div>


        </div>

    )
}
