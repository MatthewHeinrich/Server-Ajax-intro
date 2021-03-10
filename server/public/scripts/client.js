$( document ).ready(onReady);

function onReady(){
    // click handlers
    $('#sendMessageButton').on( 'click', sendMessage );
    // initialization 
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


function sendMessage(){
    // get user input & place it in an object
    let objectToSend = {
        author: $( '#nameIn' ).val(),
        body: $( '#messageIn' ).val()
    }
    console.log('sending message:', objectToSend );
    // send the object to the server via AJAZ POST
    // if successful, update the DOM
    // catch any errors
    // empty the messageIn element
    $('#messageIn').val( '' );
} // end sendMessage