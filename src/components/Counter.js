import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import { useSelector, useDispatch } from 'react-redux';
import {inc, dec, rnd} from '../actions'

function Counter() {

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch()

  return (
    <div className="red">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(inc())}>inc</button>
      <button onClick={() => dispatch(dec())}>dec</button>
      <button onClick={() => dispatch(rnd())}>rnd</button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value
//   }
// }


// export default connect(mapStateToProps, actions)(Counter)
export default Counter