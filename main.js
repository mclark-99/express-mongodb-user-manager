const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const { StatusCodes } = require("http-status-codes");

const app = express();
const PORT = process.env.PORT  || 3000;

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(expressLayouts);
app.set("layout", "layout");

const pagesRoutes = require("./routes/pagesRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(pagesRoutes);
app.use(usersRoutes);

app.use((req, res) => {
    res.status(StatusCodes.NOT_FOUND).send("<h1>404 - Page Not Found</h1>");
});

app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});