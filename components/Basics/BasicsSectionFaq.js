import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

export default function BasicsSectionFaq ({faqs}) {
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
    <div className='basicsTopSectionFaq faqSection pt-3 pb-5 d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 accordion-section gaspSlideRight '>
            <Accordion>
            {faqs.map((faq, i) => (
              <Card key={i}>
                <Card.Header>
                  <Accordion.Toggle
                    as={props => (
                      <div onClick={toggle}>
                        <Button {...props} />
                      </div>
                    )}
                    variant='link'
                    eventKey={faq.id}
                  >
                    <h6>{faq.title}</h6>
                    <span>+</span>
                    <span style={{ display: 'none' }}>-</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey={faq.id}>
                  <Card.Body>
                    {faq.body}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
