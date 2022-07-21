import React,{useState} from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'

function Login() {
    // const [userName,setName]= useState("")
    // const[password1,setPassword] = useState("")
    const{myName,setMyName}=useContext(authContext)
    const[state,setState]= useState({
        email:``,
        pasword: ``,
    })
    const handleChange = (e)=>{
        setState({ ...state,[e.target.name]:e.target.value})

    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(state)
        // console.log(`YOur userName is ${userName} and passwor is ${password1}`)
    
    }
 
    const showData = ()=>{
        
    }
    


    return (
        <div className="py-5">
            <div className="container">
                <div className="row col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                    <div className="card p-2 p-md-3 p-lg-4">
                        <h2 className='text-dark text-center mb-3'>Login Form</h2>
                        <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" name="email"  id="" defaultValue={myName} placeholder='Enter Name'  className='form-control' onChange={(e)=>{setMyName(e.target.value)}} />
                                    </div>
                                </div>
                        <form onSubmit={handleSubmit}>
                            <div className="container">
                                <div className="row mb-3">
                                    <div className="col">
                                        <input type="text" name="email" id="" placeholder='Enter Yout name'  className='form-control' onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3 ">
                                    <div className="col">
                                        <input type="password" name="password" id="" placeholder='Enter Your Password' className='form-control'onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <button className='btn btn-success w-100' onClick={showData}>Login </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Login