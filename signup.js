

let data=JSON.parse(localStorage.getItem("user_data"))||[];
class user{
       constructor()
       {

      }
       //    this.name=a;
        //   this.id=b;
     //  }
    //  vadliteusername(name)
    //        {
    //              if(name.length>4)
    //              {
    //        return true;
    //             }
    //             else{
    //              alert("Enter correct Name");
    //             }
    //        }
           validateemail(email)
           {
               if(email.length>8)
               {
                   return true;
               }
               else
               {
                   alert("Enter correct email");
               }
           }
           validatephone(phone)
           {
            if(phone.length==10)
            {
               return true;
            }
            else
            {
                 alert("Please enter valid phone no");
            }
        
        }
           validatepassword(password)
          {
           if(password.length>=8)
           {
              return true;
           }
           
           else
           {
                alert("Please enter valid password");
           }
       
       }
       
       sameemail(email)
       {
           let filterd=data.filter(function(elem)
           {
               return elem.email==email;
           });
           if(filterd.length>0)
           {
               alert("email alredy exits");
           }
           else
           {
              return true;
           }
       }




     Signup(email,firstname,lastname,phone,password)
     {
           let isvadilite=false;
           isvadilite=this.validateemail(email) &&this.validatephone(phone) && this.validatepassword(password)  && this.sameemail(email) ;
            if(isvadilite)
           {
              this.firstnam=firstname;
              this.lastname=lastname;
              this.email=email; 
             this.password=password;
             data.push(this);
             console.log(data)
             localStorage.setItem("user_data",JSON.stringify(data));
            
            window.location.href="compdetails.html";
           document.querySelector("#email").value=null;
         document.querySelector("#firstnam").value=null;
         document.querySelector("#lastname").value=null;
         document.querySelector("#phoneno").value=null;
         document.querySelector("#password").value=null;
         
        
           }
          else
          {
              console.log("login not sucessfully");
         }
       
       }
         
      }
 document.querySelector("form").addEventListener("submit",datastorage);
function datastorage()
{
    event.preventDefault();
    // let form=document.querySelector("form");
    let email=document.querySelector("#email").value;
    let firstname=document.querySelector("#firstnam").value;
    let lastname=document.querySelector("#lastname").value;
    let phone=document.querySelector("#phoneno").value;
    let password=document.querySelector("#password").value;
   
    let s=new user(email,phone,password);
    s.Signup(email,firstname,lastname,phone,password);
   
}

    

   