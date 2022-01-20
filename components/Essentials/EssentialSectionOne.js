import React from 'react'


export default function EssentialSectionOne({title, subtitle, noun, definition, image}) {
    return (
        <div className='essentialsSectionOne mt-5 d-flex align-items-center'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-8 my-auto'>
                        <div className='mb-sm-2 mb-5'>
                            <h1>{title}</h1>
                        </div>
                        <h2>{subtitle}</h2>
                    </div>
             
                        {/* <img src='/images/essentials/header.PNG' alt='' /> */}
                        <div className='col-md-4'>
                        <img src={image} alt='' />
                    </div>
                   
                </div>
                <div className='row m-0'>
                    <div className='definition purple'>
                        <h4>Definition</h4>
                        <p>
                            noun: {noun};<br/>
                            {definition}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
