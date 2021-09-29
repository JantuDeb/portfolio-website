const lists = document.querySelector(".project-list")


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
        previewUrl: "#"
    },
    {
        title: "Palindrome Birthdays",
        src: "./images/pelindrome.png",
        gitUrl: "https://github.com/JantuDeb/pelindrome-birthday",
        previewUrl: "#"
    },
    {
        title: "Fun With Triangle",
        src: "./images/triangle.png",
        gitUrl: "https://github.com/JantuDeb/fun-with-triangles",
        previewUrl: "#"
    },

    {
        title: "Is your birthday lucky",
        src: "./images/lucky-birthday.png",
        gitUrl: "https://github.com/JantuDeb/lucky-birthday",
        previewUrl: "#"
    },
    {
        title: "Cash register manager",
        src: "./images/cash-maneger.png",
        gitUrl: "https://github.com/JantuDeb/cash-register-app",
        previewUrl: "#"
    },
    {
        title: "Book store App",
        src: "./images/book-store.png",
        gitUrl: "https://github.com/JantuDeb/book-store-app",
        previewUrl: "#"
    },
    {
        title: "Get to know flags of a country",
        src: "./images/flags.png",
        gitUrl: "https://github.com/JantuDeb/countries-and-flag",
        previewUrl: "#"
    },
    {
        title: "Translate your text to yoda language",
        src: "./images/yoda.png",
        gitUrl: "https://github.com/JantuDeb/yoda-translator",
        previewUrl: "#"
    },
    {
        title: "Bananaaa speaking App",
        src: "./images/banana.png",
        gitUrl: "https://github.com/JantuDeb/banana-speaking-app",
        previewUrl: "#"
    },
    {
        title: "Science Quiz",
        src: "./images/quiz-science.png",
        gitUrl: "#",
        previewUrl: "https://replit.com/@JantuDeb/markOne-cli-quiz-app?embed=1&output=1"
    },
    {
        title: "How do you know me",
        src: "./images/quiz.png",
        gitUrl: "#",
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

    const previewLink = document.createElement("a")
    previewLink.className = "link-preview"
    previewLink.href = project.previewUrl
    previewLink.innerText = "Preview"


    linksDiv.appendChild(githubLink)
    linksDiv.appendChild(previewLink)
    divElement.appendChild(linksDiv)



    listElement.appendChild(imgElement)
    listElement.appendChild(divElement)

    lists.appendChild(listElement)
}

listsOfProject.forEach(project => addItemToList(project))