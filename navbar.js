let PopUp1 = document.querySelector(".popUp1");
let PopUp2 = document.querySelector(".popUp2");
let PopUp3 = document.querySelector(".popUp3");
let PopUp4 = document.querySelector(".popUp4");

let popUp1 = () => {
  PopUp1.setAttribute("id", "popup1");
  PopUp2.removeAttribute("id", "popup2");
  PopUp3.removeAttribute("id", "popup3");
  PopUp4.removeAttribute("id", "popup4");
};
let remPopUp1 = () => {
  PopUp1.removeAttribute("id", "popup1");
};

let popUp2 = () => {
  PopUp2.setAttribute("id", "popup2");
  PopUp1.removeAttribute("id", "popup1");
  PopUp3.removeAttribute("id", "popup3");
  PopUp4.removeAttribute("id", "popup4");
};
let remPopUp2 = () => {
  PopUp2.removeAttribute("id", "popup2");
};

let popUp3 = () => {
  PopUp3.setAttribute("id", "popup3");
  PopUp1.removeAttribute("id", "popup1");
  PopUp2.removeAttribute("id", "popup2");
  PopUp4.removeAttribute("id", "popup4");
};
let remPopUp3 = () => {
  PopUp3.removeAttribute("id", "popup3");
};

let popUp4 = () => {
  PopUp4.setAttribute("id", "popup4");
  PopUp1.removeAttribute("id", "popup1");
  PopUp2.removeAttribute("id", "popup2");
  PopUp3.removeAttribute("id", "popup3");
};
let remPopUp4 = () => {
  PopUp4.removeAttribute("id", "popup4");
};
