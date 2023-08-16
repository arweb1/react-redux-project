import React from 'react'

function Counter({counter, inc, dec, rnd}) {
  return (
    <div class="red">
      <h1>{counter}</h1>
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={rnd}>rnd</button>
    </div>
  )
}

export default Counter