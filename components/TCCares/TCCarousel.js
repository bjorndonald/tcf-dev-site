import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TCCarousel({ items }) {

    const settingsNoModules = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "button__bar",
        arrows: false
    };

    return (
        <Slider {...settingsNoModules}>

            {items.map((pos, i) => (
                <div className='row m-0 py-5 d-flex' key={i}>
                    <div className='align-middle col-5 p-0'>
                        <img
                            className='rounded-circle w-75 mx-auto'
                            alt="..."
                            src={pos.charity.image}
                        />
                    </div>
                    <div className='col-7 p-0'>
                        <h2>{pos.charity.title}</h2>
                        <p>{pos.charity.desc}</p>
                        <div className='row m-0 p-0 social-media'>
                            <div className='align-middle'>
                                <h3 className='m-0'>For more Info visit</h3>
                            </div>
                            <div className='ml-3'>
                                <a href={pos.charity.faceboookLink}>
                                    <img
                                        className='rounded-circle'
                                        alt="..."
                                        src='/images/tcCares/facebook-tc.png'
                                    />
                                </a>
                            </div>
                            <div className='ml-2'>
                                <a href={pos.charity.twitterLink}>
                                    <img
                                        className='rounded-circle'
                                        alt="..."
                                        src='/images/tcCares/twitter-tc.png'
                                    />
                                </a>
                            </div>
                            <div className='ml-2'>
                                <a href={pos.charity.instagramLink}>
                                    <img
                                        className='rounded-circle'
                                        alt="..."
                                        src='/images/tcCares/instagram-tc.png'
                                    />
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            ))}

        </Slider>

    )




}
