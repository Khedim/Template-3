// open and close links
let links = document.querySelector(".header .nav li:last-child")
let mega = document.querySelector(".header .nav li:last-child .megamenu")

links.onclick = function () {
    let id = document.querySelector(".header .nav li:last-child").id
    if (id == 0) {
        mega.style.cssText = "opacity: 1; z-index: 100; top: calc(100% + 1px);"
        document.querySelector(".header .nav li:last-child").id = 1
    }
    if (id == 1) {
        mega.style.cssText = "opacity: 0; z-index: -1; top: calc(100% + 50px);"
        document.querySelector(".header .nav li:last-child").id = 0
    }
}
// end open and close links

// set event count down date
let count = new Date("Dec 31, 2022 23:59:59").getTime()

let counter = setInterval(() => {
    let dateNow = new Date().getTime()
    let dif = count - dateNow

    let day = Math.floor(dif / (1000 * 60 * 60 * 24))
    let hours = Math.floor(dif % (1000 * 60 * 60 * 24) / (1000 * 60 *60))
    let min = Math.floor(dif % (1000 * 60 * 60) / (1000 * 60))
    let sec = Math.floor(dif % (1000 * 60) / (1000))

    document.querySelector(".days").innerHTML = day < 100 ? `0${day}` : day < 10 ? `00${day}` : day
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours
    document.querySelector(".mins").innerHTML = min < 10 ? `0${min}` : min
    document.querySelector(".secs").innerHTML = sec < 10 ? `0${sec}` : sec
    if (dif < 0) {
        clearInterval(counter)
    }
}, 1000);
// end set event count down date

// window events
let stat = document.querySelector(".stat")
let statNumber = document.querySelectorAll(".stat .number")
let started = false

let progresSection = document.querySelector(".our-skills")
let progresSpan = document.querySelectorAll(".our-skills .progres span")

window.onscroll = function () {
    // span fill
    if (window.scrollY >= progresSection.offsetTop){
        progresSpan.forEach(span => {
            span.style.transition = "0.3s linear";
            span.style.width = span.dataset.width;
        });
    };
    // end span fill
    // encrease number on scroll
    if (window.scrollY >= stat.offsetTop - 250) {
        if (!started) {
            statNumber.forEach(span => {
                let stop = span.dataset.number
                let count = setInterval(() => {
                    span.innerHTML++
                    if (span.innerHTML == stop) {
                        clearInterval(count)
                    }
                }, 2000 / stop);
            });
        }
        started = true
    }
    // end encrease number on scroll
}
