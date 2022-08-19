import React, { useState, useReducer } from 'react'

const initialState = 0
const reducer = (state,action) => {
  console.log(action)
  switch(action.type){
    case "INCRIMENT":
      return state +1
      case "DECREMENT":
        return state -1
        case 'RESET':
          return initialState
        default:
          return state
  }
  return state

}
export default function UseReducer() {
  const [count, setCount] = useState(initialState)

  const [state, dispatch] = useReducer(reducer, initialState)
  const incrementHandler = () => {
    setCount(count + 1)

    console.log(count)
  }
  const decrementHandler = () => {

    count > 0 ? setCount(count - 1) : setCount(0)

  }
  const handleReset = () => {
    setCount(initialState)
  }


  return (
    <div className='py-5'>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center text-info'>
              This is Reducer Hook.
            </h1><br />
            <h1 className="text-center text-primary fw-bold">Counter App With useState</h1>

          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
              <h3 className="my-3">{count}</h3>
              <button className="btn btn-danger my-3" onClick={decrementHandler}>Decrement</button> <hr />
              <h1 className="text-center text-primary fw-bold">With useReducer</h1>
              <button className='btn btn-success' onClick={()=>{
                dispatch({type:"INCRIMENT"})
              }}> Increment</button>
              <h3 className="my-3">{state}</h3>
              <button className="btn btn-danger" onClick={()=>{
                dispatch({type:"DECREMENT"})
              }}>Decrement</button> <br />
              <button className="btn btn-warning mt-2 " onClick={()=>{
                dispatch({type:"RESET"})
              }}>Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
