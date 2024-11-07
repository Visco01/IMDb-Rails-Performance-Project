# IMDb Web Application Performance Optimization

This project, undertaken as part of Ca’ Foscari University of Venice's "Software Performance and Scalability" course, focuses on deploying and optimizing a web application built to enable users to query a local copy of the IMDb dataset. The goal is to design the application with scalability in mind, identify performance bottlenecks, and apply optimizations for improved response times and resource efficiency.

## 1. Introduction

The web application provides a platform where users can perform queries on a local copy of the IMDb dataset. The application is built using Docker and Ruby on Rails, with PostgreSQL as the database. It aims to simulate a realistic server environment and handle queries on movie and TV show data efficiently. This project emphasizes identifying inefficiencies and implementing strategies to improve the application's scalability and responsiveness.

## 2. Project Goals

- **Model the IMDb dataset**: Normalize the database schema for optimized queries.
- **Performance Bottleneck Identification**: Identify and analyze bottlenecks in database queries, network latency, and resource management.
- **Optimization and Testing**: Implement optimizations for query performance, CPU usage, and caching, followed by extensive load testing.

## 3. System Architecture

The project leverages Docker to containerize the application, creating isolated environments for both the web application and the database. The containers communicate over a virtual network and are configured to optimize resource allocation.

- **Web Application Container**: Hosts the Ruby on Rails application, which handles client requests, processes data, and returns JSON responses.
- **Database Container**: Hosts PostgreSQL and manages data storage, indexing, and query handling for the IMDb dataset.

## 4. Software Components

### 4.1 Docker

Docker enables efficient deployment and resource management for the application and database. Containers allow easy scaling and ensure consistent performance across different environments.

- **Configuration**: Two Docker containers are configured — one for the web application and another for PostgreSQL. Both connect over a Docker-managed network.
- **Resource Allocation**: CPU cores and memory are carefully allocated to each container, supporting performance-focused resource distribution.

### 4.2 Ruby on Rails

The Ruby on Rails framework powers the web application, utilizing the Model-View-Controller (MVC) design pattern to organize code and simplify database interactions.

- **ActiveRecord ORM**: Rails uses ActiveRecord for Object-Relational Mapping (ORM), translating database rows into Ruby objects and simplifying complex queries.
- **Workflow**:
  1. **User Request**: Rails listens for HTTP requests on port 3000.
  2. **ORM to SQL Translation**: ActiveRecord converts ORM commands to SQL for PostgreSQL.
  3. **Response Formatting**: Rails converts query results to JSON and sends it back to the client.

### 4.3 PostgreSQL

PostgreSQL serves as the relational database, providing powerful indexing, parallel processing, and scalability features. These capabilities are essential in handling the large IMDb dataset efficiently.

- **Indexing**: Indexes were added after initial testing to optimize query performance.
- **Parallelization**: PostgreSQL’s ability to parallelize queries was crucial in the optimization phase.

## 5. Hardware Setup

The application was tested on a server environment and a testing machine, each with specific configurations to simulate real-world scenarios and gather performance data.

### 5.1 Server Configuration

- **CPU**: AMD Ryzen 7 5800X (8 cores, 16 threads)
- **RAM**: 16GB DDR4
- **Storage**: SSD M.2 PCIe Gen4
- **Operating System**: Ubuntu Desktop 24.04 LTS

### 5.2 Testing Machine

The testing machine, equipped with superior processing power, runs extensive performance tests on the application:

- **CPU**: Intel Core i9-12900K (16 cores, 24 threads)
- **RAM**: 32GB DDR5
- **Storage**: SSD M.2 PCIe Gen4
- **Operating System**: Ubuntu Desktop 24.04 LTS

### 5.3 Network Connection

Due to ISP restrictions, we utilized **ZeroTier** to establish a peer-to-peer connection between the server and the testing machine, simulating a VPN setup. This setup impacts latency, introducing an average round-trip time (RTT) of ~34ms.

## 6. Dataset Overview

The IMDb dataset consists of seven TSV files covering a wide range of information:
1. **Title Basics**: General information about titles.
2. **Title Akas**: Alternative titles.
3. **Title Crew**: Information on directors and writers.
4. **Title Episodes**: Episode and season information.
5. **Title Principals**: Cast information.
6. **Title Ratings**: IMDb ratings and votes.
7. **Name Basics**: Information on individuals involved in titles.

The database schema was normalized to improve scalability, reducing redundancy and ensuring efficient query performance.

## 7. Performance Optimization Strategies

### 7.1 Initial Testing and Bottleneck Identification

Through load testing, we identified several key bottlenecks:
- **Query Processing**: Complex, unoptimized queries were taking excessive time.
- **Resource Allocation**: Inefficient distribution of CPU cores and memory affected performance.

### 7.2 Optimization Techniques

#### 7.2.1 Core Assignment

CPU cores were allocated to balance load between the application and database containers, significantly improving response times.

#### 7.2.2 Rails Caching

Rails’ caching mechanisms were used to store frequently requested data in memory, reducing database load and speeding up response times for common queries.

#### 7.2.3 PostgreSQL Indexing

Indexes were added to frequently queried columns, drastically improving query performance by reducing data retrieval time.

#### 7.2.4 Query Tuning

SQL queries were manually optimized to eliminate unnecessary joins, reduce complexity, and improve overall database efficiency.

## 8. Results and Analysis

After applying the above optimizations, we conducted extensive load testing using JMeter to simulate different user workloads. The final results indicated:
- **Increased Query Efficiency**: Indexed queries performed significantly faster, reducing response times by up to 40%.
- **Reduced Bottlenecks**: Optimizations in resource allocation and caching minimized delays in high-traffic scenarios.
- **Scalability**: The application demonstrated improved scalability, efficiently handling higher loads with consistent performance.
