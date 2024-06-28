import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InternshipRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    branch: '',
    section: '',
    mobileNumber: '',
    mailId: '',
    companyName: '',
    companyAddress: '',
    monthlyStipend: '',
    duration: '',
    startingDate: '',
    endingDate: '',
    hrName: '',
    hrMail: '',
    companyWebsite: '',
    role: '',
    offerLetter: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend, etc.
    console.log(formData); // For demonstration, logging form data to console

    // Show alert
    alert('Successfully Registered');

    // Navigate back to '/Student_Dashboard'
    navigate('/Student_Dashboard');
  };


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Internship Registration Form</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                  <input type="text" className="form-control" id="rollNumber" value={formData.rollNumber} onChange={handleChange} placeholder="Enter roll number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="branch" className="form-label">Branch</label>
                  <input type="text" className="form-control" id="branch" value={formData.branch} onChange={handleChange} placeholder="Enter branch" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="section" className="form-label">Section</label>
                  <input type="text" className="form-control" id="section" value={formData.section} onChange={handleChange} placeholder="Enter section" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNumber" className="form-label">Mobile Number</label>
                  <input type="text" className="form-control" id="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter mobile number" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="mailId" className="form-label">Mail Id</label>
                  <input type="email" className="form-control" id="mailId" value={formData.mailId} onChange={handleChange} placeholder="Enter email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">Internship Company Name</label>
                  <input type="text" className="form-control" id="companyName" value={formData.companyName} onChange={handleChange} placeholder="Enter company name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyAddress" className="form-label">Company Address</label>
                  <textarea className="form-control" id="companyAddress" value={formData.companyAddress} onChange={handleChange} rows="3" placeholder="Enter company address" required></textarea>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="monthlyStipend" className="form-label">Monthly Stipend</label>
                    <input type="text" className="form-control" id="monthlyStipend" value={formData.monthlyStipend} onChange={handleChange} placeholder="Enter stipend" required />
                  </div>
                  <div className="col">
                    <label htmlFor="duration" className="form-label">Duration</label>
                    <input type="text" className="form-control" id="duration" value={formData.duration} onChange={handleChange} placeholder="Enter duration" required />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col">
                    <label htmlFor="startingDate" className="form-label">Starting Date</label>
                    <input type="text" className="form-control" id="startingDate" value={formData.startingDate} onChange={handleChange} placeholder="Enter starting date" required />
                  </div>
                  <div className="col">
                    <label htmlFor="endingDate" className="form-label">Ending Date</label>
                    <input type="text" className="form-control" id="endingDate" value={formData.endingDate} onChange={handleChange} placeholder="Enter ending date" required />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="hrName" className="form-label">HR Name</label>
                  <input type="text" className="form-control" id="hrName" value={formData.hrName} onChange={handleChange} placeholder="Enter HR or Lead name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="hrMail" className="form-label">HR Mail Id</label>
                  <input type="email" className="form-control" id="hrMail" value={formData.hrMail} onChange={handleChange} placeholder="Enter HR or Lead email" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="companyWebsite" className="form-label">Company Website</label>
                  <input type="url" className="form-control" id="companyWebsite" value={formData.companyWebsite} onChange={handleChange} placeholder="Enter company website" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">Internship Role</label>
                  <input type="text" className="form-control" id="role" value={formData.role} onChange={handleChange} placeholder="Enter internship role" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="offerLetter" className="form-label">Offer Letter URL</label>
                  <input type="url" className="form-control" id="offerLetter" value={formData.offerLetter} onChange={handleChange} placeholder="Enter offer letter URL" required />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InternshipRegistration;
