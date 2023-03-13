Blog Post REST API using NestJS
This is a sample project that demonstrates the creation of a REST API using NestJS, Docker, PostgreSQL, and TypeORM. The project allows users to perform CRUD operations on blog posts, and also includes an implementation of the findDuplicates function for a given array of integers.

##############Technologies used################

NestJS
Docker
PostgreSQL
TypeORM
Git
Requirements
Docker
Docker Compose
Setup
Clone the repository: git clone https://github.com/<your_username>/nestjs-blog-api.git
Change to the project directory: cd nestjs-blog-api
Run docker-compose up to start the application and its dependencies.




Endpoints
POST /blog
Create a new blog post with the following request body:

json
Copy code
{
  "title": "string",
  "content": "string"
}



GET 
http://localhost:3000/blog
Get a list of all blog posts.



GET 
http://localhost:3000/blog/:id
Get a single blog post by ID.



PATCH 
http://localhost:3000/blog/:id
Update a blog post by ID with the following request body:

json
Copy code
{
  "title": "string",
  "content": "string"
}


#############
http://localhost:3000/blog/:id
DELETE /blog/:id
And their is 2-type of user [regular , Admin] and only admin can delete the user. Regular student dont have access

Delete a blog post by ID.




POST 
http://localhost:3000/auth/login
Login to the application with the following request body:

json
Copy code
{
  "username": "string",
  "password": "string"
}
##############
If the user register a account and email is already exist so it generate error.
http://localhost:3000/auth/register

json
Copy code
Running tests
To run the unit tests for this project, use the following command:

bash
Copy code
npm run test
Authentication
This project uses a token-based approach to authentication. To authenticate, send a POST request to the /auth/login endpoint with a valid username and password. The response will contain a token that must be included in the Authorization header of subsequent requests.

Bonus points
This project includes an implementation of the generate error on Duplicates, unit tests can be run using Jest testing framework.




# Nest-CRUD-Auth-app
# Nest-CRUD-Auth-app
