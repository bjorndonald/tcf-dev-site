import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { Accordion, Card, Button } from 'react-bootstrap'

export default function LiquiditySectionFaq () {
  const toggle = e => {
    $(
      $(e.target)
        .parent()
        .find('span')[0]
    ).toggle()
    $(
      $(e.target)
        .parent()
        .find('span')[1]
    ).toggle()
  }
  // useEffect(() => {
  //   $(function () {
  //     $( ".faqSection button" ).on("click", function() {
  //       $( this ).toggleClass( "spin" );
  //     });
  //   });

  //   gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".tokenSectionFaq",
  //       start: "top 150px",
  //       end: "bottom center",
  //       scrub: 4,
  //       pin:true
  //     }
  //   })
  //   .add('start')
  //   .from(".tokenSectionFaq .gaspSlideLeft", { y: 50, opacity : 0}, 'start')
  //   .from(".tokenSectionFaq .gaspSlideRight", { y: 50, opacity : 0 }, 'start');
  // }, [tl]);
  return (
    <div className='liquiditySectionFaq faqSection py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 pb-5 gaspSlideLeft'>
            <h2>FAQ</h2>
          </div>
          <div className='col-12 accordion-section gaspSlideRight '>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={props => (
                      <div onClick={toggle}>
                        <Button {...props} />
                      </div>
                    )}
                    variant='link'
                    eventKey='0'
                  >
                    What are the requirements to access liquidity?{' '}
                    <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    <ul>
                      <li>You must be over the age of 18</li>
                      <li>Have a registered company</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={props => (
                      <div onClick={toggle}>
                        <Button {...props} />
                      </div>
                    )}
                    variant='link'
                    eventKey='1'
                  >
                    How long does it take to get set up? <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    <p>
                      For our default liquidity packages{','} you{"'"}ll be up
                      and running in 24 hours. For bespoke plans allow 5-7
                      business day for our team to build your model.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={props => (
                      <div onClick={toggle}>
                        <Button {...props} />
                      </div>
                    )}
                    variant='link'
                    eventKey='2'
                  >
                    What happens after I apply? <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    <p>
                      You{"'"}ll be sent an automated email containing the pdf
                      link for our package details. A representative from our
                      team will contact you within 24 hours.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={props => (
                      <div onClick={toggle}>
                        <Button {...props} />
                      </div>
                    )}
                    variant='link'
                    eventKey='3'
                  >
                    Are partners from all over the globe accepted?{' '}
                    <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    <p>
                      Yes we accept partners from all over the globe. You do
                      however need to check locally if you require regulation to
                      start your own prop fund.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
