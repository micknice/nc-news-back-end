Project will require the creation of .env.development & .env.test files in the root folder in order to function correctly.
these should contain references to their respective dbs - see setup.sql for db names.

Link to hosted version: 
https://nice-news.onrender.com

Summary:
RESTFUL server hosting news articles where registered users can comment on those articles and vote on articles and comments.

API provides functionality for various GET, POST, PATCH and DELETE requests. See endpoints.json in root or send GET /api req to hosted version for all current endpoints function and example responses.



Dependencies:
"dotenv": "^16.0.0",
"express": "^4.18.2",
"pg": "^8.7.3",
"pg-format": "^1.0.4",
"supertest": "^6.3.3"
"jest": "^27.5.1",
"jest-extended": "^2.0.0",
"jest-sorted": "^1.0.14"

Installing dependencies:
To install the dependencies required for this project, you will need to have Node.js and npm (Node Package Manager) installed on your machine.

Installing Node.js and npm:
If you do not have Node.js and npm installed, you can download and install the latest version from the official website: https://nodejs.org/en/download/.

Installing Dependencies using npm
To install the required dependencies, navigate to the project directory in your terminal and run the following command:

npm install


This command will install all the dependencies listed in the package.json file, including:

dotenv: "^16.0.0"
express: "^4.18.2"
pg: "^8.7.3"
pg-format: "^1.0.4"
supertest: "^6.3.3"
jest: "^27.5.1"
jest-extended: "^2.0.0"
jest-sorted: "^1.0.14"

Once the installation is complete, you can verify that the dependencies have been installed by checking the node_modules folder in your project directory.

Running Tests
If you wish to run the server tests, use the following command:


npm test app.test.js

This will run the test suites using Jest with the required dependencies, including jest, jest-extended, and jest-sorted.

Note that the database connection parameters may need to be updated in a .env file in order to run the tests successfully.





