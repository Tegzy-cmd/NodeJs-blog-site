require('dotenv').config();

const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

const app = express();
const PORT = 5001 || process.env.PORT;

app.use(express.static('public'));


// Connect to DB
connectDB();

app.use(express.urlencoded({extended:true}));
app.use(express.json());


// Templating EngineŸŸ

app.use(expressLayout);
app.set('layout','./layouts/main');
app.set('view engine', 'ejs');

app.use('/',require('./server/routes/main'));
app.use('/',require('./server/routes/admin'));

app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
});
