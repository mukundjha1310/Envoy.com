let topnavbar_html = `<div id="navbar">
<div id="logo">
  <img
    src="https://knightwatch.net/wp-content/uploads/2022/07/Envoy-logo1.png"
    alt="Envoy"
  />
</div>
<div id="menu">
  <div id="hiring">We're hiring!</div>
  <div onmouseenter="popUp1()" onclick="remPopUp1()" id="products">
    Products ˅
  </div>
  <div onmouseenter="popUp2()" onclick="remPopUp2()" id="solutions">
    Solutions ˅
  </div>
  <div onmouseenter="popUp3()" onclick="remPopUp3()" id="resources">
    Resources ˅
  </div>
  <div id="demo">Watch Demo</div>
  <div onmouseenter="popUp4()" onclick="remPopUp4()" id="pricing">
    Pricing ˅
  </div>
</div>
<div id="loginBtn">
  <button id="login">Log in</button>
  <button id="started">Get started</button>
</div>
</div>
<div onmouseleave="remPopUp1()" class="popUp1">
<div id="navProduct1">
  <h4>PRODUCTS</h4>
  <div class="navPro">
    <div>
      <img
        src="https://envoy.com/images/icons/products/visitors-app.png"
        alt="icon"
      />
    </div>
    <div>
      <a href=""><h4>Visitors ›</h4></a>
      <p>Visitors management solutions for any front desk</p>
    </div>
  </div>
  <div class="navPro">
    <div>
      <img
        src="https://envoy.com/images/icons/products/protect-app.png"
        alt="icon"
      />
    </div>
    <div>
      <a href=""><h4>Protect ›</h4></a>
      <p>Manage hybrid schedules and keep employees safe</p>
    </div>
  </div>
  <div class="navPro">
    <div>
      <img
        src="https://envoy.com/images/icons/products/desks-app.png"
        alt="icon"
      />
    </div>
    <div>
      <a href=""><h4>Desks ›</h4></a>
      <p>Easy desk booking for a flexible workplace</p>
    </div>
  </div>
  <div class="navPro">
    <div>
      <img
        src="https://envoy.com/images/icons/products/rooms-app.png"
        alt="icon"
      />
    </div>
    <div>
      <a href=""><h4>Rooms ›</h4></a>
      <p>Room booking made easier for your team</p>
    </div>
  </div>
  <div class="navPro">
    <div>
      <img
        src="https://envoy.com/images/icons/products/deliveries-app.png"
        alt="icon"
      />
    </div>
    <div>
      <a href=""><h4>Deliveries ›</h4></a>
      <p>A new way to organize incoming office deliveries</p>
    </div>
  </div>
  <a><p>View all products</p></a>
</div>
<div id="navProduct2">
  <h4>PLATFORM</h4>
  <div>
    <img src="https://envoy.com/images/icons/mobile-app.svg" />
    <a href=""><h4>Mobile</h4></a>
  </div>
  <div>
    <img
      src="https://envoy.com/images/icons/24px/red/integrations.svg"
    />
    <a href=""><h4>Integration</h4></a>
  </div>
  <div>
    <img src="https://envoy.com/images/icons/24px/red/developer.svg" />
    <a href=""><h4>Envoy API</h4></a>
  </div>
</div>
</div>
<div onmouseleave="remPopUp2()" class="popUp2">
<div>
  <img src="https://envoy.com/images/icons/24px/red/globe.svg" />
  <a href=""><h4>Hybrid work ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/office.svg" />
  <a href=""><h4>Support enterprise needs ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/shield.svg" />
  <a href=""><h4>Enhance security ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/rooms.svg" />
  <a href=""><h4>Space management ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/pulse.svg" />
  <a href=""><h4>Workplace health and safety ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/16px/red/sparkles.svg" />
  <a href=""><h4>Workplace experience ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/document.svg" />
  <a href=""><h4>Meet compliance requirements ›</h4></a>
</div>
</div>

<div onmouseleave="remPopUp3()" class="popUp3">
<div>
  <img src="https://envoy.com/images/icons/24px/red/office.svg" />
  <a href=""><h4>Workplace Trends Report ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/pen-nib.svg" />
  <a href=""><h4>Blogs ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/book.svg" />
  <a href=""><h4>E-books ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/webinar.svg" />
  <a href=""><h4>Webinar ›</h4></a>
</div>
<div>
  <img
    src="https://envoy.com/images/icons/24px/red/announcements.svg"
  />
  <a href=""><h4>Case Studies ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/16px/red/sparkles.svg" />
  <a href=""><h4>Data Insights ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/data.svg" />
  <a href=""><h4>Return to Workplace Index ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/megaphone.svg" />
  <a href=""><h4>Product News ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/globe.svg" />
  <a href=""><h4>Hybrid Work Resource Hub ›</h4></a>
</div>
</div>

<div onmouseleave="remPopUp4()" class="popUp4">
<div>
  <img src="https://envoy.com/images/icons/24px/red/tag.svg" />
  <a href="plans_pricing.html"><h4>Plans and pricing ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/calculator.svg" />
  <a href="quote.html"><h4>Get a quote ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/phone.svg" />
  <a href=""><h4>Call sales:(877) 652-2808 ›</h4></a>
</div>
<div>
  <img src="https://envoy.com/images/icons/24px/red/envelope.svg" />
  <a href="Contactus.html"><h4>Contact us ›</h4></a>
</div>
</div>`;

let append_navbar_HTML=(container)=>{
   container.innerHTML=topnavbar_html;
}

let popUp1 = (PopUp1,PopUp2,PopUp3,PopUp4) => {
   PopUp1.setAttribute("id", "popup1");
   PopUp2.removeAttribute("id", "popup2");
   PopUp3.removeAttribute("id", "popup3");
   PopUp4.removeAttribute("id", "popup4");
 };
 let remPopUp1 = (PopUp1) => {
   PopUp1.removeAttribute("id", "popup1");
 };
 
 let popUp2 = (PopUp2,PopUp1,PopUp3,PopUp4) => {
   PopUp2.setAttribute("id", "popup2");
   PopUp1.removeAttribute("id", "popup1");
   PopUp3.removeAttribute("id", "popup3");
   PopUp4.removeAttribute("id", "popup4");
 };
 let remPopUp2 = (PopUp2) => {
   PopUp2.removeAttribute("id", "popup2");
 };
 
 let popUp3 = (PopUp3,PopUp1,PopUp2,PopUp4) => {
   PopUp3.setAttribute("id", "popup3");
   PopUp1.removeAttribute("id", "popup1");
   PopUp2.removeAttribute("id", "popup2");
   PopUp4.removeAttribute("id", "popup4");
 };
 let remPopUp3 = (PopUp3) => {
   PopUp3.removeAttribute("id", "popup3");
 };
 
 let popUp4 = (PopUp4,PopUp1,PopUp2,PopUp3) => {
   PopUp4.setAttribute("id", "popup4");
   PopUp1.removeAttribute("id", "popup1");
   PopUp2.removeAttribute("id", "popup2");
   PopUp3.removeAttribute("id", "popup3");
 };
 let remPopUp4 = (PopUp4) => {
   PopUp4.removeAttribute("id", "popup4");
 };
export {append_navbar_HTML, popUp1, remPopUp1, popUp2, remPopUp2, popUp3, remPopUp3, popUp4, remPopUp4};