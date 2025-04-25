import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Register.css'; 

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result => {
                if (result.data === "Already registered") {
                    alert("E-mail already registered! Please Login to proceed.");
                    navigate('/login');
                } else {
                    alert("Registered successfully! Please Login to proceed.");
                    navigate('/login');
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="register-page">
            <div className="register-box shadow-lg">
                <h2 className='register-heading mb-4'>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 text-start">
                        <label className="form-label"><strong>Name</strong></label>
                        <input 
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label"><strong>Email Id</strong></label>
                        <input 
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3 text-start">
                        <label className="form-label"><strong>Password</strong></label>
                        <input 
                            type="password"
                            placeholder="Enter Password"
                            className="form-control"
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-warning w-100 register-btn">Register</button>
                </form>
                <p className="text-center mt-3 text-white">Already have an account?</p>
                <Link to='/login' className="btn btn-outline-light w-100">Login</Link>
            </div>
        </div>
    );
};

export default Register;
