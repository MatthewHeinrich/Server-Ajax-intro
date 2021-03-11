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
        // target ul & empty
        let el = $('#messagesOut')
        el.empty();
        // loop through response
        for (i=0; i<response.length; i++){
            el.append( `<li>${response[i].author}: ${response[i].body}`)
        }
        // append each to ul
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
    $.ajax({
        type: 'POST',
        url: '/messages',
        data: objectToSend
    }).then( function ( response ){
        // if successful, update the DOM
        console.log( 'back from POST:', response )
        getMessages();
    }).catch( function ( err ){
        // catch any errors
        alert( 'error creating message' );
        console.log( err );
    }); // end AJAX
    
    
    // empty the messageIn element
    $('#messageIn').val( '' );
} // end sendMessage