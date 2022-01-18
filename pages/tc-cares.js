import React, { Fragment, useState } from 'react'
import MetaTag from './../components/MetaTag'
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Head from 'next/head'
import TCCarousel from '../components/TCCares/TCCarousel'




const _items2021 = [
    {
        charity: {
            title: 'Light of the Youth',
            desc: 'Light of the Youth is an interdenominational youth network with the aim of winning souls for Christ, disciplining them and impacting our generation through giving to the needy, equipping youth with tools for success and enrolling them in career , business and mentorship training sessions.',
            image: '/images/tcCares/light-of-the-you.jpg',
            faceboookLink: '',
            twitterLink: '',
            instagramLink: 'https://instagram.com/rebirth_2k19?utm_medium=copy_link',
        },
    },
    {
        charity: {
            title: 'Care4Child',
            desc: 'Non-profit healthcare focused organisation with the aim of bettering childrens experiences in hospital wards.',
            image: '/images/tcCares/care-4-a-child.png',
            faceboookLink: '',
            twitterLink: 'https://twitter.com/care4achildgh?s=21',
            instagramLink: 'https://instagram.com/care4achildgh?utm_medium=copy_link',
        },
    },
    {
        charity: {
            title: 'Becauseshecan',
            desc: 'Empowering women and girls to excel in Tech Disciplines and roles.',
            image: '/images/tcCares/because-she-can.jpeg',
            faceboookLink: '',
            twitterLink: 'https://twitter.com/becauseshecan_?s=21',
            instagramLink: 'https://instagram.com/becauseshecan_?utm_medium=copy_link',
        },
    },
    {
        charity: {
            title: 'FTFGhana',
            desc: 'Alleviating the plight of the less privilged',
            image: '/images/tcCares/for-the-future.jpeg',
            faceboookLink: '',
            twitterLink: 'https://twitter.com/ftfghana?s=21',
            instagramLink: 'https://instagram.com/ftfghana?utm_medium=copy_link',
        },
    }
];

const _items2022 = [];


export default function tcCares() {
    gsap.registerPlugin(ScrollTrigger)
    let hc_tl = gsap.timeline()

    const [show2021, setShow2021] = useState(true);
    const [show2022, setShow2022] = useState(false);
  

    const active2021 = () => {
        setShow2021(true);
        setShow2022(false);
    }
    const active2022 = () => {
        setShow2022(true);
        setShow2021(false);
    }

    return (
        <Fragment>
            <MetaTag
                title='Traders Central Cares | Traders Central'
                description={`Every year we choose charities from anywhere in the world to giveback to`}
            />
            <Head>
                <script
                    src='https://code.jquery.com/jquery-3.2.1.slim.min.js'
                    integrity='sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN'
                    crossOrigin='anonymous'
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
                {/* <script src='https://code.jquery.com/jquery-3.4.1.min.js'></script> */}
                <script src='/js/script.js'></script>
            </Head>

            <div className='basicsSectionOne py-5 d-flex align-items-center'>
                <div className='container'>
                    <div className='row header-section'>
                        <div className='text-center col'>
                        <h1>Traders Central Cares</h1>
                        </div>
                    </div>
                    <div className='text-center'>
                    <h3>Every year we choose charities from anywhere in the world to giveback to.</h3>
                    </div>

                    <div className='row m-0 justify-content-center'>
                        <div className={`year-button mx-2 my-2 ${show2021 && 'year-active'}`} onClick={active2021} role='button'>2021</div>
                        <div className={`year-button mx-2 my-2 ${show2022 && 'year-active'}`} onClick={active2022} role='button'>2022</div>
                    </div>
                    {show2021 && <TCCarousel items={_items2021}/>}
                    {show2022 && <TCCarousel items={_items2022}/>}
                </div>
            </div>
        </Fragment>
    )




}
