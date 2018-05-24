# LoginApp
LoginApp using Nodejs, passport and Mongodb

1. Use of following node modules defined in package.json
"bcryptjs": "*",  //password hashing
"body-parser": "*",  //Parse JSON
"connect-flash": "*",   //Flash messages
"express-handlebars": "*", //View engine
"express-messages": "*", //Flash messages
"express-session": "*", //Flash messages
"express-validator": "*", //Validate forms
"mongoose": "*", //ORM to interact with DB
"passport-http": "*",
"passport-local": "*" // Local passport 


2. Use the command 
Directory: /loginapp
Run  the command: npm install

3. The beginning of the script app.js

4. Installed mongodb from here:
Update Homebrew’s package database: brew Update
Install the MongoDB Binaries: brew install mongodb

5. How to run mongodb
    - Create the data Directory
    sudo mkdir -p /data/db
    - chage the permission
    chmod 777 /data/db
    - run mongodb server
    mongod
    -Verify that MongoDB has started successfully
    [initandlisten] waiting for connections on port 27017
    -Begin using MongoDB client
    mongo --host 127.0.0.1:27017
    -Later, to stop MongoDB, press Control+C in the terminal where the mongod instance is running.
    -Some databases 
    show dbs

6. Create a database
    use loginapp

7. db.createCollection('users');

8. show collections;
we have users now.

9. Bootstrap downloaded from: http://getbootstrap.com/docs/3.3/getting-started/#examples

10. Jumbotron downloaded from: http://getbootstrap.com/docs/3.3/examples/jumbotron-narrow/
