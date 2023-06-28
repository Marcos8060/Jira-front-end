import React from 'react'
import Lottie from "lottie-react";
import animatedData from '../assets/login.json';


const MyLottieAnimation = () => {
    return <Lottie animationData={animatedData} loop={true} autoplay={true} />;
  };

const Login = () => {
  return (
    <>
    <section className='flex justify-center gap-4 md:w-7/12 w-11/12 h-[70vh] my-20 mx-auto bg-white md:shadow-2xl rounded'>
        <div className='md:w-1/2 md:block hidden bg-rblue rounded'>
            <MyLottieAnimation />
        </div>
        <div className='md:w-1/2 w-full px-4 my-auto'>
            <img className='w-40 object-cover mx-auto' src="/images/jira.png" alt="" />
            <h1 className='text-center font-black text-xl uppercase my-4'>Welcome back to Jira</h1>
            <form className='grid'>
                <input className='w-full border px-2 border-rblue rounded py-2 focus:outline-none my-2' type="email" placeholder='Email' />
                <input className='border px-2 border-rblue rounded py-2 focus:outline-none my-2' type="password" placeholder='Password' />
                <button className='bg-rblue text-white px-4 py-2 rounded'>Login</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login