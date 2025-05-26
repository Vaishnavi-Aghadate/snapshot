document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Clear previous error messages
  clearErrors();
  
    // Collect input values
    const Username = document.getElementById('username').value.trim();
    const Gmail = document.getElementById('email').value.trim();
    const Phone = document.getElementById('phone').value.trim();
    const EmployeeId = document.getElementById('employeeId').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Validate inputs
    let isValid = true;
  
    // Username validation: Only alphabets
    if (!/^[a-zA-Z]+$/.test(Username)) {
      showError('username-error', 'Username must contain only alphabets.');
      isValid = false;
    } else {
      hideError('username-error');
    }
  
    // Email validation: Proper Gmail address format
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(Gmail)) {
      showError('email-error', 'Email must be a valid Gmail address.');
      isValid = false;
    } else {
      hideError('email-error');
    }
  
    // Phone number validation: Exactly 10 digits
    if (!/^\d{10}$/.test(Phone)) {
      showError('phone-error', 'Phone number must be exactly 10 digits.');
      isValid = false;
    } else {
      hideError('phone-error');
    }
  
    // Employee ID validation: Cannot be empty (specific rules can be added)
    //if (EmployeeId === '') {
      //showError('employeeId-error', 'Employee ID cannot be empty.');
      //isValid = false;
    //} else {
      //hideError('employeeId-error');
    //}

    if (!EmployeeId) {
      showError('employeeId', 'Employee ID is required');
      isValid = false;
    }
  
    // Password validation: At least 8 characters
    if (password.length < 8) {
      showError('password-error', 'Password must be at least 8 characters long.');
      isValid = false;
    } else {
      hideError('password-error');
    }
  
    // If all inputs are valid, save data to local storage
    if (isValid) {
      const userData = {
        Username,
        Gmail,
        Phone,
        EmployeeId,
        password,
      };
  
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Sign-Up Successful! Data has been saved to local storage.');
      window.location.href="../login.html";
      document.getElementById('signup-form').reset(); // Reset the form
    }
  });
  
  
  function showError(id, message) {
    const errorElement = document.getElementById(`${field}-error`);
    errorElement.style.display = 'block';
    errorElement.textContent = message;
  }
  
  function hideError(id) {
    const errorElement = document.getElementById(id);
    errorElement.style.display = 'none';
  }
  


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
 //var signFormDB =  firebase.database().ref('signForm')

 //document.getElementById('signup-form').addEventListener('submit',submitForm)


 //function submitForm(e){
    //e.preventDefault();

    //var Username = getElementVal('username');
    //var Gmail = getElementVal('email')
    //var phone = getElementVal('phone')
    //var EmployeeId = getElementVal('employeeId')
    //var password = getElementVal('password')

    //saveMessage(Username, Gmail, phone, EmployeeId, password);

    //enable alert
    //document.querySelector(".alert").style.display="block";

    //remove the alert
    //setTimeout(() => {
        //document.querySelector(".alert").style.display="none";
    //}, 3000);
 
    //reset the form
    //document.getElementById('signup-form').request()

    //console.log(Username, Gmail, phone, EmployeeId, password);
 //}

 //const saveMessage = (username, email, phone, employeeId, password)=> {
    //var newsignForm = signFormDB.push();

    //newsignForm.set({
        //username: username,
        //email: email,
        //phone: phone,
        //employeeId: employeeId,
        //password: password,

    //});
 //};

  // Reference to the database
var signFormDB = firebase.database().ref('signForm');

// Add event listener for login form
document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get email and password inputs
  const loginUsername = getElementVal('username').value.trim();
  const loginEmail = document.getElementById('login-email').value.trim();
  const loginPassword = document.getElementById('login-password').value.trim();


  //var Username = getElementVal('username');
    //var Gmail = getElementVal('email')
    //var phone = getElementVal('phone')
    //var EmployeeId = getElementVal('employeeId')
    //var password = getElementVal('password')


  // Fetch data from Firebase and validate

  signFormDB.once('value', (snapshot) => {
    let isValid = false;
    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      if (data.email === loginEmail && data.password === loginPassword) {
        isValid = true;
      }
    });

    // If credentials match, log in
    if (isValid) {
      alert('Login Successful!');
      window.location.href = '../login.html'; // Redirect to dashboard
    } else {
      // Show invalid credentials alert
      document.querySelector('.alert').style.display = 'block';
      setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
      }, 3000);
    }
  });
});


 function getElementVal(id) {
    return document.getElementById(id).value;
 }