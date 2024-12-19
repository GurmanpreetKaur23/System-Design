import React from 'react';
import './style.css';
const VirtualMemoryPage = () => {
  return (
    <div class="links">
      <h2>Virtual Memory</h2>
      <p>
        Virtual memory is a technique that allows the execution of processes that may not be completely in memory. It enables programs to be larger than the physical memory by swapping data between the RAM and disk storage. This technique provides an "idealized" abstraction of the storage resources that are actually available on the system.
      </p>
      <ul>
        <li>
          <b>Thrashing:</b> Thrashing occurs when the system spends more time swapping data between RAM and the disk than executing processes. It can cause a significant slowdown in system performance, often due to insufficient memory or too many running processes.
        </li>
        <li>
          <b>Page Faults:</b> A page fault occurs when a process accesses a page that is not currently in memory. The operating system must load the page from the disk into RAM, causing a delay in execution. Frequent page faults can indicate insufficient memory or poor memory management.
        </li>
        <li>
          <b>Page Replacement Algorithms:</b> These algorithms are used to decide which pages to swap out when memory is full. Some common algorithms include:
          <ul>
            <li>
              <b>FIFO (First In, First Out):</b> The oldest page in memory is swapped out.
            </li>
            <li>
              <b>LRU (Least Recently Used):</b> The page that has not been used for the longest time is replaced.
            </li>
            <li>
              <b>Optimal:</b> The page that will not be used for the longest time in the future is replaced.
            </li>
            <li>
              <b>Clock Algorithm:</b> A circular version of FIFO, which tries to keep track of recently used pages and replaces the least recently used one.
            </li>
          </ul>
        </li>
      </ul>

      <h2>Page Replacement Algorithms</h2>
      <ul>
        <li>
          <a href="https://youtu.be/8rcUs5RutX0?feature=shared" target="_blank" rel="noopener noreferrer">
            FIFO
          </a>
        </li>
        <li>
          <a href="https://youtu.be/pR1uhp--COc?feature=shared" target="_blank" rel="noopener noreferrer">
            Belady's Anomaly in FIFO
          </a>
        </li>
        <li>
          <a href="https://youtu.be/q2BpMvPhhrY?feature=shared" target="_blank" rel="noopener noreferrer">
            Optimal Page Replacement algorithm
          </a>
        </li>
        <li>
          <a href="https://youtu.be/dYIoWkCvd6A?feature=shared" target="_blank" rel="noopener noreferrer">
            Least Recently Used
          </a>
        </li>
        <li>
          <a href="https://youtu.be/H3BU_Do_l-Q?feature=shared" target="_blank" rel="noopener noreferrer">
            Most Recently Used
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="https://youtu.be/o2_iCzS9-ZQ?feature=shared" target="_blank" rel="noopener noreferrer">
            Virtual Memory
          </a>
        </li>
        <li>
          <a href="https://youtu.be/Z2T2vnyZl0o?feature=shared" target="_blank" rel="noopener noreferrer">
            Translation Lookaside Buffer(TLB)
          </a>
        </li>
        <li>
          <a href="https://youtu.be/IyWaK8pbN6A?feature=shared" target="_blank" rel="noopener noreferrer">
            Thrashing
          </a>
        </li>
      </ul>
    </div>
  );
};

export default VirtualMemoryPage;
