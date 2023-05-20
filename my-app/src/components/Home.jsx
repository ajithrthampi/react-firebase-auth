import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../firebase'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {logout} = UserAuth()
  const navigate = useNavigate()

  const handleLogout = async() => {
    try {
      await logout()
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='flex flex-col gap-5 justify-center items-center h-screen'>
        <h1 className='text-4xl text-white'>Hello world</h1>
        <button className='px-5 py-2 bg-blue-600 rounded font-bold' onClick={handleLogout}>Logout</button>
      </div>
    </>
  )
}

export default Home