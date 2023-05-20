import React, { useState } from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [err, setErr] = useState("")
    const navigate = useNavigate()

   const { signIn } = UserAuth()

   const handleSubmit = async (e) => {
     e.preventDefault()
     setErr("")
     try {
        await signIn(email,password)
        navigate("/home")
     } catch (error) {
        if(error.code === 'auth/user-not-found'){
           console.log("No user");
           setErr("User does not exist.")
        } if(error.code === "auth/invalid-email"){
            setErr("Please add an email")
        } if(error.code === 'auth/missing-password'){
            setErr("Please Enter password")
        } if(error.code === 'auth/wrong-password'){
            setErr("Password is wrong")
        }
        //  setErr(error.message)
         console.log(error.message);
     }
   }

  return (
   <>
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden ">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl ">
                    <h1 className="text-3xl font-semibold text-center text-blue-700 ">
                       Log in
                    </h1>
                    {
                        err && <div className='text-red-600'>{err}</div>
                    }
                    <form className="mt-6" onClick={handleSubmit}>
                    
                        <div className="mb-2">
                            <label for="emai" className="block text-sm font-semibold text-gray-800">
                                Email
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)}  type="email" className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <div className="mb-2">
                            <label for="password" className="block text-sm font-semibold text-gray-800">
                                Password
                            </label>
                            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                        </div>
                        <a href="#" className="text-xs text-blue-600 hover:underline">
                            Forget Password?
                        </a>
                        <div className="mt-6">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Login 
                            </button>
                        </div>
                    </form>

                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Dont have a account?{" "}
                        <Link to="/signup">
                             <a href="#" className="font-medium text-blue-600 hover:underline">
                            Signup
                        </a>
                        </Link>
                       
                    </p>
                </div>
            </div>
   </>
  )
}

export default Login