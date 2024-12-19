import React from 'react';
import './style.css';

function App() {
  return (
    <div className="links">
      <h2>Advanced Memory Management</h2>

      <p>
        Advanced memory management techniques, particularly cache memory, play a crucial role in improving the performance of a system by reducing the time it takes to access frequently used data. Cache memory provides faster data access by storing copies of data from the main memory closer to the processor.
      </p>

      <h3>1. Cache Memory</h3>
      <p>
        Cache memory is a small, fast memory located between the CPU and main memory (RAM). It stores frequently accessed data to reduce the time it takes to fetch data from the slower main memory. There are typically multiple levels of cache:
        <ul>
          <li><b>L1 Cache:</b> The smallest and fastest cache, located inside the CPU.</li>
          <li><b>L2 Cache:</b> A larger cache located near the CPU, but slightly slower than L1.</li>
          <li><b>L3 Cache:</b> A larger, slower cache shared between multiple cores on modern processors.</li>
        </ul>
      </p>

      <h3>2. Cache Hit and Cache Miss</h3>
      <p>
        <b>Cache Hit:</b> Occurs when the data requested by the CPU is found in the cache.
        <br />
        <b>Cache Miss:</b> Occurs when the data requested by the CPU is not found in the cache, causing it to fetch data from the slower main memory.
      </p>

      <h3>3. Miss Penalty and Average Memory Access Time</h3>
      <p>
        <b>Miss Penalty:</b> The additional time required to fetch data from the main memory when a cache miss occurs. It includes the time to fetch data from RAM and load it into the cache.
        <br />
        <b>Average Memory Access Time (AMAT):</b> The average time taken to access memory, which considers both cache hits and misses. It can be calculated using the formula:
        <br />
        <i>AMAT = Hit Time + Miss Rate × Miss Penalty</i>
      </p>

      <h3>4. Types of Cache Miss</h3>
      <p>
        <ul>
          <li><b>Compulsory Miss:</b> Occurs when data is accessed for the first time and is not yet in the cache.</li>
          <li><b>Capacity Miss:</b> Occurs when the cache cannot hold all the needed data, resulting in evictions and misses.</li>
          <li><b>Conflict Miss:</b> Occurs when multiple data items map to the same cache location, causing one item to evict another.</li>
        </ul>
      </p>

      <h3>5. Types of Cache Access</h3>
      <p>
        <ul>
          <li><b>Write-Through:</b> Data is written to both the cache and the main memory simultaneously.</li>
          <li><b>Write-Back:</b> Data is written to the cache, and only updated data is written back to the main memory when evicted from the cache.</li>
        </ul>
      </p>

      <h3>6. Locality of Reference</h3>
      <p>
        Locality of reference refers to the tendency of a program to access a small subset of memory locations repeatedly over a short period of time. There are two types:
        <ul>
          <li><b>Spatial Locality:</b> Refers to accessing memory locations that are close to each other.</li>
          <li><b>Temporal Locality:</b> Refers to accessing the same memory locations frequently within a short time interval.</li>
        </ul>
      </p>

      <h3>7. Types of Mapping</h3>
      <p>
        Memory mapping techniques define how data is placed into the cache:
        <ul>
          <li><b>Direct Mapping:</b> Each block of memory maps to exactly one cache line.</li>
          <li><b>Associative Mapping:</b> A memory block can be stored in any cache line.</li>
          <li><b>Set-Associative Mapping:</b> Combines the features of direct and associative mapping, where each block maps to a set of cache lines.</li>
        </ul>
      </p>

      <h3>8. Cache Replacement Policies</h3>
      <p>
        Cache replacement policies determine how data is replaced when the cache is full. Effective policies ensure that the most frequently accessed or the most important data is retained in the cache:
        <ul>
          <li><b>Least Recently Used (LRU):</b> Replaces the cache entry that has been used the least recently.</li>
          <li><b>First-In-First-Out (FIFO):</b> Replaces the oldest cache entry first, regardless of its use.</li>
          <li><b>Optimal (MIN):</b> Replaces the cache entry that will not be used for the longest time in the future. This policy is theoretical and cannot be perfectly implemented.</li>
          <li><b>Random Replacement:</b> Replaces a randomly chosen cache entry, which is simple but not efficient in all scenarios.</li>
        </ul>
      </p>

      <br />
      <a href="https://youtu.be/eObN3u3eAnU?feature=shared" target="_blank" rel="noopener noreferrer">
        Direct Mapping
      </a>
      <br />
      <a href="https://youtu.be/cy7BoO1b66k?feature=shared" target="_blank" rel="noopener noreferrer">
        Question on Set Associative Cache Mapping
      </a>
      <br />
      <h3>Cache Replacement Algorithms</h3>
      <a href="https://youtu.be/EXRicJapuOQ?feature=shared" target="_blank" rel="noopener noreferrer">
        Cache Replacement Algorithms
      </a>
      <br />
      <a href="https://youtu.be/w32d1lD0Jb0?feature=shared" target="_blank" rel="noopener noreferrer">
        LRU
      </a>
      <br />
      <a href="https://youtu.be/e8ZrvrNdp9o?feature=shared" target="_blank" rel="noopener noreferrer">
        FIFO
      </a>
      <br />
    </div>
  );
}

export default App;
