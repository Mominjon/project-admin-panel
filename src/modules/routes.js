const express = require('express')


const user = require('./users/user')
const movies = require("./movies/movies")
const router = express.Router()

router
    .get('/users', user.users)
    .get("/static", user.static)
    .get("/statistika", user.statistica)
    .get("/movies", movies.movies)

    .post("/newuser", user.NEW_users)
    .post("/oneuser", user.one_user)
    .post("/login", user.serarch_user)
    .post("/upload_img", movies.upload_img)
    .post("/new_movies", movies.NEW_movies)
    .post("/update_movies", movies.update_movies)
    .post("/one_movies", movies.one_movies)
    .post("/delete_movies", movies.delete_movies)
module.exports = router