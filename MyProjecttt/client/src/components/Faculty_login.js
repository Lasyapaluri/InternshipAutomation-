import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Faculty_login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle login logic here, e.g., validate credentials
      console.log('Login submitted:', { username, email, password });
      // Reset form fields if needed
      // setUsername('');
      // setEmail('');
      // setPassword('');
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4" style={{ background: '#f8f9fa' }}>
              <h2 className="text-center mb-4">Faculty Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username:</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="d-grid gap-2 text-center">
                <Link to='/Faculty_Dashboard'>
                  <button type="submit" className="btn btn-primary btn-lg">Login</button>
                  </Link>
                </div>
                <div className="text-center mt-3">
                  New User? <Link to="/Faculty_Reg" className="link-primary">Register Here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Faculty_login
