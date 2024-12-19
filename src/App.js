import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import ETE from './ETE';

function App() {
  const [showCards, setShowCards] = useState(true); // State to toggle card visibility
  const navigate = useNavigate(); // Hook for navigation

  const handleView = () => {
    navigate("/ete");
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CHO System Design (22CS024).pdf';  // Path from the root of the public folder
    link.download = 'CHO System Design (22CS024).pdf';  // Specify the file name for the download
    link.click();  // Simulate a click to start the download
  };

  return (
    <div className="app-container">
      <div className="left-section">
        <div className="title system">System</div>
        <div className="title design">Design</div>
        <div className="subtitle">Sem 5</div>
      </div>

      {showCards && (
        <div className="card-container">
          <div className="card">
            <h1>COURSE HANDOUT 2023-2024</h1>
            <button className="button check" onClick={handleDownload}>Download</button>
          </div>
          <Link to={"/ete"} className="card">
            <h1>END TERM</h1>
            <button className="button check" onClick={handleView}>View</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default App;
