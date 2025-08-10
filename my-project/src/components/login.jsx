import React, { useState } from 'react'

const login = () => {
  const [isLoginMode, setIsLoginMode] = useState(true)
  return (
    <div className='w-[430px] bg-white p-8 rounded-2xl shadow-lg'>
      {/*Header title*/}

      <div className=' flex justify-center mb-4'>
        <h2 className='text-3xl font-semibold text-center'> {isLoginMode ? "Login" : "Signup"}</h2>
      </div>

     
        {/*Tab Controls */}
        <div className=' relative flex h-12 mb-6 border border-gray-300 rounded-full overflow-hidden'>

        <button onClick={() => setIsLoginMode(true)} className='{ flex  pl-15 w-1/2 text-lg font-medium trasition-all z-10 ${isLoginMode ? "text-black" : "text-black"}}'> Login</button>

        <button onClick={() => setIsLoginMode(false)} className='{ flexn pl-2/1 w-1/2 text-lg font-medium transition-all z-10 ${ !isLoginMode ?"text-white" : "text-black"}}'> Signup</button>
     
       <div className={'absolute top-0 h-full w-1/2 rounded-full bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-300 ${isLoginMode ? "left-1 : right-1/2"}'}></div>
      </div>
       


      {/*Form section */}
      <form className='space-y-4'>
        {!isLoginMode &&(
          <input type="text" placeholder='Name' required  className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:-gray-400'/>
        )}

        {/* Shared inoutfield */}

        <input type="email" placeholder='Email Address' required  className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:-gray-400'/>
        <input type="password" placeholder='Password'required   className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:-gray-400'/>

        {/*Signup field */}
        {!isLoginMode &&(

          <input type="password" placeholder=' confirm password' required   className='w-full p-3 border-b-2 border-gray-300 outline-none focus:border-cyan-500 placeholder:-gray-400'/>

        )}

        {/*Forget password for login */}
        {isLoginMode && (

          <div className="text-right">
            <p className='text-cyan-600 hover:underline'>Forget Password</p>
          </div>
        )}

        {/*Shared button */}
        <button className='w-full p-3 bg-gradient-to-r from-blue-700 via-cyan-600 to-cyan-300 text-white rounded-full text-lg font-medium hover:opacity-90 transition'>
          {isLoginMode ? "Login" : "Signup"}
        </button>

        {/*Switch link */}

        <p className='text-center text-gray-600'>
          {isLoginMode ? "Don't have a account" : "Already have an account"}

          <a href="#" onClick={(e)=> setIsLoginMode (! isLoginMode)} className='text-cyan-600 hover: underline'
>           {isLoginMode ? "Signup " : "Login"}
          </a>

        </p>
      </form>

    </div>


  )
}

export default login