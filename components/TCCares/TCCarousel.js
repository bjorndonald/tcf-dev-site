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
                    <div className='align-middle col-sm-5 p-sm-0 pb-2'>
                        <img
                            className='rounded-circle w-75 mx-auto border'
                            alt="..."
                            src={pos.charity.image}
                        />
                    </div>
                    <div className='col-sm-7 charity-desc p-sm-0 p-2'>
                        <h2 className=''>{pos.charity.title}</h2>
                        <p>{pos.charity.desc}</p>
                        <div className='row m-0 p-0 social-media'>
                            <div className='align-middle mr-1'>
                                <h3 className='m-0'>For more Info visit</h3>
                            </div>
                            {pos.charity.faceboookLink !== '' &&
                                <div className='ml-2'>
                                    <a href={pos.charity.faceboookLink}>
                                        <img
                                            className='rounded-circle'
                                            alt="..."
                                            src='/images/tcCares/facebook-tc.png'
                                        />
                                    </a>
                                </div>
                            }
                            {pos.charity.twitterLink !== '' &&
                                <div className='ml-2'>
                                    <a href={pos.charity.twitterLink}>
                                        <img
                                            className='rounded-circle'
                                            alt="..."
                                            src='/images/tcCares/twitter-tc.png'
                                        />
                                    </a>
                                </div>
                            }
                            {pos.charity.instagramLink !== '' &&
                                <div className='ml-2'>
                                    <a href={pos.charity.instagramLink}>
                                        <img
                                            className='rounded-circle'
                                            alt="..."
                                            src='/images/tcCares/instagram-tc.png'
                                        />
                                    </a>
                                </div>
                            }

                        </div>
                    </div>

                </div>
            ))}

        </Slider>

    )




}
