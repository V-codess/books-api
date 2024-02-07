// const AWS = require('aws-sdk');
// const fs = require('fs');

// // Set up AWS configuration
AWS.config.update({
    accessKeyId: process.env.AWS_API_KEY,
    secretAccessKey: process.env.AWS_API_SECRET,
    region: process.env.AWS_REGION_NAME
});
// // Create S3 instance
// const s3 = new AWS.S3();

// // Define parameters for S3 upload
const params = {
    Bucket: 'your-bucket-name',
    Key: 'example.jpg',
    Body: fs.readFileSync('example.jpg')
};

// // Upload file to S3 bucket
// s3.upload(params, (err, data) => {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log('File uploaded successfully:', data.Location);
//     }
// });


require('dotenv').config();
const { S3Client } = require('@aws-sdk/client-s3');
const multer = require('multer');
const multerS3 = require('multer-s3');
let s3 = new S3Client({
  region: process.env.AWS_REGION_NAME,
  credentials: {
    accessKeyId: process.env.AWS_API_KEY,
    secretAccessKey: process.env.AWS_API_SECRET,
  },
  sslEnabled: false,
  s3ForcePathStyle: true,
  signatureVersion: 'v4',
});

export const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
   
  }),
});
