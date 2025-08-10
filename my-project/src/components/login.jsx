import React, { useState } from 'react'

const login = ()=> {
  const [isloginMode, setIsLoginMode] = useState(true)
  return (
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
      {/*Header title*/}

      <div className=' flex justify-center mb-4'>
        <h2 className='text-3xl font-semibold text-center'> {isloginMode ? "Login" : "Signup"}</h2>
      </div>

     
        {/*Tab Controls */}
        <div className='relative flex h-12'>

        <button onClick={() => setIsLoginMode(true)}> Login</button>

        <button onClick={() => setIsLoginMode(false)}> Signup</button>
     
       <div></div>
      </div>
       


      {/*Form section */}
      <form>
        {!isloginMode &&(
          <input type="text" placeholder='Name' required />
        )}

        {/* Shared inoutfield */}

        <input type="email" placeholder='Email Address' required/>
        <input type="password" placeholder='Password'required />

        {/*Signup field */}
        {!isloginMode &&(

          <input type="password" placeholder=' confirm password' required />

        )}

        {/*Forget password for login */}
        {isloginMode && (

          <div>
            <p>Forget Password</p>
          </div>
        )}

        {/*Shared button */}

        <button>
          {isloginMode ? "Login" : "Signup"}
        </button>

        {/*Switch link */}

        <p>
          {isloginMode ? "Don't have a account" : "Already have an account"}

          <a href="#" onClick={(e)=> setIsLoginMode (! isloginMode)}
>           {isloginMode ? "Signup " : "Login"}
          </a>

        </p>
      </form>

    </div>


  )
}

export default login