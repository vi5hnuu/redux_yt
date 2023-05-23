import React from 'react'

function Info({ amount, bonus }) {

  return <div className='info-container'>
    <div className='info'>
      <p>Current Amount :</p>
      <p>${amount}</p>
    </div>
    <div className='info'>
      <p>Total Bonus :</p>
      <p>{bonus}</p>
    </div>
  </div>
}

export default Info