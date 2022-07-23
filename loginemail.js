let data=JSON.parse(localStorage.getItem("user_data"))||[];
let login_data=JSON.parse(localStorage.getItem("login"))||[];
document.querySelector("form").addEventListener("submit",logindata);
function logindata()
{
    event.preventDefault();
    let email=document.querySelector("#email").value;
    
    let a=new user()
    a.login(email)

}
class user
{
    constructor()
    { 

    }
    login(email)
    {
       // console.log(email,password);
        let isvalidate=false;
        isvalidate=this.validateemail(email);
        if(isvalidate===true)
        {
            this.email=email;
            
            // alert("Login sucessfully");
            window.location.href="loginpassword.html";
           login_data.push(this);
           console.log(login_data);
           localStorage.setItem("login",JSON.stringify(login_data));
           window.location.href="loginpassword.html"
        }
        else{
           alert("Login Failed");
        }
    }
    validateemail(email)
    {
    //  console.log(email,password);
        let filter=data.filter(function (element)
{
return email===element.email ;
});
if(filter.length>0)
{
  return true;
}
else
{
  return false;
}

    }
}