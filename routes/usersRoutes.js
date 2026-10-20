const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.get("/users", usersController.listUsers);
router.post("/add-user", usersController.createUser);
router.get("/delete-user/:id", usersController.deleteUser);

router.get("/edit-user/:id", usersController.showEditForm);
router.post("/update-user/:id", usersController.updateUser);

module.exports = router;
