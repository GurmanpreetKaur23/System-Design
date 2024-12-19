import React from 'react';
import './style.css'; // Ensure the path is correct

function App() {
  return (
    <div className="links">
      <h2>Basics of Operating Systems</h2>
      
      <p>
        An Operating System (OS) is system software that manages computer hardware, software resources, and provides common services for computer programs. It acts as an intermediary between computer hardware and the user.
      </p>

      <h3>1. Introduction and Types of Operating Systems</h3>
      
      <a 
        href="https://youtu.be/WJ-UaAaumNA?si=DTAmjOy0vAheHpfL" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" 
          alt="YouTube Logo" 
          style={{ width: '50px', height: '50px' }}
        />
      </a>

      <p>
        Operating systems are crucial for managing the overall functioning of a computer. There are several types of operating systems, each suited to specific environments and requirements:
        <ul>
          <li><b>Batch Operating System:</b> Executes jobs in batches without user interaction.</li>
          <li><b>Time-Sharing Operating System:</b> Allows multiple users to access resources concurrently by giving each a time slice.</li>
          <li><b>Distributed Operating System:</b> Manages multiple independent computers as one system.</li>
          <li><b>Real-Time Operating System (RTOS):</b> Processes data in fixed time, used in critical applications like flight control systems.</li>
          <li><b>Network Operating System:</b> Provides networking features like file sharing and security. Examples: Windows Server, Linux.</li>
          <li><b>Mobile Operating System:</b> Designed for mobile devices, e.g., Android, iOS.</li>
        </ul>
      </p>

      <h3>2. Process Creation and Termination</h3>
      <a 
        href="https://www.geeksforgeeks.org/process-creation-and-deletions-in-operating-systems/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://media.geeksforgeeks.org/wp-content/uploads/20220413171839/gfgwhite.png" 
          alt="YouTube Logo" 
          style={{ width: '50px', height: '50px' }}
        />
      </a>
      <p>
        A process is a program in execution. It can be in various states: running, waiting, or terminated. The OS plays a vital role in managing these processes:
        <ul>
          <li><b>Process Creation:</b> When a program is executed, the OS creates a process and assigns resources.</li>
          <li><b>Forking:</b> A parent process creates a child process using system calls like <code>fork()</code>.</li>
          <li><b>Process Termination:</b> A process can terminate normally or abnormally, and the OS reclaims its resources after termination.</li>
        </ul>
      </p>

      <h3>3. Pre-emptive Scheduling Techniques</h3>
      <a 
        href="https://youtu.be/WJ-UaAaumNA?si=DTAmjOy0vAheHpfL" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img 
          src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" 
          alt="YouTube Logo" 
          style={{ width: '50px', height: '50px' }}
        />
      </a>
      <p>
        Pre-emptive scheduling allows the OS to interrupt a running process to allocate CPU time to another process. Some common algorithms include:
        <ul>
          <li><b>Round Robin (RR):</b> Processes are given fixed time slices. When a slice expires, the OS pre-empts the process.</li>
          <li><b>Shortest Job Next (SJN):</b> The OS selects the process with the least CPU time requirement.</li>
          <li><b>Priority Scheduling:</b> Processes are assigned priorities, and the highest priority process is executed first.</li>
          <li><b>Multilevel Queue Scheduling:</b> Processes are divided into queues based on priority and scheduling algorithm.</li>
          <li><b>Multilevel Feedback Queue Scheduling:</b> Processes can move between queues based on their behavior, such as CPU-bound or I/O-bound tasks.</li>
        </ul>
      </p>

      <br />
      
      <br />
     
    </div>
  );
}

export default App;
