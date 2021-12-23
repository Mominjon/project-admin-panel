const { signUser, verifyUser, sign } = require('jsonwebtoken')
const model = require('./model')
const kruvchilar = 0
module.exports = {
    users: async(req, res) => {
        try {
            const rows = await model.users()
            res.json(rows)
        } catch(e) {
            console.log(e)
        }
    },
    NEW_users: async(req, res) => {
        try {
            const { user_name, user_email, user_password ,isAdmin} = req.body
            
            const newuser = await model.newuser(user_name, user_email, user_password,isAdmin)
            if(newuser) {
                res.send(signUser(rows))
            }
        } catch(e) {
            console.log(e.message)
        }
    },
    one_user: async (req, res) => {
        try {
            const {user_id} = req.body
            const one_user = await model.one_user(user_id)
            res.send(one_user)
        }catch(e) {
            console.log(e.message)
        }
    },
    serarch_user: async (req, res) => {
        try{
            const { user_email, user_password } = req.body
            
            const results = await model.search(user_email, user_password)
           
            if(results.isAdmin == "admin"){
                res.send(JSON.stringify([signUser(results), "admin"]))
            }
            else {
                res.send(JSON.stringify([signUser(results), "user"]))
            }
        }catch(e) {
            console.log(e)
        }
    },
    static:async (req, res) => {
        try {
            kruvchilar += 1
            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    statistica: async(req, res) => {
        try {
            res.send(kruvchilar)
        }catch (e) {
            console.log(e)
        }
    }
}