import React from 'react';
import './style.css';

function App() {
  return (
   

      <div className="links">
        <h2>Process Scheduling</h2>

        <p>
          Process Scheduling refers to the method by which the operating system decides which process to execute at any given time. This is important for efficiently utilizing CPU time, ensuring fair access to system resources, and maintaining system performance.
        </p>

        <h3>1. Non-preemptive Scheduling Techniques</h3>
        <p>
          Non-preemptive scheduling means that once a process starts executing, it cannot be interrupted until it finishes. This type of scheduling is simpler and avoids the complexity of context switching but can lead to problems like the "convoy effect," where short processes have to wait for long ones to finish. Some common non-preemptive scheduling techniques include:
          <ul>
            <li><b>First Come First Served (FCFS):</b> Processes are executed in the order they arrive. The first process that enters the queue gets executed first.</li>
            <li><b>Shortest Job First (SJF):</b> The process with the shortest burst time (i.e., the shortest CPU time requirement) is executed first. This minimizes the average waiting time.</li>
            <li><b>Priority Scheduling:</b> Each process is assigned a priority, and the process with the highest priority gets executed first. In case of a tie, FCFS is used as a tiebreaker.</li>
          </ul>
        </p>

        <h3>2. Race Conditions</h3>
        <p>
          A race condition occurs when two or more processes access shared data simultaneously, and the outcome of the execution depends on the order in which the processes are scheduled. Race conditions are problematic because they can lead to unpredictable behavior, including data corruption or incorrect results. Here are key aspects of race conditions:
          <ul>
            <li><b>Critical Section:</b> A part of the code where shared resources are accessed or modified. If two or more processes try to execute the critical section simultaneously, a race condition can occur.</li>
            <li><b>Mutexes and Semaphores:</b> Mechanisms used to prevent race conditions by ensuring that only one process can access a shared resource at a time. Mutexes lock the resource, and semaphores signal when a process can access the resource.</li>
            <li><b>Deadlock:</b> A situation where two or more processes are blocked forever due to a circular dependency on resources. Proper synchronization is necessary to avoid deadlock in the presence of race conditions.</li>
          </ul>
        </p>

        <br />
        <div>
          <a 
            href="https://www.geeksforgeeks.org/preemptive-and-non-preemptive-scheduling/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="https://media.geeksforgeeks.org/wp-content/uploads/20220413171839/gfgwhite.png" 
              alt="GeeksforGeeks Logo" 
              style={{ width: '50px', height: '50px' }}
            />
          </a>
        </div>

        <br />
        <div>
          <a 
            href="https://youtu.be/zFnrUVqtiOY?feature=shared" 
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

        <br />
        <h3>Numericals:</h3>
        <ul>
          <li><a href="https://youtu.be/MZdVAVMgNpA?feature=shared" target="_blank" rel="noopener noreferrer">FCFS</a></li>
          <li><a href="https://youtu.be/VCIVXPoiLpU?feature=shared" target="_blank" rel="noopener noreferrer">SJF</a></li>
          <li><a href="https://youtu.be/kbfCRoNAPbY?feature=shared" target="_blank" rel="noopener noreferrer">SJF</a></li>
          <li><a href="https://youtu.be/hoN7_VMzw_g?feature=shared" target="_blank" rel="noopener noreferrer">SRTF</a></li> 
          <li><a href="https://youtu.be/TxjIlNYRZ5M?feature=shared" target="_blank" rel="noopener noreferrer">RR</a></li>
        </ul>
      </div>
  
  );
}

export default App;
