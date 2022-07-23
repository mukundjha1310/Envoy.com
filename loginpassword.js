let data=JSON.parse(localStorage.getItem("user_data"))||[];
let login_data=JSON.parse(localStorage.getItem("loginpassword"))||[];
document.querySelector("form").addEventListener("submit",logindata);
function logindata(event)
{
    event.preventDefault();
    
    let password=document.querySelector("#password").value;
    let p=new user()
    p.login(password)

}
class user
{
    constructor()
    { 

    }
    login(password)
    {
       console.log(password);
        let isvalidate=false;
        isvalidate=this.validateemail(password);
        if(isvalidate===true)
        {
            
            this.password=password;
            alert("Login sucessfully");
            window.location.href="index.html";
           login_data.push(this);
           localStorage.setItem("loginpassword",JSON.stringify(login_data));
        }
        else{
           alert("check password");
        }
    }
    validateemail(password)
    {
    //  console.log(email,password);
        let filter=data.filter(function (element)
{
return  password===element.password;
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