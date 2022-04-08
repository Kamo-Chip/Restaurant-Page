import GithubLogo from "/src/images/githublogo.png";

export function setUpFooter(){
    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    footer.textContent = "Kamogelo Khumalo";
    
    const githubLogo = new Image();
    githubLogo.setAttribute("id", "gitlogo");
    githubLogo.src = GithubLogo;
    githubLogo.onclick = () =>{
    window.location.href = "https://github.com/Kamo-Chip";
    }
    footer.append(githubLogo);
    document.body.append(footer);
}
    