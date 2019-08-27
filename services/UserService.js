const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 21,
  },
  {
    id: 2,
    firstName: "Jenny",
    lastName: "Doe",
    age: 21,
  },
];

const getAll = () => {
  return users;
};

module.exports = {
  getAll,
};

// getOneById
// deleteOneById
// updateOneById
