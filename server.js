const express = require('express');

const app = express()
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to Our Application'
    })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Server is Runing on PORT ${PORT}`)
}) // for server Live