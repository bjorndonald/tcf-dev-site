import React, { useEffect } from 'react'
import { gsap } from 'gsap/dist/gsap'
import { Accordion, Card, Button } from 'react-bootstrap'

export default function TokenSectionFaq () {
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

  return (
    <div className='tokenSectionFaq faqSection py-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 header-section gaspSlideLeft'>
            <h2>FAQ</h2>
            <h4>Ready to learn how it works?</h4>
          </div>
          <div className='col-12 gaspSlideRight'>
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
                    What are TCT's? <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    Currently traders central token is being tested in the
                    proprietary arm of the ecosystem. Its redeemable for
                    discounts on funding plans.
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
                    How can I earn TCT's? <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    By signing up, shaking your phone daily and reaching
                    milestones.
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
                    Can send TCT's to friends?
                    <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    Yes you can send to friends and request from them also.
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
                    When are new use cases going to be available? <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    We’re working to release new features to earn and redeem
                    tct's on a rolling basis.
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
