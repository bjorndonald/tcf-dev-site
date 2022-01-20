import React from 'react'


export default function EssentialSectionThree ({seeAlso}) {
  
  return (
    <div className='essentialsSectionThree d-flex align-items-center'>
      <div className='container'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-12 pb-5 '>
          <div
            className='purple mb-2 d-flex align-items-center justify-content-center'
          >
            <p>Did you find this information useful?</p>
          </div>
          <div className='icons purple d-flex align-items-center justify-content-center'>
            <a>
              <i className='fa fa-thumbs-down fa-3x mr-2'></i>
            </a>
            <a>
              <i className='fa fa-thumbs-up fa-3x'></i>
            </a>
          </div>
        </div>
          <div className='row justify-content-center align-items-center'>
          {seeAlso.map((pos, i) => (
            <div
              
              className='col-md-6 mb-5'
              key={i}
            >
              <div className='text-center mb-5'>
                <img
                    className='rounded-circle mx-auto'
                    alt="..."
                    src={pos.see.image}
                />
              </div>
              <div className='button text-center'>
                <a
                  href={pos.see.link}
                  // target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  {pos.see.title}
                </a>
              </div>
            </div>
))}

            {/* <div className='col'>
              <div className='text-center mb-5'>
                <img
                    className='rounded-circle w-50 mx-auto'
                    alt="..."
                    src='/images/essentials/essential-crypto.png'
                />
              </div>
              <div className='button text-center'>
                <a
                  href={'/essentials/stocks'}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-black'
                >
                  See Stock Essentials
                </a>
              </div>
            </div> */}
          </div>
        
      </div>
    </div>


        </div>
   
  )
}
