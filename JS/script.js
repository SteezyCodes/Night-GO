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
    jd(userBar, userValue);
    jd(gbBar, gbValue);
    jd(projectBar, projectValue);
    jd(kevdef, kevdefValue);
    jd(hsplushp, hsplushpValue);
    jd(cash, cashValue);
    jd(czk, czkValue);
    jd(czh, czhValue);
    jd(bomb, bombValue);
    jd(plushp, plushpValue);
    jd(runda, rundaValue);
    jd(kosa, kosaValue);
}

let processReset = () => {
    if (selected === true) {
        jd(userBar, mainData[selectedIndex].users);
        jd(gbBar, mainData[selectedIndex].gb);
        jd(projectBar, mainData[selectedIndex].projects);
        jd(kevdef, mainData[selectedIndex].kevdef);
        jd(plushp, mainData[selectedIndex].plushp);
        jd(cash, mainData[selectedIndex].cash);
        jd(czk, mainData[selectedIndex].czk);
        jd(czh, mainData[selectedIndex].czh);
        jd(bomb, mainData[selectedIndex].bomb);
        jd(hsplushp, mainData[selectedIndex].hsplushp);
        jd(runda, mainData[selectedIndex].runda);
        jd(kosa, mainData[selectedIndex].kosa);
        return;
    };
    jd(userBar, 0);
    jd(gbBar, 0);
    jd(projectBar, 0);
    jd(kevdef, 0);
    jd(hsplushp, 0);
    jd(cash, 0);
    jd(czk, 0);
    jd(czh, 0);
    jd(bomb, 0);
    jd(plushp, 0);
    jd(runda, 0);
    jd(kosa, 0);
}

let jd = (bar, value) => {
    bar.style.width = value + "%";
}

//BÓG JSA OTWIERANE I ZAMYKANE MENU

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

//COS Z NETA ZATRZYMUJACE FIXED SCROLL

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

//zabawne

// document.querySelectorAll("body *").forEach((el)=>{
//     el.style.setProperty("animation-duration", Math.random()*10000 + "ms")
// })
