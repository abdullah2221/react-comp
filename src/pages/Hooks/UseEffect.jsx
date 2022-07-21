import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [status, setStatus] = useState("Active")
    const [gender, setGender] = useState("")
    useEffect(() => {
        console.log( status,gender)

    }, [status, gender])
    const handleGender = (e) => {
        setGender(e.target.value)


    }

    return (

        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center text-info'>
                            This is useEffect class.
                        </h1><br />
                        <h1 className="text-center text-primary fw-bold">Counter App</h1>

                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 text-center">
                            <select name="" id="" className='form-control' onChange={(e) => { setStatus(e.target.value) }}>
                                <option value="Active">Active</option>
                                <option value="InActive">InActive</option>
                                <option value="Pending">Pending</option>
                                <option value="Submit">Submit</option>
                            </select>

                            {/* <button className='btn btn-success' onClick={incrementHandler}> Increment</button>
                            <h3 className="my-3">{count}</h3>
                            <button className="btn btn-danger" onClick={decrementHandler}>Decrement</button> <br />
                            <button className="btn btn-warning mt-2 " onClick={() => { setCount(0) }}>Reset</button> */}
                        </div>
                        <div className="col-12 col-md-6 mt-2 d-flex align-item-center ">
                            <p className='d-inline-block fw-bold me-3 mb-0'>Gender:</p>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="male" checked={gender==="male"} value="male" onChange={handleGender} />
                                <label className="form-check-label" htmlFor="male">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="female" checked={gender==="female"} value="female" onChange={handleGender} />
                                <label className="form-check-label" htmlFor="female">Female</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="other" value="Other" checked={gender==="other"} onChange={handleGender} />
                                <label className="form-check-label" htmlFor="other">Other</label>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UseEffect