# express-react-start

- This repo has ready to use express server with MVC structure that have login/register route and controllers ready to use with JWT and password hashing and a client folder with minimum react files.

- After cloning the repo you need to go the main folder and **npm install** to download the packeges needed for the app and then go to the client folder and **npm install** there too or delete every thing in there and use ( **Npx Create-React-App ./)** istead to start from scratch there.
- server packeges are :

  1. express
  2. mongoose
  3. nodemon 'dev'
  4. dotenv
  5. express-async-errors
  6. jsonwebtoken
  7. bcryptjs
  8. validator
  9. http-status-codes

- You need to add .env file and add the following variables :
  MONGO_URI : Your connection string to mongoDB .
  JWT_SECRET: Your secret key for jsonwebtoken your can usehttps://www.allkeysgenerator.com/ to get secure key
  JWT_DURATION: The lifetime duration of json web token

Good Luck
