let checkPass = () =>{
    let password = document.getElementById("password").value;
    let repPassword = document.getElementById("repass").value;

    if(password.length >= 6 && repPassword.length >=6 ){
        if(password == repPassword){
            window.location.assign("index.html")
        }else{
            document.getElementById("wrong").style.display = "block"
        }
    }else{
        document.getElementById("wrong").style.display = "block"
    }
}
