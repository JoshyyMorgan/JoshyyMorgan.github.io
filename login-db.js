var delayInMilliseconds = 3000;
var inputU, inputP, inputP2;
// 

saveUP= () => { 
    //user input
    var inputU= document.getElementById("username");
    var inputP = document.getElementById("password");
    var inputP2 = document.getElementById("password2");
    //check if user inputs correctly: username can't be blank or already exists,
    // passwords are at least 8 char and comfirm password is correct
    if(inputP.value==inputP2.value && (inputU != null) && (inputP.value.length > 8)){
        if(localStorage.getItem(inputU.value)==null){
            localStorage.setItem(inputU.value, inputP.value);
            alert('Account is successfully created! You will be redirected in 3 second!');
            setTimeout(function(){
                document.location = 'login.html'
            },delayInMilliseconds)
        }
        else{
            document.getElementById('create-error').innerHTML = 'That username already exists.'
        }
    }
    else{
        document.getElementById('create-error').innerHTML = "Please don't submit blank space or have a password that is less than 8 character or check if both passwords are identical"
    }
    
}

checkValid = () =>{
    var u = document.getElementById('usernameL');
    var p = document.getElementById('passwordL');
    //grant access if the input username and password is correct in the database
    if(p.value == localStorage.getItem(u.value)){
        localStorage.setItem('login-status','1');
        alert('Login successfully! You will be redirected to home page in 3 second!');
        setTimeout(function(){
            document.location = 'index.html';
        },delayInMilliseconds)
    }
    //deny access
    else{
        document.getElementById('login-error').innerHTML = 'Oops! Check your username and password!'
    }
    
}

logout =() =>{
    console.log("log out")
    localStorage.setItem('login-status','0');
    alert('Logout successfully!');
    document.location = 'index.html';
}
