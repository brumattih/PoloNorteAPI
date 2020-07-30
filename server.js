const express = require('express')
const routes = require('./src/routes')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5555

app.use(morgan('dev'))
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use((req, res, next) => {
    return next()
})

app.use(routes)


app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

app.listen(port, err => {
    if (err) return console.log(`Não startou ${err}`)

    console.log('Running on port', port)
})