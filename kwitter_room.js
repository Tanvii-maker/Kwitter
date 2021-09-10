
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyD2sFlpaMPIo-f5F360B-3VI14Sb2yYHOk",
      authDomain: "kwitter-c50f3.firebaseapp.com",
      databaseURL: "https://kwitter-c50f3-default-rtdb.firebaseio.com",
      projectId: "kwitter-c50f3",
      storageBucket: "kwitter-c50f3.appspot.com",
      messagingSenderId: "478512059034",
      appId: "1:478512059034:web:1a65b47b7a6ef60abb4523"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
     user_name= localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML= "Welcome " +user_name + "!";

    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location= "kwitter_page.html";
}
    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
         window.location = "kwitter_page.html";
}
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

   document.getElementById("msg").value = "";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "index.html";
}
