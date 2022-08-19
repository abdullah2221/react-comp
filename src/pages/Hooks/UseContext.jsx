import React,{useContext} from 'react'
import { countContext } from '../../context/CountContext'

function UseContext() {
const {count,incrementHandler,decrementHandler,handleReset} =useContext(countContext) 
  return (
    <div className='py-5'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center text-info'>
                    This is useContext Hook.
                </h1><br />
                <h1 className="text-center text-primary fw-bold">Counter App</h1>

            </div>
            <div className="row mt-4">
                <div className="col text-center">
                    <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
                    <h3 className="my-3">{count}</h3>
                    <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button> <br />
                    <button className="btn btn-warning mt-2 " onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UseContext