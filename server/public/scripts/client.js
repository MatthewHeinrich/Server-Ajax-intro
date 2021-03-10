$( document ).ready(onReady);

function onReady(){
    getMessages();
} // end onReady

function getMessages(){
    // make an AJAX GET request to the server for messages
    // using a try-then-catch chain
    $.ajax({
        type: 'GET',
        url: '/messages'
    }).then( function( response ){
        // if successful, show on the DOM
        console.log( 'back from server with:', response );
    }).catch( function( err ){
        // catch any errors
        // display errors in the console
        alert( 'error' );
        console.log( err );
    }) // end AJAX
    
    
} // end getMessages