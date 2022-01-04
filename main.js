const lists = document.querySelector(".project-list")
document.addEventListener('DOMContentLoaded', function () {
    let footerheight = document.querySelector("footer").offsetHeight;
    document.querySelector("body").style.paddingBottom = footerheight;
});

const listsOfProject = [

    {
        title: "Portfolio Website",
        src: "./images/portfolio.png",
        gitUrl: "https://github.com/JantuDeb/portfolio-website",
        previewUrl: "index.html"
    },
    {
        title: "Profit or Loss",
        src: "./images/profit-loss.png",
        gitUrl: "https://github.com/JantuDeb/profit-loss-calculator",
        previewUrl: "https://profit-loss-calcu.netlify.app/"
    },
    {
        title: "Palindrome Birthdays",
        src: "./images/pelindrome.png",
        gitUrl: "https://github.com/JantuDeb/pelindrome-birthday",
        previewUrl: "https://pelindrome-birthday.netlify.app/"
    },
    {
        title: "Fun With Triangle",
        src: "./images/triangle.png",
        gitUrl: "https://github.com/JantuDeb/fun-with-triangles",
        previewUrl: "https://triangles-1.netlify.app/"
    },

    {
        title: "Is your birthday lucky",
        src: "./images/lucky-birthday.png",
        gitUrl: "https://github.com/JantuDeb/lucky-birthday",
        previewUrl: "https://lucky1birthday.netlify.app/"
    },
    {
        title: "Cash register manager",
        src: "./images/cash-maneger.png",
        gitUrl: "https://github.com/JantuDeb/cash-register-app",
        previewUrl: "https://cash-maneger.netlify.app/"
    },
    {
        title: "Book store App",
        src: "./images/book-store.png",
        gitUrl: "https://github.com/JantuDeb/book-store-app",
        previewUrl: "https://booksrecommendation.netlify.app/"
    },
    {
        title: "Get to know flags of a country",
        src: "./images/flags.png",
        gitUrl: "https://github.com/JantuDeb/countries-and-flag",
        previewUrl: "https://flagsofcountry.netlify.app/"
    },
    {
        title: "Translate your text to yoda language",
        src: "./images/yoda.png",
        gitUrl: "https://github.com/JantuDeb/yoda-translator",
        previewUrl: "https://startwaryoda.netlify.app/"
    },
    {
        title: "Bananaaa speaking App",
        src: "./images/banana.png",
        gitUrl: "https://github.com/JantuDeb/banana-speaking-app",
        previewUrl: "https://minions-bananaa.netlify.app/"
    },
    {
        title: "Science Quiz",
        src: "./images/quiz-science.png",
        gitUrl: "https://github.com/JantuDeb/cli-quiz-app",
        previewUrl: "https://replit.com/@JantuDeb/markOne-cli-quiz-app?embed=1&output=1"
    },
    {
        title: "How do you know me",
        src: "./images/quiz.png",
        gitUrl: "https://replit.com/@JantuDeb/quiz-1",
        previewUrl: "https://replit.com/@JantuDeb/quiz-1?embed=1&output=1#index.js"
    },
]


function addItemToList(project) {
    const listElement = document.createElement('li')
    listElement.className = "project-list-item"
    const imgElement = document.createElement("img")
    imgElement.className = "img-project"
    imgElement.src = project.src;
    imgElement.alt = "profit-loass-immages"
    imgElement.width = "400"
    imgElement.height = "280"

    const divElement = document.createElement('div')
    divElement.className = "project-item-details"

    const titleElement = document.createElement("h4")
    titleElement.className = "title"
    titleElement.textContent = project.title

    divElement.appendChild(titleElement)

    const linksDiv = document.createElement("div")
    linksDiv.className = "links"
    const githubLink = document.createElement("a")
    githubLink.className = "link-github"
    githubLink.href = project.gitUrl
    githubLink.innerText = "GitHub"
    githubLink.target = "_blank"
    githubLink.referrerPolicy = "no-referrer"

    const previewLink = document.createElement("a")
    previewLink.className = "link-preview"
    previewLink.href = project.previewUrl
    previewLink.innerText = "View Site"
    previewLink.target = "_blank"
    previewLink.referrerPolicy = "no-referrer"

    linksDiv.appendChild(githubLink)
    linksDiv.appendChild(previewLink)
    divElement.appendChild(linksDiv)



    listElement.appendChild(imgElement)
    listElement.appendChild(divElement)

    lists.appendChild(listElement)
}

listsOfProject.forEach(project => addItemToList(project))