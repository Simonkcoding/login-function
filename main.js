

//authorization layout
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        $('#login_div').css("display", "none")
        $('#user_div').css("display", "block");
        // User is signed in. display login msg and invisible login page

        var user = firebase.auth().currentUser;

        if (user != null) {
            var email_id = user.email;
            var email_verified = user.emailVerified;
            $('#userId-text').text('welcome user :' + email_id + ' Verified: ' + email_verified);
        }

    } else {
        $('#login_div').css("display", "block");
        $('#user_div').css("display", "none");
        // No user is signed in.display successful login page and invisible login msg
    }
});


//log-in button
$('#login-btn').on("click", function login() {

    var userEmail = $('#email-field').val();
    var userPw = $("#password-field").val();

    firebase.auth().signInWithEmailAndPassword(userEmail, userPw).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(userEmail)
        console.log(userPw)
        console.log(errorCode)
        console.log(errorMessage)
        $('#firebase-message').text(errorMessage);
        
        // ...
    });

})

//log out button
$('#logout-btn').on("click", function loginout() {

    firebase.auth().signOut()

})


//create account button
$('#createAcc-btn').on("click", function createAcc() {

    var userEmail = $('#email-field').val();
    var userPw = $("#password-field").val();

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPw).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(userEmail)
        console.log(userPw)
        console.log(error.code)
        console.log(error.message)
        $('#firebase-message').text(error.message);
       
    });
})

//send verification button
$('#sendVeri-btn').on("click", function sendVeri() {

    var user = firebase.auth().currentUser;

    user.sendEmailVerification().then(function() {
      // Email sent.
      $('#fb-message').text('Email sent!');
    }).catch(function(error) {
      // An error happened.
    });
})