import { loadHome } from "/src/tabs/home.js";
import { loadMenu } from "/src/tabs/menu.js";
import { loadContact } from "/src/tabs/contact.js";
import Basket from "/src/images/basket.svg";

export function setUpNav(){
    const content = document.createElement("content");
    content.setAttribute("id", "content");
    content.appendChild(loadHome());

    const top = document.createElement("div");
    top.setAttribute("id", "top");

    const brand = document.createElement("div");
    brand.textContent = "Pillz";
    brand.setAttribute("id", "brand");

    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");

    const btnHome = document.createElement("button");
    btnHome.textContent = "Home";
    btnHome.classList.add("nav-buttons");
    btnHome.addEventListener("click", () =>{
        content.innerHTML = null;
        content.appendChild(loadHome());
    });

    const btnMenu = document.createElement("button");
    btnMenu.textContent = "Menu";
    btnMenu.classList.add("nav-buttons");
    btnMenu.addEventListener("click", () =>{
        content.innerHTML = null;
        content.appendChild(loadMenu());
    });

    const btnContact = document.createElement("button");
    btnContact.textContent = "Contact";
    btnContact.classList.add("nav-buttons");
    btnContact.addEventListener("click", () =>{
        content.innerHTML = null;
        content.appendChild(loadContact());
    });

    const list = document.createElement("li");
    list.setAttribute("id", "list");

    list.append(btnHome, btnMenu, btnContact);

    const icon = new Image();
    icon.src = Basket;
    icon.setAttribute("id", "basket");
    
    navbar.append(list);
    top.append(brand, navbar, icon);

    document.body.append(top, content);
}