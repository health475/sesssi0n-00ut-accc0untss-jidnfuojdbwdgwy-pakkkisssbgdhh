

const mysql = require('mysql2');  // Use mysql2 package
require('dotenv').config();

// MySQL database configuration
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT  // Change 'PORT' to 'port'
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL');
});

// SQL to create the table
const createTableSQL = `
CREATE TABLE IF NOT EXISTS maintable (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  ip VARCHAR(255) NOT NULL,
  useragent VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  pagetype VARCHAR(255),
  mobiletype VARCHAR(255),
  notify VARCHAR(20) DEFAULT 0
)
`;

// Query to create table
db.query(createTableSQL, (err, result) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table created successfully');
  }
});

// Export the db connection for use in other files
module.exports = db;
