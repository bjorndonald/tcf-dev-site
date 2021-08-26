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

  return (
    <div className='tokenSectionFaq faqSection py-5 d-flex align-items-center heightHv'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 pb-5 gaspSlideLeft'>
            <h2>FAQ</h2>
          </div>
          <div className='col-12 gaspSlideRight'>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                    When are new features going to be availble? <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='0'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                    How do i send money instantly with Traders Central Cash?{' '}
                    <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='1'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                    {' '}
                    How do i send money instantly with Traders Central Cash?{' '}
                    <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='2'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                    But actually{','} are you really serious about no account
                    fees? <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='3'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='4'>
                    I already use Traders Central Cash is this different?{' '}
                    <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='4'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
                  </Card.Body>
                </Accordion.Collapse>
              </Card>

              <Card>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant='link' eventKey='5'>
                    {' '}
                    Why should i use this to send money? <span>+</span>
                  </Accordion.Toggle>
                </Card.Header>

                <Accordion.Collapse eventKey='5'>
                  <Card.Body>
                    Anim pariatur cliche reprehenderit{','} enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute{','} non cupidatat skateboard dolor brunch.
                    Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon tempor{','} sunt aliqua put a bird on it squid
                    single-origin coffee nulla assumenda shoreditch et. Nihil
                    anim keffiyeh helvetica{','} craft beer labore wes anderson
                    cred nesciunt sapiente ea proident. Ad vegan excepteur
                    butcher vice lomo. Leggings occaecat craft beer
                    farm-to-table{','} raw denim aesthetic synth nesciunt you
                    probably haven{"'"}t heard of them accusamus labore
                    sustainable VHS.{' '}
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
