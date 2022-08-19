// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyAYCHVWNfX2NAeZlvPOUYpiiOUp0TNcXK8",
    authDomain: "lets-chat-4e000.firebaseapp.com",
    databaseURL: "https://lets-chat-4e000-default-rtdb.firebaseio.com",
    projectId: "lets-chat-4e000",
    storageBucket: "lets-chat-4e000.appspot.com",
    messagingSenderId: "858944805691",
    appId: "1:858944805691:web:eec2273c47b03c1ace351e",
    measurementId: "G-NCEZ8KY583"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



