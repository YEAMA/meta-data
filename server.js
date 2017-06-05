const express = require('express')
const multer = require('multer')

var app = express()
const port = process.env.PORT || 3000;

var upload = multer({ dest: 'uploads/' })

app.get('/', (req, res) => {
    res.send(`<p>Submit a file below to get its size</p> <br> <form enctype="multipart/form-data" method="POST" action="/meta" name="file"><input type="file" name="file" id="file"><input type="submit" value="Upload"></form>`)
})

app.post('/meta', upload.single('file'), (req, res) => {
    if (!req.file)
        res.send(400).send({
            error: "Invalid submission"
        })

    res.send({
        size: req.file.size
    })
})


app.listen(port, () => {
    console.log(`Server Started on port ${port}`)
})