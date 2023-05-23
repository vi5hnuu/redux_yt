import React, { useRef } from 'react'
import { actions } from '../store/slices/accountSlice'
import { useDispatch } from 'react-redux'

function Account({ amount }) {
  const ref = useRef(null)
  const dispatch = useDispatch()

  function onIncrementHandler() {
    dispatch(actions.increment())
  }
  function onDecrementHandler() {
    dispatch(actions.decrement())
  }
  function onIncrementByXHandler() {
    const x = +ref.current.value
    dispatch(actions.incrementAmtByX({ x }))
  }
  return <div className='account-container'>
    <h2>Accounts</h2>
    <div className='info'>
      <p>Amount</p>
      <p>${amount}</p>
    </div>
    <div className='actions'>
      <button onClick={onIncrementHandler}>Increment</button>
      <button onClick={onDecrementHandler}>Decrement</button>
      <div className='input-button'>
        <input ref={ref} type='number' defaultValue={0} />
        <button onClick={onIncrementByXHandler}>Increment By X</button>
      </div>
    </div>
  </div>
}

export default Account