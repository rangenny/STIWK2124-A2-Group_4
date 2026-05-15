# Accessible Reading List (ARL) - Backend Foundation

## Overview
This is the Spring Boot backend for the Accessible Reading List (ARL) web application. It provides a RESTful API to store, manage, and retrieve book entries. The application features CRUD operations, pagination, basic search capabilities, and robust data validation.

**Course:** STIWK2124 Web Engineering  
**Group:** 4  

## Tech Stack
* **Framework:** Spring Boot 3
* **Database:** MySQL
* **Persistence:** Spring Data JPA / Hibernate
* **Validation:** Spring Boot Starter Validation
* **Build Tool:** Maven

## Setup & Installation

### 1. Database Setup
1. Ensure MySQL is installed and running.
2. Open MySQL Workbench or your preferred database tool.
3. Run the provided `arl_db_books.sql` script to create the `arl_db` database and the `books` table structure.

### 2. Application Configuration
1. Open `src/main/resources/application.properties`.
2. Update the database credentials to match your local MySQL setup:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/arl_db
   spring.datasource.username=root
   spring.datasource.password=YOUR_MYSQL_PASSWORD