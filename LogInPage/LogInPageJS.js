function login(){
    let user=document.getElementById('nume');
    sessionStorage.setItem("user", user.value);
}