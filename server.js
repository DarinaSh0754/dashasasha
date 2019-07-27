var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

var Schema = mongoose.Schema

var UserSchema = new Schema({
    id: String,
    email: String,
    password: String,
    role:String
})
var UserModel = mongoose.model("UserData", UserSchema);


mongoose.connect(`mongodb://${process.env.MONGO_URL ||
"localhost"}/node-crud-api`, {
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var port = process.env.PORT || 8000
var router = express.Router()

router.use('/', function (req, res, next) {
    console.log(' Middleware .... ')
    next()
})

router.get('/', function (req, res) {
    res.json({ message: 'Успех GET' })
})

// API endpoints

router.route('/user')
    .post(function (req, res) {
        var user = new UserModel()
        user.id = req.body.id
        user.email = req.body.email
        user.password = req.body.password
        user.role = req.body.role

        const saveResult = user.save()
            .then(user => {
                console.log('user:', user)
                return res.status(201).json({ success: saveResult })
            })
            .catch(err => {
                console.log('error:', err)
                return res.status(400).json({ message: 'Register with error... ' + err })
            })
    })
    .get(function (req, res) {
        const saveResult = UserModel.find()
            .then(doc => {
                return res.status(201).json({ success: doc })
            })
            .catch(err => {
                return res.status(400).json({ message: 'Ошибка: ' + err })
            })
    })

/*router.route('/products/:product_id')
    .get(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((obj) => {
                return res.status(201).json({ success: obj })
            })
            .catch(err => {
                return res.status(400).json({ message: 'findById with error... ' + err })
            })
    })
    .put(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((prod) => {
                prod.name = req.body.name
                prod.price = req.body.price
                prod.description = req.body.description

                prod.save()

                return res.status(201).json({ success: prod })
            })
            .catch(err => {
                return res.status(400).json({ message: 'findById with error... ' + err })
            })
    })
    .delete(function (req, res) {
        const saveResult = ProductModel.findById(req.params.product_id)
            .then((prod) => {
                prod.remove()

                return res.status(201).json({ success: prod })
            })
            .catch(err => {
                return res.status(400).json({ message: 'delete with error... ' + err })
            })
    })*/

app.use('/api', router)
app.listen(port)
console.log('Инициализированный порт: ' + port)