const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./routes/v1/UserRouter");

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ENDPOINT = Method + PATH
// handled by Routers
app.use("/v1/users", userRouter);

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

// Routers -> Controllers -> Services
// Routers handle scopes (/users)
// Middlewares sit bewteen the request and the controller (validation)
// Controlles' actions handle specific endpoints (GET /users/1)
// Services: where our data is stored
