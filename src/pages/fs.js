import React from 'react';
import './style.css';

function App() {
  return (
    
      <div className="links">
        <h2>File Systems</h2>

        <p>
          A file system is a method and data structure that an operating system uses to manage and store files. It provides a way for programs to access data stored on storage devices like hard drives or SSDs. The file system handles the organization of files, directories, permissions, and file metadata.
        </p>

        <h3>1. Introduction to File Systems</h3>
        <p>
          A file system provides an abstraction layer between the physical storage and the user or application, enabling efficient file storage, retrieval, and management. Different file systems are designed based on factors like performance, reliability, and supported operations.
          <ul>
            <li><b>File:</b> A collection of related data stored as a single unit in a storage medium.</li>
            <li><b>Directory:</b> A file that contains a list of files and other directories. It helps organize files in a hierarchical structure.</li>
            <li><b>File System Types:</b> Common types include FAT (File Allocation Table), NTFS (New Technology File System), ext3/ext4 (Linux file systems), and HFS+ (Apple file system).</li>
            <li><b>File Operations:</b> File systems support various operations such as file creation, deletion, opening, reading, writing, and renaming.</li>
          </ul>
        </p>

        <h3>2. File System Implementation</h3>
        <p>
          File system implementation involves designing how the file system stores
          <ul>
            <li><b>File Allocation Methods:</b> Different strategies for storing files, including contiguous allocation, linked allocation, and indexed allocation.</li>
            <li><b>Directory Structure:</b> The hierarchical structure that organizes files. It can be a simple linear structure or more complex trees and graphs.</li>
            <li><b>File Access Methods:</b> File systems provide mechanisms for accessing files sequentially or directly (random access).</li>
            <li><b>Metadata:</b> File systems store metadata, which includes information such as file name, size, location, creation time, and permissions.</li>
          </ul>
        </p>

        <br />
        <a 
          href="https://www.youtube.com/watch?v=0LtuQhNFFe0" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://www.freeiconspng.com/uploads/youtube-logo-png-photo-0.png" 
            alt="YouTube Logo" 
            style={{ width: '50px', height: '50px' }}
          />
        </a>
        <a 
          href="https://youtu.be/q1wGGZbOr4s?feature=shared" 
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
