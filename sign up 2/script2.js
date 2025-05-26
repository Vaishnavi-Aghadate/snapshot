const firebaseConfig = {
    apiKey: "AIzaSyCAZLbXFhp-1u_5ZY-oTVnqAY8J_0twKNk",
    authDomain: "signform-60d98.firebaseapp.com",
    databaseURL: "https://signform-60d98-default-rtdb.firebaseio.com",
    projectId: "signform-60d98",
    storageBucket: "signform-60d98.firebasestorage.app",
    messagingSenderId: "207349313119",
    appId: "1:207349313119:web:9d2fed05788f8e60cbf5ea"
  };

  //intialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
 var signFormDB =  firebase.database().ref('signForm')

 document.getElementById('signup-form').addEventListener('submit',submitForm)


 function submitForm(e){
    e.preventDefault();

    var Username = getElementVal('username');
    var Gmail = getElementVal('email')
    var phone = getElementVal('phone')
    var EmployeeId = getElementVal('employeeId')
    var password = getElementVal('password')

    saveMessage(Username, Gmail, phone, EmployeeId, password);
    
    //enable alert
    document.querySelector(".alert").style.display="block";

    //remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display="none";
    }, 3000);
 
    //reset the form
    document.getElementById('signup-form').request()

    //console.log(Username, Gmail, phone, EmployeeId, password);
 }

 const saveMessage = (username, email, phone, employeeId, password)=> {
    var newsignForm = signFormDB.push();

    newsignForm.set({
        username: username,
        email: email,
        phone: phone,
        employeeId: employeeId,
        password: password,

    });
 };

 function getElementVal(id) {
    return document.getElementById(id).value;
 }