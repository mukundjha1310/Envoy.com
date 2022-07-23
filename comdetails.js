document.querySelector("form"),addEventListener("submit",compdata);
let arr=[];
function compdata(){
    
        let obj={
            companyaddress:document.querySelector("#compaddress").value,
            companyname:document.querySelector("#compname").value,
             compansize:document.querySelector("#select").value
        };
        if(obj.length===0){
                alert("please fill all Company data")
        }
        else{

        arr.push(obj);
        console.log(arr);
        
        alert("company data save");
        localStorage.setItem("companydata",JSON.stringify(arr));
        window.location.href="loginemail.html";
      }  
    
}
function sign(event){
        event.preventDefault()
        window.location.href="loginemail.html"
}
function signup(event){
        event.preventDefault()
        window.location.href="signup.html"
}