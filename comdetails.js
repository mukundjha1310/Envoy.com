document.querySelector("form"),addEventListener("submit",compdata);
let arr=[];
function compdata(){
    
        let obj={
            companyaddress:document.querySelector("#compaddress").value,
            companyname:document.querySelector("#compname").value,
             compansize:document.querySelector("#select").value
        };
        arr.push(obj);
        console.log(arr)
        localStorage.setItem("array",JSON.stringify(arr));
    
}