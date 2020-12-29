const express = require('express')
require('dotenv').config()

const app = express()

// Middlewares

app.use(express.static('public'))

//Setting view engine
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(function (req, res, next) {
    res.locals = {
      siteName: 'Matthieu-Jean Habbouche Portfolio',
      siteUrl: process.env.siteUrl,
    }
    next()
})

app.get('/', (req, res) => {
    res.render('home', {page_name: 'home'})
})

app.use(function(req, res) {
    res.status(404);
    res.render('404', {page_name: 'error'})
});

// Server start
app.listen(process.env.PORT,() => console.log(`Server has started on port ${process.env.PORT}`))