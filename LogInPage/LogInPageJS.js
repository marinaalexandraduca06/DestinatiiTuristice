function login(){
    let user=document.getElementById('nume');
    localStorage.setItem("user", user.value);
}