const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const biodata = require('./biodata')

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
		return res.status(200).json({})
	}

	next()
})

app.get('/', function (req, res) {
	biodata.getBiodata(req,res)
})

app.post('/update', function (req, res) {
	biodata.updateBiodata(req, res)
})

app.listen(port, function () {
	console.log('Node is running on port: ', port)
})