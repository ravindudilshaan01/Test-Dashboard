import React from 'react';
import './dashboard.css';

const Dashboard = () => {
    const username = "Pinto"; // Replace with dynamic username if available
  return (
    <div className="dashboard-page">
      <div className="welcome-message">
        Welcome back, {username}!
      </div>
      <button className="add-user-button">+ Add User</button>
    <div className="dashboard-container">
      <div className="dashboard-tile">
        <h2>Accident Reporting</h2>
        <p>Report and manage accidents.</p>
        <button className="tile-button">Go to Accident Reporting</button>
      </div>
      <div className="dashboard-tile">
        <h2>Complaint Management</h2>
        <p>Manage and Track the complaints.</p>
        <button className="tile-button"> Go to Complaint Management</button>
      </div>
      <div className="dashboard-tile">
        <h2>Report</h2>
        <p>Generate and view reports for your organization.</p>
        <button className="tile-button">Go to Reports</button>
      </div>
      <div className="dashboard-tile">
        <h2>Principle Changers</h2>
        <p>Manage and track principle changes in your organization.</p>
        <button className="tile-button">Go to Principle Changers</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
