"use strict";

const { StatusCodes } = require("http-status-codes");
const usersModel = require("../models/User");
const User = require("../models/User");

async function listUsers(req, res) {
    const users = await User.find().sort({ createAt: 1 });

    res.status(StatusCodes.OK).render("users", {
        pageTitle: "Users",
        users
    });
}

async function createUser(req, res) {
    const name = req.body.name?.trim();
    const gender = req.body.gender;

    if (!name || !gender) {
        return res.status(StatusCodes.BAD_REQUEST).send(
            "<h1>Bad Request</h1><p>Name and gender are required.</p><p><a href='/add-user'>Go back</a></p>"
        );
    }

    await User.create({ name, gender});
    return res.redirect("/users");
}

async function deleteUser(req, res) {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    return res.redirect("/users");
}

async function showEditForm(req, res) {
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) {
        return res.status(StatusCodes.NOT_FOUND).send("<h1>User not found</h1>");
    }

    return res.status(StatusCodes.OK).render("edit-user", {
        pageTitle: "Edit User",
        user
    });
}

async function updateUser(req, res) {
    const id = req.params.id;
    const name = req.body.name?.trim();
    const gender = req.body.gender;

    if (!name || !gender) {
        return res.status(StatusCodes.BAD_REQUEST).send(
            "<h1>Bad Request</h1><p>Name and gender are required.</p>"
        );
    }

    await User.findByIdAndUpdate(id, { name, gender }, { runValidators: true });
    return res.redirect("/users");
}

module.exports = {
    listUsers,
    createUser,
    deleteUser,
    showEditForm,
    updateUser
};