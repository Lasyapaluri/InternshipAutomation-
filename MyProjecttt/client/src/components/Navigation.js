import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../src/components/Images/Vnr_logo.jpg';  // Ensure the path to your image is correct

function Navigation() {
  return (
    <nav className='navbar navbar-light shiv '>
      <div className='container-fluid d-flex justify-content-between align-items-center'>
        {/* Image on the left */}
        <Link className='navbar-brand' to="/">
          <img src={pic1} alt="Logo" width="80" height="80" className="d-inline-block align-top" />
        </Link>
        {/* Centered text */}
        <div className='mx-auto'>
          <h5 className='text-center mb-0 text-white'>UG/PG Internship Automation</h5>
        </div>
        {/* Dummy element to balance the alignment */}
        <div className='navbar-brand' style={{ visibility: 'hidden' }}>
          <img src={pic1} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
