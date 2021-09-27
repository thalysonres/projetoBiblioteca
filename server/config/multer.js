const multer = require('multer')
const path = require('path')
const crypto = require('crypto')

module.exports = {
    dist: path.resolve(__dirname, '..', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, path.resolve( __dirname, '..', 'uploads' ) )
        },
        filename: (req, file, callback) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) callback(err)

                const filename = `${Date.now()}-${file.originalname}`
                callback(null, filename)
            })
        }
    })
}
