module.exports = {

    pdfFilter:function(req, file, cb) {
        // Accept images only
        if (!file.originalname.match(/\.(pdf)$/)) {

            req.fileValidationError = 'Only PDF files are allowed!';
            return cb(new Error('Only PDF files are allowed!'), false);
        }
        console.log(file.originalname)
        cb(null, true);
    }
};
