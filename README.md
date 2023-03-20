# CRUD API for Blog Posts
#### A fully functional example Project that is written in NestJs,Docker, PostgreSQL, TypeORM, Git, and Swagger.

## Description:
  Blog Post REST API using NestJS. This is a sample project that demonstrates the creation of a REST API using NestJS, Docker, PostgreSQL, and TypeORM. The project allows users to perform CRUD operations on blog posts, and also includes an implementation of the findDuplicates function for a given array of integers.

### Key Points:
* In this project, users can create blog posts using two APIs: the Blogs API and the Auth API.

* To register, users must provide their email, password, and choose a role: regular or admin.

* Upon successful registration, users can log in using their credentials. The API generates a JWT token that users can use to update or delete their blog posts.

* To ensure data integrity, the system checks for duplicate emails and generates a unique ID for each blog post.

* Each user can create multiple blog posts in a one-to-many relationship. All users can view the public details of all blog posts, including the content and title. However, for security reasons, other information remains hidden.

* Users can update their blog posts at any time. Only users with admin access can delete blog posts. To delete a post, the admin must provide their token and the blog post ID.

#### Here is some link that can help you for making user account as well as Blog post.

### For Authentication:
  * For Register you can use   http://localhost:3000/auth/register.
 

* For login purpose http://localhost:3000/auth/login


### For Blog Post:
For making Blog post you can use
http://localhost:3000/blog

For update Blog you can use 
http://localhost:3000/blog/id

For delete post you can use
http://localhost:3000/blog/id

## Step to Install/Use this CRUD example project on your System.

* clone this project on github.
* Install all the dependencies.

Their is another soltion you can setup your Docker docker-compose.yml file with. 
and use it alpine like operating system.
after setup perfectly.
run this command on your terminal.

* Sudo Docker-compose build
* Sudo Docker-compose up.

## Important Note: 
... This is just the Demo project. So, If you found any issue or would like to submit an Improvement to this project, please submit an issue using the issues tab above. If you would like to submit a PR with a fix, reference the issue you created!



# Thank you
