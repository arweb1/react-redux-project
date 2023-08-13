import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialState = 0;

const reducer = (state, action) => {
  switch(action.type){
    case 'INC': 
      return state + 1;
    default: 
      return state
  }
}

let state = reducer(initialState, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
state = reducer(state, {type: 'INC'});
console.log(state)

root.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
