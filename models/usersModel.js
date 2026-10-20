"use strict";

let users = [
    {id: 1, name: "Amy Adams", gender: "Female"},
    {id: 2, name: "Chris Evans", gender: "Male"}
];

let nextId = 3;

function getAllUsers() {
    return [...users];
}

function addUser(name,gender) {
    const newUser = { id: nextId++, name, gender };
    users.push(newUser);
    return newUser;
}

function deleteUserById(id) {
    const before = users.length;
    users = users.filter((u) => u.id !== id);
    return users.length < before;
}

module.exports = {
    getAllUsers,
    addUser,
    deleteUserById
};