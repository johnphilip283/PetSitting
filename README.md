# src/
This folder contains all of the React components that we use in order to build the website.

# `index.js`
index.js contains the server that communicates with the local instance of MySQL Workbench, and exposes all of the APIs that our front-end uses.

# sql_script/
Contains the SQL files that are able to duplicate our database on a local machine. 

# public/
Contains all of the static assets (images, etc) that we use on the front-end.

# node-modules/
Contains all of the React dependencies that we need for the front-end.

# wireframes/
Contains our preliminary sketches for the website.

# Installation Instructions

Before attempting these installation steps, make sure you have the latest version of Node.js and nodemon installed.

1. From sql_scripts/, run petsitting_create.sql and petsitting_insert.sql. 
2. Edit line 9 in index.js with your local MySQL Workbench connection information, changing the root password to match yours.
3. In your terminal, navigate to the root directory of the project and run `nodemon index.js`
4. In your terminal, then run `npm install`.
5. Then, in your terminal, run `npm start`.
6. In your web browser, navigate to `localhost:3000`.
