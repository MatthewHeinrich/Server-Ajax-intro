// requires
// this lets the app use all of expresses features
const express = require( 'express' );

// NECESSARY FOR POSTS TO WORK PT1
const bodyParser = require( 'body-parser');

// create our web app
const app = express();

//uses
// this tells tthe app where to look for "index.html" (sets default folder)
app.use( express.static( 'server/public' ) );

// NECESSARY FOR POSTS TO WORK PT2
app.use(bodyParser.urlencoded( { extended: true } ) );

//global
const port = 5000;
let messages = [];

//spin up server
app.listen( port, ()=> {
    console.log( 'server is up on:', port );
})

//routes
app.get( '/messages', ( req, res )=>{
    console.log( '/messages get' );
    res.send( messages );
}) // end messages get 

app.post( '/messages', ( req, res )=>{
    console.log( '/messages post:', req.body );
    messages.push( req.body );
    res.sendStatus( 201 ); // CREATED
})