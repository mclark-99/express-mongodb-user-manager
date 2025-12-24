const { StatusCodes } = require("http-status-codes");
const usersModel = require("../models/usersModel");

function listUsers(req, res) {
    res.status(StatusCodes.OK).render("users", {
        pageTitle: "Users",
        users: usersModel.getAllUsers()
    });
}

function createUser(req, res) {
    const name = req.body.name?.trim();
    const gender = req.body.gender;

    if (!name || !gender) {
        return res.status(StatusCodes.BAD_REQUEST).send(
            "<h1>Bad Request</h1><p>Name and gender are required.</p><p><a href='/add-user'>Go back</a></p>"
        );
    }

    usersModel.addUser(name, gender);
    return res.redirect("/users");
}

function deleteUser(req, res) {
    const id = Number(req.params.id);
    usersModel.deleteUserById(id);
    return res.redirect("/users");
}

module.exports = {
    listUsers,
    createUser,
    deleteUser
};