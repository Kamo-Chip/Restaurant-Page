export function loadHome(){
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    const heading = document.createElement("h1");
    heading.textContent = "We save you time and effort";

    const paragragph = document.createElement("p");
    paragragph.textContent = "At Pillz we believe that time spent eating and making food is time wasted. That's why we developed this product - to help you regain your time. The pills we provide are the equivalent of your favourite meals without all the hassle. They are filled with nutrients, vitamins and all that good stuff that you need to function on your A game. Washing dishes is a worry of the past!"
    about.append(heading, paragragph);
    
    return about;
}
