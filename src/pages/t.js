import React from 'react';
import './style.css';

function App() {
  return (
    
      <div className="links">
        <h2>Thread and Multithreading</h2>

        <p>
          Threads and multithreading are essential concepts in modern computing. A thread is the smallest unit of execution within a process, while multithreading allows a CPU to execute multiple threads concurrently.
        </p>

        <h3>1. Basics of Threads</h3>
        <p>
          A thread is a sequence of instructions that can be executed independently by the CPU. It is the smallest unit of processing that can be scheduled and executed by the operating system. Threads within the same process share the same resources, such as memory space, which allows them to communicate and coordinate more easily.
          <ul>
            <li><b>Process vs. Thread:</b> A process is an independent entity, while a thread is part of a process. Multiple threads can exist within a single process and share resources like memory.</li>
            <li><b>Thread Creation:</b> A thread is created by the operating system when a program requests it. Threads can be created via system calls or APIs like <code>pthread_create()</code> or <code>thread.create()</code> in programming languages.</li>
            <li><b>Thread States:</b> A thread can be in various states such as ready, running, waiting, or terminated, depending on its interaction with the operating system.</li>
          </ul>
        </p>

        <h3>2. Multithreading</h3>
        <p>
          Multithreading refers to the concurrent execution of multiple threads within a process. It allows efficient CPU utilization by enabling parallelism. Multithreading is widely used in applications that require high performance, such as video games, web servers, and real-time systems.
          <ul>
            <li><b>Benefits of Multithreading:</b> 
              <ul>
                <li>Improved performance on multi-core processors, where threads can run on separate cores.</li>
                <li>Increased responsiveness in interactive applications, as one thread can handle the user interface while another performs background tasks.</li>
                <li>Better resource sharing and communication between threads within the same process.</li>
              </ul>
            </li>
            <li><b>Challenges of Multithreading:</b> 
              <ul>
                <li><b>Race Conditions:</b> When multiple threads access shared data concurrently, leading to unpredictable outcomes.</li>
                <li><b>Deadlock:</b> A situation where two or more threads are blocked forever, waiting for each other to release resources.</li>
                <li><b>Thread Synchronization:</b> The need to coordinate threads to avoid conflicts when accessing shared resources.</li>
              </ul>
            </li>
          </ul>
        </p>

        <br />
        <a 
            href="https://www.geeksforgeeks.org/thread-in-operating-system/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220413171839/gfgwhite.png" 
              alt="GeeksforGeeks Logo" 
              style={{ width: '50px', height: '50px' }}
            />
          </a>
          <a 
            href="https://www.youtube.com/watch?v=-NONm-Jq34Y" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" 
              alt="YouTube Logo" 
              style={{ width: '50px', height: '50px' }}
            />
          </a>
      </div>
    
  );
}

export default App;
