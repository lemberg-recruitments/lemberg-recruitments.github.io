// Initialize Firebase
var config = {
    apiKey: "AIzaSyAAwfIN95jmPAmhKxi3SxHd0rM3aq8_d8A",
    authDomain: "lemberg-recruitmets.firebaseapp.com",
    databaseURL: "https://lemberg-recruitmets.firebaseio.com",
    projectId: "lemberg-recruitmets",
    storageBucket: "lemberg-recruitmets.appspot.com",
    messagingSenderId: "105751482987"
  };
  firebase.initializeApp(config);

//reference messages collection
var messagesRef = firebase.database().ref('messages');


//listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e){
    e.preventDefault();

    //get all the values 
    var name = getInputValue('theName');
    var email = getInputValue('theEmail');
    var phone = getInputValue('thePhone');
    var message = getInputValue('theMessage');


    //save message to firebase db
    saveMessage(name, email, phone, message);

    //change color to green
    document.querySelector('.theSender').style.background = 'green';
    document.querySelector('.theSender').innerText = "message sent";
    

    //change color after 3 seconds
    setTimeout(function(){
    document.querySelector('.theSender').style.background = 'rgb(249, 112, 0)';    
    document.querySelector('.theSender').innerText = "send message";
    }, 5000);

    //clear form
    document.getElementById('contactForm').reset();

}

//function to get the form values 
function getInputValue(id){
    return document.getElementById(id).value;
}

//function to dave the message to firebase
function saveMessage(name, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}