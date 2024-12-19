import React from 'react';
import './style.css';

function App() {
  return (
    <div className="links">
      <h2>Memory Management</h2>

      <p>
        Memory management is an essential function of an operating system, responsible for managing the computer's memory resources. It ensures that processes are allocated memory efficiently, and that memory is freed when no longer needed. Various techniques, such as contiguous memory allocation, paging, and segmentation, are used to achieve effective memory management.
      </p>

      <h3>1. Contiguous Memory Allocation</h3>
      <p>
        Contiguous memory allocation is one of the simplest memory management schemes. In this method, each process is allocated a single contiguous block of memory, meaning that the entire memory space required by the process is allocated in one continuous section.
        <ul>
          <li><b>Fixed Partitioning:</b> The memory is divided into fixed-size partitions, and each process is allocated to a partition. If a process is smaller than the partition, the remaining space is wasted.</li>
          <li><b>Dynamic Partitioning:</b> The memory is divided dynamically based on the size of the processes. Each process gets a partition that matches its memory requirement. However, dynamic partitioning can lead to fragmentation.</li>
          <li><b>Fragmentation:</b> Contiguous memory allocation can lead to internal and external fragmentation. Internal fragmentation occurs when allocated memory is larger than the process needs, while external fragmentation happens when free memory is scattered throughout the system in small, non-contiguous blocks.</li>
        </ul>
      </p>

      <h3>2. Paging</h3>
      <p>
        Paging is a memory management scheme that eliminates the problem of external fragmentation and allows the physical address space of a process to be non-contiguous. In paging, memory is divided into fixed-size blocks called "pages," and the physical memory is divided into equal-sized blocks called "frames."
        <ul>
          <li><b>Page Table:</b> A page table is used to map virtual pages to physical frames. Each entry in the page table corresponds to a page and indicates the frame in which it is stored in physical memory.</li>
          <li><b>Advantages of Paging:</b> Paging avoids fragmentation issues and allows for efficient memory use. It also simplifies the allocation of memory since any free frame can hold a page of any process.</li>
          <li><b>Disadvantages of Paging:</b> The main disadvantage is the overhead introduced by the page table lookups and the complexity of managing the paging system.</li>
          <li><b>Thrashing:</b> Occurs when the system spends more time swapping pages between the main memory and the disk than executing actual processes, resulting in a significant slowdown.</li>
        </ul>
      </p>

      <h3>3. Segmentation</h3>
      <p>
        Segmentation is a memory management technique where the memory is divided into segments of different sizes, such as code, data, and stack segments. Unlike paging, where each process is divided into equal-sized pages, segmentation allows for variable-sized segments that match the logical divisions of the program.
        <ul>
          <li><b>Segment Table:</b> A segment table maps the logical addresses (segmented address) to physical memory addresses. Each entry in the segment table contains the base address of the segment and its length.</li>
          <li><b>Advantages of Segmentation:</b> Segmentation allows a program to be divided into logical units, which can be loaded and executed independently, leading to more efficient memory management.</li>
          <li><b>Disadvantages of Segmentation:</b> It can lead to external fragmentation as the segments are of varying sizes. This can require compaction to reclaim fragmented memory.</li>
        </ul>
      </p>

      <h3>4. Virtual Memory</h3>
      <p>
        Virtual memory is a technique that allows the execution of processes that may not be completely in memory. It enables programs to be larger than the physical memory by swapping data between the RAM and disk storage. This technique provides an "idealized" abstraction of the storage resources that are actually available on the system.
        <ul>
          <li><b>Thrashing:</b> Thrashing occurs when the system spends more time swapping data between RAM and the disk than executing processes. It can cause a significant slowdown in system performance, often due to insufficient memory or too many running processes.</li>
          <li><b>Page Faults:</b> A page fault occurs when a process accesses a page that is not currently in memory. The operating system must load the page from the disk into RAM, causing a delay in execution. Frequent page faults can indicate insufficient memory or poor memory management.</li>
          <li><b>Page Replacement Algorithms:</b> These algorithms are used to decide which pages to swap out when memory is full. Some common algorithms include:
            <ul>
              <li><b>FIFO (First In, First Out):</b> The oldest page in memory is swapped out.</li>
              <li><b>LRU (Least Recently Used):</b> The page that has not been used for the longest time is replaced.</li>
              <li><b>Optimal:</b> The page that will not be used for the longest time in the future is replaced.</li>
              <li><b>Clock Algorithm:</b> A circular version of FIFO, which tries to keep track of recently used pages and replaces the least recently used one.</li>
            </ul>
          </li>
        </ul>
      </p>

      <br />
      <h3>Videos:</h3>
      <ul>
        <li><a href="https://youtu.be/FrTttJLN7Kw?feature=shared" target="_blank" rel="noopener noreferrer">Memory management Techniques</a></li>
        <li><a href="https://youtu.be/bK-VhQA512c?feature=shared" target="_blank" rel="noopener noreferrer">Internal Fragmentation</a></li>
        <li><a href="https://youtu.be/JdPmsrYqRDY?feature=shared" target="_blank" rel="noopener noreferrer">Variable size Partitioning</a></li>
        <li><a href="https://youtu.be/6c-mOFZwP_8?feature=shared" target="_blank" rel="noopener noreferrer">Paging</a></li>
        <li><a href="https://youtu.be/30P73tWmU0s?feature=shared" target="_blank" rel="noopener noreferrer">Question on Logical address and Physical address space</a></li>
        <li><a href="https://youtu.be/L80DakYu4uw?feature=shared" target="_blank" rel="noopener noreferrer">Question on Paging</a></li>
        <li><a href="https://youtu.be/dz9Tk6KCMlQ?feature=shared" target="_blank" rel="noopener noreferrer">Segmentation</a></li>
      </ul>
    </div>
  );
}

export default App;
