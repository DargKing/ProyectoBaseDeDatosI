require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()

// Middleware
app.use(express.static(path.join(__dirname, '/public/')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

// Config
app.set('view engine', 'html')


app.use(require('./routes/recargas.routes'))
app.use(require('./routes/user.routes'))
app.use(require('./routes/traslados.routes'))
app.use(require('./routes/vehiculos.routes'))
app.use(require('./routes/cuentaBancaria.routes'))
app.use(require('./routes/pago.routes'))
// app.use(function (req, res, next) {
//     res.status(404);

//     // respond with html page
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, '/public/error404.html'));
//         return;
//     }

//     // respond with json
//     if (req.accepts('json')) {
//         res.json({ error: 'Not found' });
//         return;
//     }

//     // default to plain-text. send()
//     res.type('txt').send('Not found');
// })

app.listen(process.env.SERVER_PORT, () => {
    console.log(`El server se conecto al puerto ${process.env.SERVER_PORT}`)
})