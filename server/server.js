const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const bcryptjs = require('bcryptjs')
const cors = require('cors')

const Company = require('./models/Company')
const Stock = require('./models/Stock')
const User = require('./models/User')

const app = express()


// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


// database connectivitycls
// const dbURI = 'mongodb://localhost:27017/flipr'
// const dbURI = 'mongodb+srv://flipr:flipr%40hackathon@cluster0.dkyw7jy.mongodb.net/test'
const dbURI = 'mongodb+srv://flipr:flipr%40hackathon@cluster0.dkyw7jy.mongodb.net/?retryWrites=true&w=majority'

// const User = require('./models/User')

const port = process.env.PORT || 9999
mongoose.connect(dbURI, { useNewUrlParser: true })
        .then(app.listen(port, (err) => {
                console.log(`http://localhost:${port}/`)
        }))
        .catch((err) => console.log(err))


app.get('/', (req, res) => {
        res.send("hii")
})

api

app.post('/signupapi', async (req, res) => {

        const { name, email, password, confirmpassword } = req.body

        try {
                const userDetails = {
                        name: name,
                        email: email,
                        password: password
                }

                if (password === confirmpassword) {
                        await new User(userDetails).save()
                }
                else {
                        res.send('Password and confirpassword are not matching')
                }

                res.send('User created')
        } catch (error) {
                res.send(error)
        }

})


app.get('/loginapi', async (req, res) => {

        const { email, password } = req.body

        await User.findOne({ "email": email })
                .then(result => {
                        if (result == null) {
                                res.send("Invalid Credentials")
                        }
                        else {
                                if (bcryptjs.compare(result.password, password)) {

                                        res.send('User Present')
                                }
                                else
                                        res.send("Invalid Credentials")
                        }
                })
                .catch(err => {
                        console.log(err)
                })

})