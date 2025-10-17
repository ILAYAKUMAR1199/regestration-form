var button=document.getElementById("button")

button.addEventListener("click",function(){
    event.preventDefault()

    var nameRegex=/^[a-zA-Z]+$/
    var emailRegex=/^[a-zA-Z0-9]+@gmail\.com$/
    var passwordRegex=/^[A-Za-z]+/


    var name=document.getElementById("name")
    var email=document.getElementById("email")
    var password=document.getElementById("password")
    
     var validate=true
    if(nameRegex.test(name.value)==false){
        var nameerror=document.querySelector(".nameerror")
        nameerror.style.display="inline"
        validate=false
    }
    else{
        var nameerror=document.querySelector(".nameerror")
        nameerror.style.display="none"
    }
        
    if(emailRegex.test(email.value)==false){
        var emailerror=document.querySelector(".emailerror")
        emailerror.style.display="inline"
        validate=false
    }
    else{
        var emailerror=document.querySelector(".emailerror")
        emailerror.style.display="none"
    }
    
    if(passwordRegex.test(password.value)==false){
        var passworderror=document.querySelector(".perror")
        passworderror.style.display="inline"
        validate=false
    }
    else{
        var passworderror=document.querySelector(".perror")
        passworderror.style.display="none"
    }

    if(validate==true){
        alert("Form submited sucessfully")
    }
    else{
        alert("please fill the Form")
    }



    
})