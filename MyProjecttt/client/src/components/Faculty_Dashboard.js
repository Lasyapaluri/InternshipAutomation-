import React, { useState } from 'react';
import '../components/CSS/styles.css'; // Assume you have a separate CSS file for styling

function FacultyDashboard() {
  const [internships, setInternships] = useState([
    // Your internship data remains unchanged
  ]);

  const [filter, setFilter] = useState({
    name: '',
    company: '',
    stipend: '',
    branch: '',
    year: '',
    section: '',
    location: ''
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter((prevFilter) => ({...prevFilter, [name]: value }));
  };

  const handleSearch = () => {
    // You can add additional logic here to handle the search functionality
    console.log('Search button clicked!');
  };

  const filteredInternships = internships.filter((internship) => {
    const {
      name,
      company,
      stipend,
      branch,
      year,
      section,
      location
    } = filter;

    if (name &&!internship.name.toLowerCase().includes(name.toLowerCase())) return false;
    if (company &&!internship.company.toLowerCase().includes(company.toLowerCase())) return false;
    if (stipend && internship.stipend < parseInt(stipend)) return false;
    if (branch && internship.branch!== branch) return false;
    if (year && internship.year!== year) return false;
    if (section && internship.section!== section) return false;
    if (location &&!internship.location.toLowerCase().includes(location.toLowerCase())) return false;

    return true;
  });

  return (
    <div className="container">
      <div className="display-3 fw-bold text-center mt-2 mb-2">Faculty Dashboard</div>
      <div className="filter-container small-filter">
        <h4>Filter Internships</h4>
        <form>
          <div className="filter-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={filter.name}
              onChange={handleFilterChange}
              placeholder="Search by name"
              className="form-control small-input"
            />
          </div>
          <div className="filter-group">
            <label>Company:</label>
            <input
              type="text"
              name="company"
              value={filter.company}
              onChange={handleFilterChange}
              placeholder="Search by company"
              className="form-control small-input"
            />
          </div>
          <div className="filter-group">
            <label>Stipend:</label>
            <input
              type="number"
              name="stipend"
              value={filter.stipend}
              onChange={handleFilterChange}
              placeholder="Search by stipend"
              className="form-control small-input"
            />
          </div>
          <div className="filter-group">
            <label>Branch:</label>
            <select
              name="branch"
              value={filter.branch}
              onChange={handleFilterChange}
              className="form-control small-input"
            >
              <option value="">Select branch</option>
              <option value="CSE">CSE</option>
              <option value="IT">IT</option>
              <option value="ECE">ECE</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Year:</label>
            <select
              name="year"
              value={filter.year}
              onChange={handleFilterChange}
              className="form-control small-input"
            >
              <option value="">Select year</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Section:</label>
            <select
              name="section"
              value={filter.section}
              onChange={handleFilterChange}
              className="form-control small-input"
            >
              <option value="">Select section</option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={filter.location}
              onChange={handleFilterChange}
              placeholder="Search by location"
              className="form-control small-input"
            />
          </div>
          <button type="button" onClick={handleSearch} className="btn btn-primary small-btn mt-2">
            Search
          </button>
        </form>
      </div>
      <div className="internship-list">
        {filteredInternships.map((internship) => (
          <div key={internship.id} className="internship-card">
            <h5>{internship.name}</h5>
            <p>Company: {internship.company}</p>
            <p>Stipend: {internship.stipend}</p>
            <p>Branch: {internship.branch}</p>
            <p>Year: {internship.year}</p>
            <p>Section: {internship.section}</p>
            <p>Location: {internship.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyDashboard;