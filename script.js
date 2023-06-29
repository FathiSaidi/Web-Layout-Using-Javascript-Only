
let cssStyle = document.createElement("style");
cssStyle.innerHTML = `*{box-sizing: border-box;padding:0px;margin:0px;font-family: arial;}`;
document.head.appendChild(cssStyle);

let header = document.createElement("header");
let main = document.createElement("main");
let footer = document.createElement("footer");
document.body.append(header);
document.body.append(main);
document.body.append(footer);

header.style.cssText= `height: 8vh;
                       background-color: #fff;
                       color: #000;
                       padding: 0px 30px;
                       display: flex;
                       justify-content: space-between;
                       align-items: center;`;

let heading = document.createElement("h1");
heading.innerHTML = "Elzero";
heading.style.color = "#22A96E";

let list = document.createElement("ul");
list.style.cssText = "list-style:none;color:#919191;font-size:17px;width:300px;display:flex;justify-content:space-between;";

let home = document.createElement("li");
home.innerHTML = "Home";
let about = document.createElement("li");
about.innerHTML = "About";
let services = document.createElement("li");
services.innerHTML = "Services";
let contact = document.createElement("li");
contact.innerHTML = "Contact";

list.append(home);
list.append(about);
list.append(services);
list.append(contact);

header.append(heading);
header.append(list);

footer.style.cssText= `height:8vh;
                       background-color: #22a96e;
                       color: #fff;
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       font-size: 18px;`;

footer.innerHTML = "Copyright &copy; Elzero";

main.style.cssText= `height: 84vh;
                     background-color:#eee;
                     display: grid;
                     grid-template-rows: repeat(5,1fr);
                     grid-template-columns: repeat(3,1fr);
                     gap: 20px;
                     padding: 20px`;

let box = document.createElement("div");
let boxLogo = document.createElement("span");
let boxAbout = document.createElement("p");

box.append(boxLogo);
box.append(boxAbout); 

box.style.cssText = "background-color: #fff;display:flex;flex-direction:column;justify-content:center;align-items:center;";
boxLogo.style.cssText = "font-size:27px";
boxAbout.style.cssText = "font-size:12px;color:#919191;";

for(let i = 0 ; i < 15 ; i++){
    boxLogo.innerHTML  = i + 1;
    boxAbout.innerHTML = "Product";
    main.append(box.cloneNode(true));
}









