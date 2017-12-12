const firebaseAdmin = require('firebase-admin')
const firebaseServiceAccount = require('./data/friendly-chat-ec927-firebase-adminsdk-im5dw-d7bd84c574.json')

firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(firebaseServiceAccount),
	databaseURL: 'https://friendly-chat-ec927.firebaseio.com'
})

const firebaseDb = firebaseAdmin.database()
const ref = firebaseDb.ref('biodata')

const getBiodata = (req, res) => {
	ref.once('value', function(snapshot) {
		res.json(snapshot.val())
	})
}

const updateBiodata = (req, res) => {
	ref.update(req.body).then(() => {
		res.json({ status: 'success' })
	})
}

module.exports = {
	getBiodata,
	updateBiodata
}