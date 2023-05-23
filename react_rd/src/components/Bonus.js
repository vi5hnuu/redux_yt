import React, { useRef } from 'react'
import { actions } from '../store/slices/bonusSlice'
import { useDispatch } from 'react-redux'

function Bonus({ bonus }) {
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
  return <div className='bonus-container'>
    <h2>Bonuses</h2>
    <div className='info'>
      <p>Points</p>
      <p>{bonus}</p>
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

export default Bonus