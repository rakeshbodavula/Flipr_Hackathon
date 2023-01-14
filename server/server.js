const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const {checkUser} = require('./middlewares/authMiddleware')
const authRoutes = require('./routes/authRoutes')
const cors = require('cors')

const app = express()


// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())


// database connectivitycls
const dbURI = 'mongodb://localhost:27017/ffsd1'
const user = require('./models/User')

const port = process.env.PORT || 9999
mongoose.connect(dbURI)
        .then(app.listen(port,(err)=>{
                console.log(`http://localhost:${port}/`)
        }))
        .catch((err)=> console.log(err))



// routes

app.post('/postuser', async (req, res) => {

        const name = req.body.name
        const email = req.body.email
        const password = req.body.password
        const confirmpassword = req.body.confirmpassword

        if (password === confirmpassword) {
                const user = {
                        name: name,
                        email: email,
                        password: password
                }

                dbURI.collection('user')
                .insertOne(user)
                .then(result => {
                      res.status(201)  
                })
                .catch(err => {
                        res.status(500).send('Error while posting user')
                })
        }
        else {
                alert('ConfirmPassword shoud match with the password')
        }

})


app.get('/getuser', (req, res) => {
        const email = req.body.email
        const password = req.body.password

        const users = []

        dbURI.collections('user')
                .find({'email':email,"password":password})
                .then(result => {
                user.push(result)
        })


})

// app.get('*',checkUser)
// app.post('*',checkUser)
app.use(authRoutes)


