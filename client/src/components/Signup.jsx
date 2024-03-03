import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Signup = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      setLoading(true)
      setError(false)
      const response = await fetch('http://localhost:3050/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json()
      setLoading(false)
      if (data.success == false) {
        setError(true)
        return;
      }
      navigate('/sign-in')
    }
    catch (error) {
      setLoading(false)
      setError(true)
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type="text"
          name="username"
          id="username"
          placeholder='User Name'
          onChange={handleChange}
          className='bg-slate-100 p-3 rounded-lg'
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          onChange={handleChange}
          className='bg-slate-100 p-3 rounded-lg'
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder='password'
          onChange={handleChange}
          className='bg-slate-100 p-3 rounded-lg'
        />
        <button type="submit"
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading..' : 'Sign Up'}
        </button>
      </form>
      <div className='flex gap-4'>
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className='text-blue-500'>Sign in</span>
        </Link>
      </div>
      <p className='text-red-500'>{error && 'Something went wrong'}</p>
    </div >
  )
}

export default Signup