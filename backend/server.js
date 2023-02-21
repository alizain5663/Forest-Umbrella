const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 7777;
//Block Start Initialize the app
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(express.raw());
app.use(cors());
app.use('/assets',express.static('assets')); //Route in image path
//Block Start Initialize the app

app.use(express.static(path.join(__dirname,'/front-end'))); //making folder oublic

const _EmailService = require('./Routes/emailManagementRoute');

app.use('/_EmailService',_EmailService)


//Start Block Setting th Headers for your Application
app.all('*', (req, res, next) => {
    // This is how we protect the api
    res.header('Access-Control-Allow-Origin', '*');// So it make the header allow to the origin when cross platfrom try to exchange the data
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        //Mehtod is a property which help us to use the Methods by request. Browers send the options request before your Mthods request
    }
    next(); //if nothing of the response sent back so next() means other route
});
//End Block Setting the Header for your Application

//Serving Front End Form Your Server.js(Express)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/front-end/index.html'));
})
//Serving Front End Form Your Server.js(Express)


app.listen(PORT,()=>{
    console.log(`server is runing on port number ${PORT}`);
    // console.log(__dirname);
})