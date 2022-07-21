let a1 = () => {
  let a1 = document.getElementById("a1");
  a1.innerHTML =
    "Envoy Protect is a solution designed to help companies safely return to the office. It includes features to help survey and screen employees before they come to the office, manage office capacity, and trace contacts of employees who get sick.";
};

let a2 = () => {
  let a2 = document.getElementById("a2");
  a2.innerHTML =
    "Envoy Protect is included with an Envoy Visitors subscription. You can send health questionnaires and screen employees on the free Basic plan, with more functionality, control and automation available on paid plans. Visit the pricing page to learn more about each plan.";
};

let a3 = () => {
  let a3 = document.getElementById("a3");
  a3.innerHTML =
    "Employees use Envoy Mobile on their personal phones to sign in for a completely touchless experience.";
};

let c1 = () => {
  let c1 = document.getElementById("a1");
  c1.innerHTML = null;
};
let c2 = () => {
  let c2 = document.getElementById("a2");
  c2.innerHTML = null;
};
let c3 = () => {
  let c3 = document.getElementById("a3");
  c3.innerHTML = null;
};



var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];

 
btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}