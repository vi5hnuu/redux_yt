import React, { useEffect, useRef } from 'react'
import { actions } from '../store/slices/bonusSlice'
import { useDispatch, useSelector } from 'react-redux'
import { thunks } from '../store/slices/bonusSlice'
import { ClockLoader } from 'react-spinners'

function Bonus({ bonus }) {
  const ref = useRef(null)
  const bonusS = useSelector(state => state.bonusS)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(thunks.initilizeBonus(1))
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

  return <div className='bonus-container'>
    <h2>Bonuses</h2>
    <div className='info'>
      <p>Points</p>
      {(bonusS.pending && !bonusS.error) ? <ClockLoader size={24} /> : <p>${bonus}</p>}
      {bonusS.error && <p>${bonusS.error}</p>}
    </div>
    <div className='actions'>
      <button disabled={bonusS.pending} onClick={onIncrementHandler}>Increment</button>
      <button disabled={bonusS.pending} onClick={onDecrementHandler}>Decrement</button>
      <div className='input-button'>
        <input ref={ref} type='number' defaultValue={0} />
        <button disabled={bonusS.pending} onClick={onIncrementByXHandler}>Increment By X</button>
      </div>
    </div>
  </div>
}

export default Bonus