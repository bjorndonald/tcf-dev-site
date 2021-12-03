import PositionData from './PositionData.json';
import React from 'react'
import {Accordion, Button, Card} from "react-bootstrap";

function PositionTable() {

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

    // Building Data Rows
    function TableRow(props) {
        return (
            <tr>
                <td>{props.pair}</td>
                <td>{props.position50k}</td>
                <td>{props.position25k}</td>
                <td>{props.position12_5k}</td>
            </tr>
        );
    }

    return (
        <div>
            <table>
                <tr>
                    <th>Currency Pair</th>
                    <th>Usual Position Per US50,000 Balance</th>
                    <th>Usual Position Per US25,000 Balance</th>
                    <th>Usual Position Per US12,500 Balance</th>
                </tr>
                {PositionData.map((data, i) => <TableRow pair={data.pair} position50k={data.position50k} position25k={data.position25k} position12_5k={data.position12_5k} key={i}/>)}
            </table>

            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={props => (<div onClick={toggle}><Button {...props} /></div>)} variant='link' eventKey='0'>
                            <p>Important Read</p>
                            <span>+</span>
                            <span style={{display: 'none'}}>-</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            <ol>
                                <li><p>Margin requirements are automatically controlled by <a href='https://dev.traderscentral.com/bagley-score' target='_blank' rel='noreferrer'>Bagley</a>, margin requirements float between the range from 1 to 1.7 and depending on currency exchange rates and market volatility.</p></li>
                                <li><p>During the winter wind-down (December to February), Summer slowdown (June to August) Bagley automatically adjusts lot sizing to the lower end of the margin requirements band. During the volatility months (March to May & September to December) Bagley automatically adjusts lot sizing to the higher end of the margin requirements band.</p></li>
                                <li><p>In Market crashes and black swan events where there’s a cascade of liquidations, Bagley will keep adjusting the margin requirements automatically.</p></li>
                                <li><p>The table refers to the max lot size when trading a particular pair alone with no other trades open.</p></li>
                                <li><p>Hedging positions are not allowed as it results in a net exposure. <a href='https://dev.traderscentral.com/bagley-score' target='_blank' rel='noreferrer'>Bagley</a> will automatically prevent you from hedging.</p></li>
                                <li><p>In order to open multiple trades of different pairs at the same time, you will need to reduce your lot size using the table max lot size per pair as a guide.</p></li>
                            </ol>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    )
}

export default PositionTable
