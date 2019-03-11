// function toggle_log () {
//     if(localStorage.getItem('login-status') == 1){
//         console.log('Yes');
//         document.querySelector('#login').style.display = 'none';
//         document.querySelector('#logout').style.display = '';
//     }
// }
// toggle_log();
var loginNoneStyle = document.createElement('style');
var loginDStyle = document.createElement('style');
var logoutDStyle = document.createElement('style');
var logoutNoneStyle = document.createElement('style');

loginDStyle.innerHTML = 
'#login {' +
    
'}';
loginNoneStyle.innerHTML =   
'#login {' +
    'display: none;' +
'}';
logoutDStyle.innerHTML = 
'#logout {' +
    
'}';
logoutNoneStyle.innerHTML =   
'#logout {' +
    'display: none;' +
'}';

// Get the first script tag
var ref = document.querySelector('script');

// Insert our new styles before the first script tag
if(localStorage.getItem('login-status') == '1'){
    ref.parentNode.insertBefore(loginNoneStyle, ref);
    ref.parentNode.insertBefore(logoutDStyle, ref);
}
else if(localStorage.getItem('login-status') == '0'){
    ref.parentNode.insertBefore(loginDStyle, ref);
    ref.parentNode.insertBefore(logoutNoneStyle,ref);
}