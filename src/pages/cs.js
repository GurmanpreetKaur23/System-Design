import React from 'react';
import './style.css';

function App() {
  return (
    
      <div className="links">
        <h2>Concurrency and Synchronization</h2>

        <p>
          Concurrency refers to the execution of multiple processes or threads simultaneously, while synchronization ensures that shared resources are accessed in a controlled manner to avoid conflicts. In operating systems, concurrency and synchronization play a crucial role in the efficient functioning of programs.
        </p>

        <h3>1. Deadlocks: Prevention, Avoidance, Detection, and Recovery</h3>
        <p>
          A deadlock occurs when two or more processes are blocked forever due to a circular dependency on resources. The four strategies to deal with deadlocks are:
          <ul>
            <li><b>Deadlock Prevention:</b> Ensures that at least one of the necessary conditions for a deadlock does not occur.</li>
            <li><b>Deadlock Avoidance:</b> The system makes decisions dynamically to ensure that it does not enter a deadlock state. One example is the Banker's Algorithm.</li>
            <li><b>Deadlock Detection:</b> The system allows deadlocks to occur but periodically checks for deadlock situations and handles them.</li>
            <li><b>Deadlock Recovery:</b> Once a deadlock is detected, the system recovers by terminating a process or preempting resources.</li>
          </ul>
        </p>

        <h3>2. Semaphores and Mutexes</h3>
        <p>
          Semaphores and Mutexes are synchronization tools used to prevent race conditions and ensure safe access to shared resources:
          <ul>
            <li><b>Semaphore:</b> A synchronization primitive that uses a counter to control access to shared resources. It can be binary (binary semaphore) or counting (general semaphore).</li>
            <li><b>Mutex:</b> A mutual exclusion lock that ensures that only one thread can access a shared resource at a time. It prevents other threads from entering the critical section.</li>
          </ul>
        </p>

        <h3>3. Monitors and Condition Variables</h3>
        <p>
          A monitor is a high-level abstraction for synchronization that provides a mechanism to safely allow multiple threads to share data. Condition variables are used within monitors to allow threads to wait for a certain condition to be met before proceeding:
          <ul>
            <li><b>Monitor:</b> A synchronization construct that encapsulates data and operations, ensuring that only one thread can execute any of the operations at a time.</li>
            <li><b>Condition Variable:</b> A synchronization primitive that is used with a monitor to allow a thread to wait for a specific condition to be true before it can proceed.</li>
          </ul>
        </p>

        <br />
        <a href="https://youtu.be/rWFH6PLOIEI?feature=shared" target="_blank" rel="noopener noreferrer">
        DEADLOCK
        </a>
        <br />
  
        <a href="https://youtu.be/pPM9Ajqmy_4?feature=shared" target="_blank" rel="noopener noreferrer">
        Deadlock Handling Methods and Deadlock Prevention
        </a>
        <br />
        <a href="https://youtu.be/7gMLNiEz3nw?feature=shared" target="_blank" rel="noopener noreferrer">
        Deadlock Avoidance
        </a>
        <br />
        <a href="https://youtu.be/k8BHyy6gBls?feature=shared" target="_blank" rel="noopener noreferrer">
        Question on Banker's Algorithm 
        </a>
        <br />
        <a href="https://youtu.be/eoGkJWgxurQ?feature=shared" target="_blank" rel="noopener noreferrer">
        Semaphores
        </a>
        <br />
        <a href="https://youtu.be/l5-3mbBV1BQ?feature=shared" target="_blank" rel="noopener noreferrer">
        Binary Semaphore
        </a>
        <br />
        
      </div>
    
  );
}

export default App;
