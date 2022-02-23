import React, {Fragment, useEffect, useState} from 'react'
import {featuredTradersList} from './traders';
import {useRouter} from "next/router";


function FeaturedTraders() {
    const router = useRouter()
    const [index, setIndex] = useState(0)
    const [show, setShow] = useState(false)

    const prev = () => {
        var leftPos = $('.featuredTradersSection .slider').scrollLeft()
        console.log(leftPos)
        $('.featuredTradersSection .slider').animate(
            {
                scrollLeft:
                    leftPos -
                    ($('.featuredTradersSection .slider .slide').outerWidth() +
                        $(document).width() / 50)
            },
            200
        )
    }

    const next = () => {
        var leftPos = $('.featuredTradersSection .slider').scrollLeft()
        $('.featuredTradersSection .slider').animate(
            {
                scrollLeft:
                    leftPos +
                    ($('.featuredTradersSection .slider .slide').outerWidth() +
                        $(document).width() / 50)
            },
            200
        )
    }

    return (
        <Fragment>
            <div className="container">
                <div className="featuredTradersSection my-5">
                    <div className='row'>
                        <h2>
                            Featured Traders
                        </h2>
                    </div>


                    <div className='d-flex align-items-center justify-content-around'>
                        <div onClick={prev} className='slideButton mb-5'>
                            <i className='fa fa-play-circle' style={{transform: 'rotateY(180deg)'}}></i>
                        </div>
                        <div className='slider'>
                            {featuredTradersList.map((item, index) => (
                                <div
                                    key={index}
                                    className='slide text-center'
                                    onClick={() => {
                                        router.push({
                                            pathname: '/customers/[slug]',
                                            query: { slug: item.url },
                                        })
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={item.image} alt={item.name}/>
                                    <h3 className="mt-3 mb-2">
                                        Meet the trader: <br/>
                                        {item.name}
                                    </h3>
                                    <h4>
                                        Exploring the history of forex trading
                                        and how it shapes our world today
                                    </h4>
                                </div>
                            ))}
                        </div>
                        <div onClick={next} className='slideButton mb-5'>
                            <i className='fa fa-play-circle'></i>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default FeaturedTraders
