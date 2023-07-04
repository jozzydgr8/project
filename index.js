var details = document.querySelectorAll(".details").length;
var users =[];



for(var i = 0; i < details; i++){
  
    document.querySelectorAll(".details")[i].addEventListener("click", function(){
    
        var userName = "";
        while (userName === ""){
          userName = prompt("Please enter your username (must be between 1 and 10 characters):");

          if(userName.length > 0 && userName.length < 10){
              alert("data is valid");            
          }
          else{
            alert("invalid data!");
            userName = "";
            
          }
        }
        
        var phoneNumber = "";
        while (phoneNumber === ""){

          phoneNumber = prompt("Please enter your phone number (must be 11 digits):");
          
          if(phoneNumber.length === 11 ){
            alert("valid data");
          }

          else{
            alert("invalid data");
            phoneNumber = "";
          }

        }
        
        var email = "";
        while (email === "") {
         email = prompt("Please enter your email address (must be a valid email address):");

         if( email.includes("@") && email.includes(".")){
          alert("valid data");
         }
         else{
          alert("invalid data");
          email = "";

         }
        }
        var password = "";
        while ( password === "" ){
            password =prompt("Please enter your password (must be at least 6 characters):");

            if(password.length > 6){
              alert("password is valid");
            }
            else{
              alert("check your password and try again");
              password = ""
            }
        }
        
        var confirmPassword = ""
        while(confirmPassword === ""){
          confirmPassword =  prompt("Please confirm your password:");
          if(confirmPassword === password){
            alert("data is valid");
          }
          else{
            alert("check that your passwords match!");
            confirmPassword = "";
          }
        }

        alert("All user data is valid!");

        var user = {
          userName : userName,
          phoneNumber : phoneNumber,
          email : email
        }
        
        users.push(user);

        } 


      
        
    )
}





function revealDetails(){


  var reveal = document.getElementById("reveal").innerHTML = "your details:"+ JSON.stringify(users);
}

