const userService = require("../services/UserService");

// getAll :: () -> User[];
const getAll = () => {
  return userService.getAll();
};

const getOne = (req, _res) => {
  const { id } = req.params;
  const user = userService.getOneById(id);
  return user;
};

module.exports = {
  getAll,
  getOne,
};

// getOne;
// updateOne;
// deleteOne;

// non that common
// deleteMany;
// updateMany;
