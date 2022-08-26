# photoAlbum
Creating an amazing photo album.

To Run this app in local machine, please follow the following steps:

Step 1: Clone this repository: https://github.com/san-joy/photoAlbum.git
Step 2: "cd sanjoy-audhikari" to get into NX workspace
Step 3: Now run "npm install" to install dependances 
Step 4: Run "npm run serve:all" it will run both front end and back end at the same time.
  - You may want to configur your MySQL database with necessery data and update connection string in .env file to connect to database or backend will not work.
  - You could run "npm run serve:web" to run frontend or "npm run serve:api" to run backend individually. 

Enjoy! :)


***** Limitation *******
- Currently pagination is implementated for frontend. However, there is no pagination for backend, which will slow down application for large data.
- Cypress e2e and jest tests are very basic. I am keen to learn those more and hopefuly get better in future. 
- Application somehow responsive and mobile fridly but i could do better with css!

As this a POC, you may want to forgive! :)

