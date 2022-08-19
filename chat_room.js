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
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+ user_name +" !!";


function addroom()
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({purpose:"adding_room_name"});
  localStorage.setItem("room_name",room_name);
  window.location="chat_room.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("room name="+ Room_names)
  row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div>";
  document.getElementById("output").innerHTML+=row;
  //End code
  });});}
getData();
function redirectToRoomName(name){
  console.log=name;
  localStorage.set("room_name",name);
  window.location="chat_room.html";
}
function logout(){
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.location="index.html";
}