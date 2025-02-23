
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyBVnglaK_Rsd_2M1M6AK3_hxnrTNerUlt0",
  databaseURL:"https://kwitter-eff20-default-rtdb.firebaseio.com/",
  authDomain: "kwitter-eff20.firebaseapp.com",
  projectId: "kwitter-eff20",
  storageBucket: "kwitter-eff20.firebasestorage.app",
  messagingSenderId: "1038967164076",
  appId: "1:1038967164076:web:a681c58a07892efb392309"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { 
   firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {
       childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
