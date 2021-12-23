const { fetch, fetchAll } = require('../../lib/postgres')

const NEW_movies = `INSERT INTO movies(movies_name, movies_text, movies_img, movies_year, movies_triler) VALUES($1, $2, $3,$4,$5) RETURNING * `

const ALL_movies = `
    SELECT * FROM movies
`
const onemovies = `
    SELECT * FROM movies WHERE movies_id = $1
`

const updatemoveis = `
    UPDATE movies SET movies_name = $1,movies_text = $2, movies_img = $3, movies_year = $4, movies_triler = $5 WHERE movies_id = $6
`
const delete_movies =` 
    DELETE FROM movies
    WHERE movies_id = $1;
` 

const newmovies = (movies_name, movies_text, movies_img, movies_year, movies_triler) => fetch(NEW_movies, movies_name, movies_text, movies_img, movies_year, movies_triler)

const movies = () => fetchAll(ALL_movies)

const one_movies = (movies_id) => fetch(onemovies, movies_id)

const update_movies = (movies_name, movies_text, movies_img, movies_year, movies_triler) => fetch(updatemoveis, movies_name, movies_text, movies_img, movies_year, movies_triler)

const delete_Movies = (movies_id) => fetch(delete_movies, movies_id)

module.exports = {
    newmovies,
    movies,
    one_movies,
    update_movies,
    delete_Movies
}