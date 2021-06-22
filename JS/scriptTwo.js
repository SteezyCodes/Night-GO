let discordIconWrapper = document.querySelector(".discord-holder");
let timeoutID = null;
let left = document.querySelector(".left");
let arrow = document.querySelector(".arrow");
let right = document.querySelector(".right");
let blogBody = document.querySelectorAll(".blog-body");
let blogs = document.querySelectorAll(".blogs");

//copyright

document.querySelector('#copyright-year').innerText = new Date().getFullYear();

//discord

function handleIconClick() {
    const el = document.createElement('textarea');
    el.value = "https://discord.gg/9UWBBjzpn2";
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    animateClipboardState()
}

function animateClipboardState() {
    if (timeoutID) {
        clearTimeout(timeoutID)
    }
    let span = discordIconWrapper.querySelector("span");
    span.textContent = "Skopiowano do schowka";
    discordIconWrapper.classList.add("active")
    timeoutID = window.setTimeout(() => {
        discordIconWrapper.classList.remove("active")
        span.textContent = "https://discord.gg/9UWBBjzpn2";
    }, 1300)
}

discordIconWrapper.addEventListener("click", handleIconClick)

let mainData = [{
        name: 'Free',
        users: 100,
        projects: 1,
        hsplushp: 1,
        plushp: 1,
        selected: false
    },
    {
        name: 'Basic',
        users: 100,
        projects: 100,
        hsplushp: 100,
        plushp: 100,
        selected: false
    },
    {
        name: 'Pro',
        users: 100,
        projects: 100,
        hsplushp: 100,
        plushp: 100,
        selected: false
    }
];
let selected = false;
let selectedIndex = 0;
const cards = document.querySelectorAll('.card');
const userBar = document.querySelector('.users .progress');
const plushp = document.querySelector('.plushp .progress');
const hsplushp = document.querySelector('.hsplushp .progress');
const projectBar = document.querySelector('.project .progress');
//forEach loop

cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        processClick(mainData[index], index);
    });
    card.addEventListener('mouseenter', () => {
        processHover(mainData[index]);
    });
    card.addEventListener('touchstart', () => {
        processHover(mainData[index]);
    });
    card.addEventListener('mouseleave', () => {
        processReset();
    });
})
//processors
let processClick = (data, index) => {
    cards.forEach((card, index_) => {
        if (index_ === index) {
            return;
        }
        card.classList.remove('checked');
        mainData[index_].selected = false;
    })
    cards[index].classList.toggle('checked');
    if (data.selected === false) {
        mainData[index].selected = true;
        selected = true;
        selectedIndex = index;
    } else {
        mainData[index].selected = false;
        selected = false;
        selectedIndex = 0;
    }
}

let processHover = (data) => {
    let userValue = data.users;
    let projectValue = data.projects;
    let hsplushpValue = data.hsplushp;
    let plushpValue = data.plushp;
    jd(userBar, userValue);
    jd(projectBar, projectValue);
    jd(hsplushp, hsplushpValue);
    jd(plushp, plushpValue);
}

let processReset = () => {
    if (selected === true) {
        jd(userBar, mainData[selectedIndex].users);
        jd(projectBar, mainData[selectedIndex].projects);
        jd(plushp, mainData[selectedIndex].plushp);
        jd(hsplushp, mainData[selectedIndex].hsplushp);
        return;
    };
    jd(userBar, 0);
    jd(projectBar, 0);
    jd(hsplushp, 0);
    jd(plushp, 0);
}

let jd = (bar, value) => {
    bar.style.width = value + "%";
}
