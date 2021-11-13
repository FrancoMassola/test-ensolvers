# Ensolvers Test

This project is a Crud to manage folders and personal tasks.

## Installation

- Run without the script file
>Backend -- Frontend
```bash
npm install
npm start
```

### Run locally
>you have to use a config file .env inside the Backend folder
this file contains the back end server port and the database settings
```
PORT=4000
DB_USER = ensolvers
DB_PASSWORD = ensolvers123
DB_SERVER = localhost
DB_DATABASE = testchallenge
```
>to use the database locally you should have a SQL server user and the password, create a database and two tables called Task and Folder, implement all the configurations as indicated in the .env file.

## Login data
- user: ensolvers
- password: ensolvers123

### Run deployed
>you have to use a config file .env inside the Backend folder
this file contains the back end server port and the database settings.
```
PORT=4000
DB_USER = administrador
DB_PASSWORD = admiN123
DB_SERVER = serverappx2020.database.windows.net
DB_DATABASE = testchallenge
```
## Technologies required to run the app
- Angular 12
- Node 14.17.0
- Sql server 12.0 or +
- npm 6.14.13
- docker 20.10. 7
## Other technologies with which the project was created
- bcrypt 5.0.1,
- cors 2.8.5 
- dotenv 10.0.0
- express 4.17.1
- jsonwebtoken 8.5.1
- morgan 1.10.0
- mssql 7.2.1
- angular-materials 12.2.13
- ng-bootstrap 10

## Script (start.sh) description
>the script creates the configurations for the database with the tables and runs a composer file which runs two docker files one for runs the frontend an the other for runs the backend.

>before executing the script the existing .env must be removed.

## Deploy details
Backend - Heroku
- https://ensolvers-app-challenge.herokuapp.com

Frontend - Netlify
- https://admiring-kowalevski-4f3eec.netlify.app/

Bd - Azure
- Server Name: serverappx2020.database.windows.net

## Azure details
To get the access to the database deployed in azure, send me your public ip: email frann.massola@gmail.com.
