import React,{useRef} from 'react'
import noti from "../../assets/audio.mp3"

function UseReff() {

    const audioPlayer = useRef(null)
    const handleOrder =()=>{
        console.log(audioPlayer.current.play())
        
    }
   
  return (
    <div className='py-5'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center text-info'>
            This is useReff class.
        </h1>

            </div>
            <div className="row mt-4">
                <div className="col text-center">
                    <audio src={noti} ref={audioPlayer}></audio> <br />
                    <button className="btn btn-info mx-2" onClick={handleOrder}> Play</button>
                    
                    {/* <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
                    <h3 className="my-3">{count}</h3>
                    <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button> <br />
                    <button className="btn btn-warning mt-2 " onClick={() => { setCount(0) }}>Reset</button> */}
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default UseReff