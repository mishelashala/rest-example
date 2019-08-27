const { Router } = require("express");
const userController = require("../../controllers/UserController");
const userRouter = Router();

// Request (POST /v1/users)
// [ isAuthenticatedMiddleware ]
// [ userController.getAll ]

userRouter.get("/", (_req, res) => {
  const userList = userController.getAll();
  const response = {
    ok: true,
    results: userList,
  };

  res.status(200).json(response);
});

module.exports = userRouter;
