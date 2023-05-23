import React, { useEffect, useRef, useState } from 'react'
import { actions } from '../store/slices/accountSlice'
import { useDispatch, useSelector } from 'react-redux'
import { thunks } from '../store/slices/accountSlice'
import { ClockLoader } from 'react-spinners'

function Account({ amount }) {
  const ref = useRef(null)
  const accountS = useSelector(state => state.accountS)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunks.initilizeAmount(1))
  }, [dispatch])

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
      {(accountS.pending && !accountS.error) ? <ClockLoader size={24} /> : <p>${amount}</p>}
      {accountS.error && <p>${accountS.error}</p>}
    </div>
    <div className='actions'>
      <button disabled={accountS.pending} onClick={onIncrementHandler}>Increment</button>
      <button disabled={accountS.pending} onClick={onDecrementHandler}>Decrement</button>
      <div className='input-button'>
        <input ref={ref} type='number' defaultValue={0} />
        <button disabled={accountS.pending} onClick={onIncrementByXHandler}>Increment By X</button>
      </div>
    </div>
  </div>
}

export default Account