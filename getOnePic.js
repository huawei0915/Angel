var config =
    {
        apiKey: "AIzaSyAsO5KqxlfEdhpg9XE82N8yq8ej31cMzNQ",
        authDomain: "angel-0118.firebaseapp.com",
        databaseURL: "https://angel-0118.firebaseio.com",
        storageBucket: "angel-0118.appspot.com"
   };

firebase.initializeApp(config);
var storage = firebase.storage();
var storageRef = storage.ref();
storageRef.child('images/test.jpg').getDownloadURL().then(function(url) {

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  console.log(url)
  // Or inserted into an <img> element:
 document.querySelector('img').src = url;
    
}).catch(function(error) {
  // Handle any errors
});

// <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
    