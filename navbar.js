import {append_navbar_HTML, popUp1, remPopUp1, popUp2, remPopUp2, popUp3, remPopUp3, popUp4, remPopUp4} from "../components/navbar_Export.js";

let container=document.querySelector("#navbar_Import");
append_navbar_HTML(container);


let PopUp1 = document.querySelector(".popUp1");
let PopUp2 = document.querySelector(".popUp2");
let PopUp3 = document.querySelector(".popUp3");
let PopUp4 = document.querySelector(".popUp4");

popUp1(PopUp1,PopUp2,PopUp3,PopUp4);
remPopUp1(PopUp1); 
popUp2(PopUp2,PopUp1,PopUp3,PopUp4);
remPopUp2(PopUp2);
popUp3(PopUp3,PopUp1,PopUp2,PopUp4);
remPopUp3(PopUp3);
popUp4(PopUp4,PopUp1,PopUp2,PopUp3);
remPopUp4(PopUp4);

