import { setUpFooter } from "./setup_footer";
import { setUpNav } from "./setup_nav";


export function setUp(){
    const container = document.createElement("div");
    container.classList.add("container");

    const sliding = document.createElement("div");
    sliding.classList.add("sliding-background");

    container.append(sliding);
    document.body.append(container);
    
    setUpNav();
    setUpFooter();
}

