import Burger from "/src/images/burger.jpg";
import Festive from "/src/images/festive.jpg";
import Greens from "/src/images/greens.jpg";
import Pizza from "/src/images/pizza.jpg"

export function loadMenu(){
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    
    const heading = document.createElement("h1");
    heading.textContent = "Menu";

    const item1 = document.createElement("div");
    item1.classList.add("menu-item");
    const title1 = document.createElement("h2");
    title1.textContent = "Burger";
    const burger = new Image();
    burger.classList.add("menu-images");
    burger.src = Burger;
    item1.append(title1, burger);

    const item2 = document.createElement("div");
    item2.classList.add("menu-item");
    const title2 = document.createElement("h2");
    title2.textContent = "Pizza";
    const pizza = new Image();
    pizza.classList.add("menu-images");
    pizza.src = Pizza;
    item2.append(title2, pizza);
    
    const item3 = document.createElement("div");
    item3.classList.add("menu-item");
    const title3 = document.createElement("h2");
    title3.textContent = "Greens";
    const greens = new Image();
    greens.classList.add("menu-images");
    greens.src = Greens;
    item3.append(title3, greens);

    const item4 = document.createElement("div");
    item4.classList.add("menu-item");
    const title4 = document.createElement("h2");
    title4.textContent = "Festive Special";
    const festive = new Image();
    festive.classList.add("menu-images");
    festive.src = Festive;
    item4.append(title4, festive);
    
    
    menu.append(heading, item1, item2, item3, item4);

    return menu;
}