const { fetch, fetchAll } = require('../../lib/postgres')

const NEW_user = `INSERT INTO users(user_name, user_email, user_password, isAdmin) VALUES($1, $2, $3, $4) RETURNING * `

const ALL_user = `
    SELECT * FROM users
`
const oneuser = `
    SELECT * FROM users WHERE user_id = $1
`
const serach_user = `
    SELECT * FROM users WHERE user_email = $1 AND user_password = $2
`
const newuser = (name, email, password, isAdmin) => fetch(NEW_user, name, email, password, isAdmin)

const users = () => fetchAll(ALL_user)
const one_user = (user_id) => fetch(oneuser, user_id)

const search = (user_email, user_password) => fetch(serach_user, user_email, user_password)

module.exports = {
    newuser,
    users,
    one_user,
    search
}