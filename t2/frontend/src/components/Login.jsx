import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/home');
        } else {
          alert('Incorrect credentials! Please try again.');
        }
      })
      .catch(err => {
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:3001/auth/google"; 
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control login-input"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control login-input"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn login-btn w-100 mb-3">Login</button>
        </form>

        <button onClick={handleGoogleLogin} className="btn google-btn w-100 mb-3">
          <img
            src="https://img.icons8.com/color/16/000000/google-logo.png"
            alt="Google"
            style={{ marginRight: '8px' }}
          />
          Login with Google
        </button>

        <p className="text-center mt-3 login-link">
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
