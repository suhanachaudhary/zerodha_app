import axios from 'axios';
import { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token); // Store token in localStorage
      alert('Login successful');
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="users">
    <div>
    <form onSubmit={onSubmit} className='row g-3'>
      <h2>Hey, User</h2>
      <div className="col-12">
        <input type="email" className='form-control' name="email" value={email} onChange={onChange} placeholder="Email" required />
      </div>
      <br></br>
      <div className="col-12">
        <input type="password"  className='form-control' name="password" value={password} onChange={onChange} placeholder="Password" required />
        </div><br></br>
      <button type="submit" className='btn btn-primary col-2'>Login</button>
      <p>If you haven't account <a href="http://localhost:5174/signup">signup</a></p>
    </form>
    </div>
    </div>
  );
};

export default Login;
