var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

let a1 = () => {
  let a1 = document.getElementById("a1");
  a1.innerHTML =
    "Desk booking, hot desk booking, or desk hoteling gives your employees the flexibility to book a desk for days when they work on-site. Desk booking is a popular tool hybrid workplaces use to optimize their space and usage.";
};

let a2 = () => {
  let a2 = document.getElementById("a2");
  a2.innerHTML =
    "Envoy’s hot desk booking software makes it easy to create thriving hybrid workplaces. By making desks available for hot desk booking, you give your employees the flexibility to book a desk for days when they come on-site. Your team can easily reserve a desk to collaborate on-site on Envoy’s desk booking mobile app or on the web.";
};

let a3 = () => {
  let a3 = document.getElementById("a3");
  a3.innerHTML =
    "Envoy’s hot desk booking software makes running hybrid workplaces easy. Your employees can see when their colleagues are scheduled to work on-site and make a desk booking near them to collaborate seamlessly in person.";
};

let a4 = () => {
  let a4 = document.getElementById("a4");
  a4.innerHTML =
    "Envoy’s hot desk booking software works for any office-based business that seeks to offer flexibility and seamless collaboration within the workplace. Start a free trial to see for yourself how hot desk booking software can transform your office into a thriving hybrid workplace.";
};

let a5 = () => {
  let a5 = document.getElementById("a5");
  a5.innerHTML =
    "Workplace admins can do delegated desk booking on behalf of employees using Envoy’s hot desk booking software. This feature is ideal for admins to reserve a block of desks for an on-site event, ensure executives are seated with their prefered desk amenities, or that a visiting employee gets a good desk without knowing the local office layout.";
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

let c4 = () => {
  let c4 = document.getElementById("a4");
  c4.innerHTML = null;
};

let c5 = () => {
  let c5 = document.getElementById("a5");
  c5.innerHTML = null;
};