import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

function Counter({counter, inc, dec, rnd}) {
  return (
    <div className="red">
      <h1>{counter}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={rnd}>rnd</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.value
  }
}


export default connect(mapStateToProps, actions)(Counter)