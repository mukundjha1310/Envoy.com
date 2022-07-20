let PopUp1 = document.querySelector(".popUp1");
let PopUp2 = document.querySelector(".popUp2");


let popUp1 = () => {
  PopUp1.setAttribute("id", "popup1");
  PopUp2.removeAttribute("id", "popup2");
};
let remPopUp1 = () => {
  PopUp1.removeAttribute("id", "popup1");
};



let popUp2 = () => {
  PopUp2.setAttribute("id", "popup2");
  PopUp1.removeAttribute("id", "popup1");
};
let remPopUp2 = () => {
  PopUp2.removeAttribute("id", "popup2");
};