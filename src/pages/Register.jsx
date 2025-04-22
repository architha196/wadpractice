import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Registered:', form)
    alert('Registration successful!')
    navigate('/login')
  }

  return (
    <div className="page">
      <h1>Student Registration</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value})}
          required
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={form.email}
          onChange={(e) => setForm({...form, email: e.target.value})}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={form.password}
          onChange={(e) => setForm({...form, password: e.target.value})}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}