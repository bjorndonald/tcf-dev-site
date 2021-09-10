import React from 'react'
export const fees = {
  deposits: [
    {
      image: <img src='/images/crypto/fees/deposits_1.png' alt='' />,
      title: 'Credit Card',
      first: '2.99%',
      second: 'Funds available in minutes',
      min: '$5.00',
      max: '$10,000.00',
      description: 'Some banks delay sending the e-transfer up to an hour.'
    },
    {
      image: <img src='/images/crypto/fees/deposits_2.png' alt='' />,
      title: 'Wire Transfer',
      first: 'Free',
      second: '1-2 working days',
      min: '$20.00',
      max: 'No Max',
      description: 'Some banks charge for sending a wire transfer.'
    },
    {
      image: <img src='/images/crypto/fees/deposits_3.png' alt='' />,
      title: 'Crypto',
      first: 'Free',
      second: '~ 20 minutes',
      min: 'No Min',
      max: 'No Max',
      description:
        'Crypto will be available after confirmation on the blockchain.'
    }
  ],
  trading: [
    {
      image: <img src='/images/crypto/fees/trading_1.png' alt='' />,
      title: 'Fiat',
      first: '1.99% for crypto purchases',
      second: 'Funds available in minutes',
      min: '$20.00',
      max: 'No Max',
      description: 'Only USD, RMB for available crypto purchases.'
    },
    {
      image: <img src='/images/crypto/fees/deposits_3.png' alt='' />,
      title: 'Crypto',
      first: '1.99% for swaping',
      second: 'Confirmations vary for depending on pair',
      min: '$20.00',
      max: 'No Max',
      description:
        'Crypto will be available after confirmation on the blockchain.'
    }
  ],
  withdrawals: [
    {
      image: <img src='/images/crypto/fees/deposits_2.png' alt='' />,
      title: 'Wire Transfer',
      first: '0.22%',
      second: '1-3 working days',
      min: '$20.00',
      max: 'No Max',
      description: 'Some banks charge for receiving a wire transfer.'
    },
    {
      image: <img src='/images/crypto/fees/deposits_3.png' alt='' />,
      title: 'Crypto',
      first: '0.22%',
      second: 'No delay',
      min: '$1.00',
      max: 'No Max',
      description: 'Miner fees are NOT covered by TC.Crypto.'
    }
  ]
}
