import {useRouter} from 'next/router'
import React, {Fragment, useEffect} from "react";
import MetaTag from "../../components/MetaTag";
import Head from "next/head";
import {featuredTradersList} from '../../components/Customers/traders';
import FeaturedTraderVote from "../../components/Customers/FeaturedTraderVote";

function FeaturedTrader() {
    const router = useRouter()
    let traderData = featuredTradersList.find(item => item.url === 'haaris');


    return (
        <Fragment>
            <MetaTag
                title={traderData.name + ' | Traders Central'}
                description={`Sign up for Traders Central to benefit from our suite of financial products that our customers love`}
            />

            <Head>
                <script
                    src='https://code.jquery.com/jquery-3.2.1.min.js'
                    integrity='sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4='
                    crossOrigin='anonymous'
                ></script>
                <script
                    type='text/javascript'
                    src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
                    async
                ></script>

                <script
                    src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'
                    integrity='sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q'
                    crossOrigin='anonymous'
                ></script>
                <script
                    src='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'
                    integrity='sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl'
                    crossOrigin='anonymous'
                ></script>
                <script src='/js/script.js'></script>
            </Head>

            {traderData !== '' &&
                <div className='essentialsSectionOne featured-trader mt-5 d-flex align-items-center'>
                    <div className='container'>
                        <div className='row mb-5'>
                            <div className='col-md-8 my-auto'>
                                <div className='mb-sm-2'>
                                    <h1 className="mb-5">Meet the trader</h1>
                                    {traderData.subtitles.map((subtitle, index) => (
                                        <h3 className="mb-4" key={'subtitle' + index}>{subtitle}</h3>
                                    ))}
                                </div>

                            </div>

                            <div className='col-md-4'>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={traderData.image} style={{borderRadius: '50%'}} alt=''/>
                            </div>
                        </div>

                        <div className="row mt-5">
                            <div className="col-12">
                                {traderData.questions.map((question, qindex) => (
                                    <div className="mb-5" key={'question' + qindex}>
                                        <h4 className="mb-3 title">{question.question}</h4>
                                        {question.answer.map((answer, aindex) => (
                                            <p className="mb-3" key={'answer' + qindex + aindex}>{answer}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>

                            <div className="col-12">
                                <p className="text-muted" style={{fontSize: 'small', textAlign: 'justify'}}>Paid
                                    testimonial. May not be representative of all users. The
                                    unique experiences and past performances do not
                                    guarantee future results. They are individual experiences and individual results.
                                    Certain accounts may have worse
                                    performance than that indicated.</p>
                            </div>
                        </div>

                        <FeaturedTraderVote seeAlso={[]} page={"haaris"}/>
                    </div>
                </div>
            }

        </Fragment>
    )
}

export default FeaturedTrader;