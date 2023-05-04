# Brand-Radiator-Assignment

To start a program firstly clone the project from git

for frontend
  cd ./client 
  open terminal
  enter command "npm install"
  enter command npm run dev
  
for server
  cd ./server
  open terminal
  enter command "npm install"
  create a new file in main directory name ".env"
  create globle variables name as
    1. PORT = (give port number ex. 3000)
    2. MONGO_URL = (give your mongodb url to connect ex. mongodb://localhost:27017/brandradiator)
  enter command npm start
  
  to enter in admin section hit an api http://localhost:3000/register 
    enter credentials for email and password (throught postman)
    and now can access admin section available in this project by entering email and password in login page of admin
