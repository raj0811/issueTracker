const express=require('express');       
const cookieParser = require('cookie-parser');
var expressLayouts = require('express-ejs-layouts');   

const db=require('./config/mongoose');
const app= express();




app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const port = 8003;




// setup view engin
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));

// app.use(expressLayouts);

// extract style and script from subpages to layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);
app.use('/', require('./routes'));

app.listen(port, function(err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port} `);
})