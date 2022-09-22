let timeoutID = null;
const discordIconWrapper = document.querySelector(".discord-holder");
const left = document.querySelector(".left");
const arrow = document.querySelector(".arrow");
const right = document.querySelector(".right");
const blogBody = document.querySelectorAll(".blog-body");
const blogs = document.querySelectorAll(".blogs");

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
        gb: 1,
        projects: 1,
        kevdef: 1,
        hsplushp: 1,
        plushp: 1,
        cash: 1,
        bomb: 1,
        czk: 1,
        czh: 1,
        runda: 1,
        kosa: 1,
        selected: false
    },
    {
        name: 'Basic',
        users: 100,
        gb: 33,
        projects: 100,
        kevdef: 100,
        hsplushp: 100,
        plushp: 100,
        cash: 1,
        bomb: 50,
        czk: 50,
        czh: 66,
        runda: 1,
        kosa: 1,
        selected: false
    },
    {
        name: 'Pro',
        users: 100,
        gb: 100,
        projects: 100,
        kevdef: 100,
        hsplushp: 100,
        plushp: 100,
        cash: 100,
        bomb: 100,
        czk: 100,
        czh: 100,
        runda: 100,
        kosa: 100,
        selected: false
    }
];
let selected = false;
let selectedIndex = 0;
const cards = document.querySelectorAll('.card');
const userBar = document.querySelector('.users .progress');
const gbBar = document.querySelector('.gb .progress');
const projectBar = document.querySelector('.project .progress');
const kevdef = document.querySelector('.kevdef .progress');
const plushp = document.querySelector('.plushp .progress');
const hsplushp = document.querySelector('.hsplushp .progress');
const cash = document.querySelector('.cash .progress');
const czk = document.querySelector('.cashzakilla .progress');
const czh = document.querySelector('.cashzahs .progress');
const bomb = document.querySelector('.bomb .progress');
const runda = document.querySelector('.runda .progress');
const kosa = document.querySelector('.kosa .progress');

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
    let gbValue = data.gb;
    let projectValue = data.projects;
    let kevdefValue = data.kevdef;
    let hsplushpValue = data.hsplushp;
    let cashValue = data.cashplushp;
    let czkValue = data.czk;
    let czhValue = data.czh;
    let bombValue = data.bomb;
    let plushpValue = data.plushp;
    let rundaValue = data.runda;
    let kosaValue = data.kosa;
    percentage(userBar, userValue);
    percentage(gbBar, gbValue);
    percentage(projectBar, projectValue);
    percentage(kevdef, kevdefValue);
    percentage(hsplushp, hsplushpValue);
    percentage(cash, cashValue);
    percentage(czk, czkValue);
    percentage(czh, czhValue);
    percentage(bomb, bombValue);
    percentage(plushp, plushpValue);
    percentage(runda, rundaValue);
    percentage(kosa, kosaValue);
}

let processReset = () => {
    if (selected === true) {
        percentage(userBar, mainData[selectedIndex].users);
        percentage(gbBar, mainData[selectedIndex].gb);
        percentage(projectBar, mainData[selectedIndex].projects);
        percentage(kevdef, mainData[selectedIndex].kevdef);
        percentage(plushp, mainData[selectedIndex].plushp);
        percentage(cash, mainData[selectedIndex].cash);
        percentage(czk, mainData[selectedIndex].czk);
        percentage(czh, mainData[selectedIndex].czh);
        percentage(bomb, mainData[selectedIndex].bomb);
        percentage(hsplushp, mainData[selectedIndex].hsplushp);
        percentage(runda, mainData[selectedIndex].runda);
        percentage(kosa, mainData[selectedIndex].kosa);
        return;
    };
    percentage(userBar, 0);
    percentage(gbBar, 0);
    percentage(projectBar, 0);
    percentage(kevdef, 0);
    percentage(hsplushp, 0);
    percentage(cash, 0);
    percentage(czk, 0);
    percentage(czh, 0);
    percentage(bomb, 0);
    percentage(plushp, 0);
    percentage(runda, 0);
    percentage(kosa, 0);
}

let percentage = (bar, value) => {
    bar.style.width = value + "%";
}

let clicked = true;

arrow.addEventListener('click', ()=> {
    if(clicked == false) {
        left.style.transform = "none";
        arrow.style.transform = "translate(0, 100px) rotate(180deg)";
        right.style.width = "calc(100% - 400px)";
        clicked = true;
    } else {
        left.style.transform = "translateX(-300px)";
        arrow.style.transform = "translate(0, 100px) rotate(0deg)";
        right.style.width = "100%";
        clicked = false;
    }
    blogBody.forEach((bl) => {
        if(clicked == false) {
            bl.style.margin = "0 2rem 0 132px";
        } else {
            bl.style.margin = "0 2rem 0 2rem";
        }
    })

})    


var socialFloat = document.querySelector('.left');
var footer = document.querySelector('.footer');

function checkOffset() {
function getRectTop(el){
    var rect = el.getBoundingClientRect();
    return rect.top;
}

    if((getRectTop(socialFloat) + document.body.scrollTop) + socialFloat.offsetHeight >= (getRectTop(footer) + document.body.scrollTop))
    socialFloat.style.position = 'absolute';
    if(document.body.scrollTop + window.innerHeight < (getRectTop(footer) + document.body.scrollTop))
    socialFloat.style.position = 'fixed'; // restore when you scroll up
}

document.addEventListener("scroll", function(){
    checkOffset();
});

//scroll to
const rulebookSection = document.querySelector('.rulebook-anchor');
const scrollRulebook = document.querySelector('.rulebook-tab');

const teamSection = document.querySelector('.team-anchor');
const scrollTeam = document.querySelector('.team-tab');

const eventSection = document.querySelector('.event-anchor');
const scrollEvent = document.querySelector('.event-tab');

const mainPageSection = document.querySelector('.main-page-anchor');
const scrollMainPage = document.querySelector('.main-page-tab');

const newsSection = document.querySelector('.news-anchor');
const scrollNews = document.querySelector('.news-tab');

scrollRulebook.addEventListener('click', () => {
    rulebookSection.scrollIntoView({behavior:'smooth', block:'start'})
})

scrollTeam.addEventListener('click', () => {
    teamSection.scrollIntoView({behavior:'smooth', block:'start'})
})

scrollEvent.addEventListener('click', () => {
    eventSection.scrollIntoView({behavior:'smooth', block:'start'})
})

scrollMainPage.addEventListener('click', () => {
    mainPageSection.scrollIntoView({behavior:'smooth', block:'start'})
})

scrollNews.addEventListener('click', () => {
    newsSection.scrollIntoView({behavior:'smooth', block:'start'})
})