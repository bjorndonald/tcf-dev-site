import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import {gsap} from 'gsap/dist/gsap'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'

function FundingHeroSection(props) {
    const router = useRouter()

    const calculateTimeLeft = () => {
        const difference = +new Date(`12/31/2021 23:59:59 GMT-0800 (PST)`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const timerComponents = [];

    return (
        <div className='fundingSectionOne py-3 d-flex align-items-center justify-content-center'>
            <div className="container-fluid px-0">
                <div className='text-center'>
                    <h2 className="mb-4">Save up to 30%</h2>
                    <h4 className="d-block d-md-none text-white">Ends in</h4>
                    <div className="h4 countDownContainer position-relative mb-5 mb-lg-n4 text-white"
                         style={{zIndex: '100'}}>
                        <span className="d-none d-md-block">Ends in</span>
                        <div className="countDownCircle mr-2 ml-md-2">{timeLeft.days}</div> Days
                        <div className="countDownCircle mx-2">{timeLeft.hours}</div> Hours
                        <div className="countDownCircle mx-2">{timeLeft.minutes}</div> Minutes
                    </div>
                    <img
                        style={{height: 'auto', width: '100%', maxHeight: '380px'}}
                        className=''
                        src='/images/december-savings.png'
                        alt='Trader Central Fund'
                    />
                    <a
                        href='https://fund.traderscentral.com/sign-up'
                        className='btn btn-white'
                    >
                        Get discount
                    </a>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    setTimeline: timeline => {
        dispatch(setTimeline(timeline))
    },
    clearTimeline: timeline => {
        dispatch(clearTimeline(timeline))
    }
})

const mapStateToProps = state => ({
    timeline: state.config.timeline
})

export default connect(mapStateToProps, mapDispatchToProps)(FundingHeroSection)
