//Initialize Firebase
var config = {
    apiKey: "AIzaSyAsO5KqxlfEdhpg9XE82N8yq8ej31cMzNQ",
    authDomain: "angel-0118.firebaseapp.com",
    databaseURL: "https://angel-0118.firebaseio.com",
    storageBucket: "angel-0118.appspot.com"
};
firebase.initializeApp(config);

//function to save file
function previewFile() {
    var storage = firebase.storage();

    var file = document.getElementById("files").files[0];
    console.log(file);

    var storageRef = firebase.storage().ref("images");

    //dynamically set reference to the file name
    console.log(file.name);
    var thisRef = storageRef.child(file.name);

    //put request upload file to firebase storage
    thisRef.put(file).then(function (snapshot) {
        console.log('Uploaded a blob or file!');
    });

    //get request to get URL for uploaded file
    thisRef.getDownloadURL().then(function (url) {
        console.log(url);
    })

}