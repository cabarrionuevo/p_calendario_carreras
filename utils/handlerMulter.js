const config = require('../config/config');
const multer = require('multer');
const { dirname, extname } = require('path');

const CURRENT_DIR = config.UPLOAD_FOLDER;
console.log("CURRENT_DIR: ",CURRENT_DIR);
const MIMETYPES = ['image/jpeg','image/png'];

const multerUpload = multer({
    storage: multer.diskStorage({        
        destination: CURRENT_DIR,
        filename: (req, file, cb) => {            
            const fileExtension = extname(file.originalname);
            const fileName = file.originalname.split(fileExtension)[0];

            cb(null, `${fileName}-${Date.now()}${fileExtension}`);
        }
    }),
    fileFilter: (req, file, cb) => {
        if (MIMETYPES.includes(file.mimetype)) {
            console.log(req);
            return cb(null, true)
        }
        else cb(new Error(`Solo se permiten los mimetypes ${MIMETYPES.join(' - ')}`), false)
    },
    limits: {
        fieldSize: 10000000
    }
});

module.exports = { multerUpload };



