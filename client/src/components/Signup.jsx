import React from 'react'

const Signup = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form method="post" action="/api/auth">
        <input type="text" name="username" id="" placeholder='User Name' />
        <input type="email" name="email" id="" placeholder='Email' />
        <input type="password" name="password" id="" placeholder='password' />
        <button type="submit" className='top-96 bg-black'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup