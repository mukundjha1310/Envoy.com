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