const model = require('./model')
const multer = require("multer")
const storage = multer.diskStorage({
    destination: __dirname +  "../../../../images/",
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000000
    },

    fileFilter: function (req, file, cb) {
        return cb(null, true);
    }
}).single('myImage');


module.exports = {
    movies: async(req, res) => {
        try {
            const rows = await model.movies()
            res.json(rows)
        } catch(e) {
            console.log(e)
        }
    },
    NEW_movies: async(req, res) => {
        try {
            const { 
                movies_name, 
                movies_text, 
                movies_img, movies_year, movies_triler } 
                = req.body
            
            const newmovies = await model.newmovies(movies_name, 
                movies_text, 
                movies_img, movies_year, movies_triler )
                
            if(newmovies) {
                res.status(200).send('New movies')
            }
        } catch(e) {
            console.log(e.message)
        }
    },
    one_movies: async (req, res) => {
        try {
            const {movies_id} = req.body
            const one_movies = await model.one_movies(movies_id)
            res.send(one_movies)
        }catch(e) {
            console.log(e.message)
        }
    },
    update_movies: async (req, res) => {
        try {
            const {
                movies_name, movies_text, movies_img, movies_year, movies_triler
            } = req.body
            let rows = model.update_movies(movies_name, movies_text, movies_img, movies_year, movies_triler)
            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    delete_movies: async(req, res) =>{
        try {
            const { movies_id } = req.body
            let rows = model.delete_Movies(movies_id)
            res.send("ok")
        }catch(e) {
            console.log(e)
        }
    },
    upload_img: async(req, res) => {
        try {
            upload(req, res, async(err) => {
                if (err) {
                    console.log(err.message)
                } else {
                    if (req.file == undefined) {
                        console.log("bosh files")
                    } else {                       
                        let img = "https://porject-admin.herokuapp.com/users/" + `images/${req.file.filename}`
                        res.send(img)
                    }
                }
            });
        }catch(e) {
            console.log(e.message)
        }
    }
}