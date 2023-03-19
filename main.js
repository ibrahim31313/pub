let menuIcon = document.querySelector(".menu-icon");
let aNavArr = Array.from(document.querySelectorAll(".ul a"));



menuIcon.addEventListener("click", showHideMenu)
aNavArr.forEach((a) => {
    a.addEventListener("click", addBorderBottomEffect, event)
})

// show and Hide menu function
function showHideMenu() {
    let mySpans = Array.from(document.querySelectorAll(".menu-icon span"))
    mySpans.forEach((span) => {
        span.classList.toggle("active")
    })

    let myUL = document.querySelector(".ul")
    myUL.classList.toggle("active")
}

// remove and add the bottom border effect on li click 
function addBorderBottomEffect(e) {
    // remove class active from all the a included the nav
    aNavArr.forEach((a) => {
        a.classList.remove("active")
        e.currentTarget.classList.add("active")
    })
}