# Chatbot Project

## Introduction

The Chatbot Project is a FastAPI-based application that interacts with a MySQL database to provide users with information about products and suppliers. This project showcases how to build a conversational agent that can handle queries such as:

- "Show me all products under brand X"
- "Which suppliers provide laptops?"
- "Give me details of product ABC"

## Features

- **Product Information:** Retrieve details about products based on brand or product name.
- **Supplier Information:** Get information about suppliers based on product categories.
- **Natural Language Processing:** Handle user queries and provide relevant responses using natural language.

## Prerequisites

- Python 3.7+
- MySQL
- FastAPI
- Uvicorn
- PyTorch
- Additional Python packages (listed below)

## Installation and Setup

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd chatbot-frontend/backend
2. **Create a Virtual Environment and Activate i**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # For Windows
3. **Install Required Packages**
   ```bash
   pip install fastapi uvicorn sqlalchemy pymysql transformers torch
4. **Set Up the Database**
     Create a MySQL database named chatbot_db.
     Run the following SQL commands to create tables and insert sample data:
   ```bash
   USE chatbot_db;

   CREATE TABLE Suppliers (
    supplier_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    contact_info VARCHAR(255),
    product_categories VARCHAR(255)
   );

   CREATE TABLE Products (
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    brand VARCHAR(255),
    price DECIMAL(10,2),
    category VARCHAR(255),
    description TEXT,
    supplier_id INT,
    FOREIGN KEY (supplier_id) REFERENCES Suppliers(supplier_id)
   );

   INSERT INTO Suppliers (name, contact_info, product_categories) VALUES
   ('TechCorp', 'techcorp@example.com, 123-456-7890', 'Electronics, Computers'),
   ('OfficeSuppliesCo', 'office@example.com, 098-765-4321', 'Furniture, Office Supplies'),
   ('BookWorld', 'books@example.com, 555-123-4567', 'Books, Stationery');

   INSERT INTO Products (name, brand, price, category, description, supplier_id) VALUES
   ('Laptop', 'BrandX', 999.99, 'Electronics', 'High-performance laptop', 1),
   ('Office Chair', 'BrandY', 149.99, 'Furniture', 'Ergonomic office chair', 2),
   ('Notebook', 'BrandZ', 2.99, 'Stationery', '100-page notebook', 3),
   ('Smartphone', 'BrandX', 599.99, 'Electronics', 'Latest model smartphone', 1),
   ('Desk', 'BrandY', 249.99, 'Furniture', 'Spacious office desk', 2),
   ('Pen', 'BrandZ', 1.49, 'Stationery', 'Smooth-writing pen', 3);

  5.**Run the FastAPI Server**
  ```bash
  uvicorn main:app --reload

   
