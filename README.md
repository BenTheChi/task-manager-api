A task manager API for users to manage tasks and profiles. Created following Udemy's Complete NodeJS Developer Course.

Features:
- CRUD operations for users and tasks through Express
- Authentication tokens and middleware implementation
- JSON data passing
- Connected to MongoDB through Mongoose
- Sends email to users on account creation and deletion
- Upload an image avatar associated with a user

POST METHODS
/users
/users/login
/tasks
/users/logout
/users/logoutAll
/users/me/avatar

GET METHODS
/users/me
/tasks
/tasks/id

PATCH METHODS
/users/me
/tasks/id

DELETE METHODS
/users/me
/tasks/id
/users/me/avatar
