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


let meet_Tech=[
   {
      logo:"https://envoy.com/images/integrations/slack.svg",
      head4:"Slack",
      para:"Instantly notify employees of every Envoy update directly or in specific channels on Slack.",
   },
   {
      logo:"https://envoy.com/images/integrations/aruba.svg",
      head4:"Aruba Clearpass",
      para:"Provision unique Wi-Fi network and password details for each Envoy visitor.",
   },
   {
      logo:"https://envoy.com/images/integrations/okta.png",
      head4:"Okta",
      para:"Easily sync employee details from Okta to the Envoy employee directory.",
   },
   {
      logo:"https://envoy.com/images/integrations/microsoft-teams.svg",
      head4:"Microsoft Teams",
      para:"Automatically notify employees through a private message for every Envoy update.",
   },
   {
      logo:"https://envoy.com/images/integrations/docusign-square.svg",
      head4:"Docusign",
      para:"Automatically send visitors documents to sign via DocuSign.",
   },
   {
      logo:"https://envoy.com/images/integrations/eventbrite.png",
      head4:"Eventbrite",
      para:"Simplify event sign-in by importing Eventbrite attendees into Envoy.",
   },
   {
      logo:"https://envoy.com/images/integrations/g-suite.png",
      head4:"Google Drive",
      para:"Connect any Google Drive account to easily store signed legal documents.",
   },
   {
      logo:"https://envoy.com/images/integrations/openpath-o.svg",
      head4:"Openpath",
      para:"Manage building access for employees and visitors from anywhere.",
   }
];

let container = document.querySelector("#techCards");
  let append = () => {
   meet_Tech.forEach((el)=>{
      let div=document.createElement("div");
      let logo_div=document.createElement("div");
      let logo=document.createElement("img");
      logo.src=el.logo;
      logo_div.append(logo);
      let head4=document.createElement("h4");
      head4.innerText=el.head4;
      let para=document.createElement("p");
      para.innerText=el.para;
      div.append(logo_div,head4,para);
      container.append(div);
    })
  };
  append();