export function loadContact(){
    const details = document.createElement("div");
    details.setAttribute("id", "details");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    const email = document.createElement("h2");
    email.textContent = "E-mail";
    const p1 = document.createElement("p");
    p1.textContent = "Pillz.queries@pillz.com";

    const phone = document.createElement("h2");
    phone.textContent = "Phone";
    const p2 = document.createElement("p");
    p2.textContent = "011 000 1234";

    details.append(heading, email, p1, phone, p2);

    return details;
}