import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import "./signup.css";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const { username, email, password } = formData;
  const navigate = useNavigate(); // To programmatically navigate
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/auth/signup', formData);
      localStorage.setItem('token', res.data.token); // Store token in localStorage
      alert('Signup successful');

      navigate('/login'); // Redirect to login page
      
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="users container">
      <div>
    <form onSubmit={onSubmit} className='row g-3'>
      <h2>Hey,Signup Here</h2><br></br>
      <div className="col-12">
        <input type="text" className='form-control' name="username" value={username} onChange={onChange} placeholder="Name" required />
      </div><br></br>
      <div className="col-12">
        <input type="email" className='form-control' name="email" value={email} onChange={onChange} placeholder="Email" required />
      </div><br></br>
      <div className="col-12">  
        <input type="password" className='form-control' name="password" value={password} onChange={onChange} placeholder="Password" required />
      </div>  <br></br>
      <button type="submit" className='col-2 btn btn-primary'>Sign Up</button>
      <p>If you have already account <a href="http://localhost:5174/login">Login</a></p>
    </form>
    </div>
    </div>
  );
};

export default Signup;
