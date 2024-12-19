import React from 'react';
import './style.css';

function App() {
  return (
    <div className="links">
      <h2>Introduction to DBMS and RDBMS</h2>
      <p>
        A Database Management System (DBMS) is software that provides an interface for users and applications to interact with databases. It facilitates the creation, manipulation, and management of databases.
        <br />
        A Relational Database Management System (RDBMS) is a type of DBMS that stores data in the form of tables with predefined relationships between them, using SQL for data manipulation.
        <br />
        The main difference between DBMS and RDBMS is that RDBMS uses tables, and data is structured in rows and columns, whereas DBMS may or may not use tables for storage.
      </p>

      <h3>1. SQL vs NoSQL</h3>
      <p>
        SQL and NoSQL databases differ significantly in how they store and manage data:
        <ul>
          <li><b>SQL:</b> SQL databases are relational, use structured data, and follow a schema. They are suitable for complex queries and transactions. Examples include MySQL, PostgreSQL, and Oracle.</li>
          <li><b>NoSQL:</b> NoSQL databases are non-relational and can store unstructured or semi-structured data. They are more flexible and scalable. Examples include MongoDB, Cassandra, and CouchDB.</li>
        </ul>
      </p>

      <h3>2. SQL Queries: DDL, DML, and DCL</h3>
      <p>
        SQL (Structured Query Language) is used for managing and manipulating relational databases. It has various types of queries, including:
        <ul>
          <li><b>DDL (Data Definition Language):</b> Used to define and modify database structure. Examples: CREATE, ALTER, DROP.</li>
          <li><b>DML (Data Manipulation Language):</b> Used for managing data within the database. Examples: SELECT, INSERT, UPDATE, DELETE.</li>
          <li><b>DCL (Data Control Language):</b> Used to control access to the data in the database. Examples: GRANT, REVOKE.</li>
        </ul>
      </p>

      <h3>3. SQL Queries: TCL and DQL</h3>
      <p>
        SQL queries also include TCL (Transaction Control Language) and DQL (Data Query Language):
        <ul>
          <li><b>TCL (Transaction Control Language):</b> Deals with transactions, ensuring data integrity and consistency. Examples: COMMIT, ROLLBACK, SAVEPOINT.</li>
          <li><b>DQL (Data Query Language):</b> Used for querying data from the database. The main command is SELECT, which retrieves data based on given criteria.</li>
        </ul>
      </p>

      <h3>4. Functional Dependency, Normalization, and Normal Forms</h3>
      <p>
        <b>Functional Dependency:</b> It is a relationship between two attributes in a relational database. A functional dependency exists when one attribute is dependent on another for its value. For example, in a table, student ID may determine the student’s name (StudentID → Name).
        <br />
        <b>Normalization:</b> The process of organizing data in a database to reduce redundancy and improve data integrity. It involves decomposing tables into smaller, more manageable ones.
        <br />
        <b>Normal Forms:</b> There are several normal forms (1NF, 2NF, 3NF, BCNF) that represent different levels of normalization:
        <ul>
          <li><b>1NF (First Normal Form):</b> Ensures that each column contains atomic (indivisible) values and each record is unique.</li>
          <li><b>2NF (Second Normal Form):</b> Builds upon 1NF and ensures that all non-key attributes are fully functionally dependent on the primary key.</li>
          <li><b>3NF (Third Normal Form):</b> Ensures that no transitive dependencies exist, i.e., non-key attributes do not depend on other non-key attributes.</li>
          <li><b>BCNF (Boyce-Codd Normal Form):</b> A stricter version of 3NF where every determinant is a candidate key.</li>
        </ul>
      </p>

      <h3>5. Example of SQL Queries</h3>
      <p>
        Here are some practical examples of SQL queries for the above topics:
        <ul>
          <li><b>DDL:</b> 
            <pre>
              CREATE TABLE Students (
                StudentID INT PRIMARY KEY,
                Name VARCHAR(100),
                Age INT
              );
            </pre>
          </li>
          <li><b>DML:</b>
            <pre>
              INSERT INTO Students (StudentID, Name, Age) 
              VALUES (1, 'John Doe', 20);
            </pre>
          </li>
          <li><b>DCL:</b> 
            <pre>
              GRANT SELECT, INSERT ON Students TO UserName;
            </pre>
          </li>
          <li><b>TCL:</b>
            <pre>
              COMMIT;
              ROLLBACK;
            </pre>
          </li>
          <li><b>DQL:</b>
            <pre>
              SELECT Name, Age FROM Students WHERE Age > 18;
            </pre>
          </li>
        </ul>
      </p>

      <br />
      
    </div>
  );
}

export default App;
