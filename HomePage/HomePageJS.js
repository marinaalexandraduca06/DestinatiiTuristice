let optiune_aleasa;

onload = () => {
    optiune_aleasa = document.getElementById('o1');
    optiune_aleasa.style.backgroundColor = "#c2d1f0";
    let t=document.getElementById('ecran');
    t.src="ManuePages/AboutUs/AboutUsHTML.html";
    
    if(sessionStorage.getItem('user') != 'null'){
        document.getElementById('lista').style.display="none";
        document.getElementById('username').innerHTML=sessionStorage.getItem('user');
        document.getElementById('logout').style.display='block';
    }
}

function ecranactiv(id){
    optiune_aleasa.style.backgroundColor = "white";
    optiune_aleasa = document.getElementById(id);
    optiune_aleasa.style.backgroundColor = "#c2d1f0";
}

function optiune_over(id){
    let op = document.getElementById(id);
    if( op != optiune_aleasa )
        op.style.backgroundColor= "#ebf0fa";
}

function optiune_out(id){
    let op = document.getElementById(id);
    if( op != optiune_aleasa )
        op.style.backgroundColor= "white";
}

function logout(){
    sessionStorage.setItem('user', 'null');
}