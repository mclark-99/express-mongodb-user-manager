"use strict";

const { StatusCodes } = require("http-status-codes");

function showHome(req,res) {
    const easternTime = new Date().toLocaleString("en-US", {
        timeZone: "America/New_York",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "long"
    });

    res.status(StatusCodes.OK).render("index", {
        pageTitle: "Home",
        now: easternTime
    });
}

function showAddUserForm(req, res) {
    res.status(StatusCodes.OK).render("add-user", {
        pageTitle: "add User"
    });
}

module.exports = {
    showHome,
    showAddUserForm
};