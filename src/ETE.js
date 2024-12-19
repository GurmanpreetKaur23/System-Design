import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './ETE.css';



function App() {
  return (
    <div className="links">
      <h2>SYSTEM DESIGN END TERM</h2>
      <ul>
        <li>
          <Link to="/os">Basics of Operating Systems</Link>
        </li>
        <li>
          <Link to="/ps">Process Scheduling</Link>
        </li>
        <li>
          <Link to="/t">Thread and Multithreading</Link>
        </li>
        <li>
          <Link to="/memory-management">Memory Management</Link>
        </li>
        <li>
          <Link to="/virtual-memory">Virtual Memory</Link>
        </li>
        <li>
          <Link to="/fs">File Systems</Link>
        </li>
        <li>
          <Link to="/cs">Concurrency and Synchronization</Link>
        </li>
        <li>
          <Link to="/amm">Advanced Memory Management</Link>
        </li>
        <li>
          <Link to="/oss">Operating Systems Security</Link>
        </li>
        <li>
          <Link to="/dbms">Introduction to DBMS and RDBMS</Link>
        </li>
      </ul>
</div>
      
  );
}

export default App;
