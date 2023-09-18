const dotenv = require('dotenv');
const { resolve,join }  = require('path');

dotenv.config({    
    path: resolve(__dirname,process.env.NODE_ENV+'.env')
});

module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 3000,
    UPLOAD_FOLDER: join(resolve(__dirname,'..'),process.env.UPLOAD_FOLDER) || '/uploads'
}

console.log("Upload folder: ",join(resolve(__dirname,'..'),process.env.UPLOAD_FOLDER));
console.log("__dirname: ",__dirname);
