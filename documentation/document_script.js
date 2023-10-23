/* Toggling submenu on asidebar */
const submenuHeadings = document.querySelectorAll(".asidebar_heading");
const asidebarSubmenus = document.querySelectorAll(".asidebar_submenu");

for (let i = 0; i < submenuHeadings.length; i++) {
    submenuHeadings[i].addEventListener("click", () => {
        submenuHeadings[i].classList.toggle("active");
        asidebarSubmenus[i].classList.toggle("active");
    });
}

/* Toggling menu navbar */
const menuToogle = document.querySelector(".toogle_menu");
const asideBarNav = document.querySelector(".asidebar_mainnav");
const pageHTML = document.querySelector("html");
const pageBody = document.querySelector("body");
const menuNavbar = document.querySelector(".navbar_menu");
const mainContent = document.querySelector(".maincontent_content");

menuToogle.addEventListener("click", () => {
    menuToogle.classList.toggle("is-active");
    asideBarNav.classList.toggle("active");
    pageHTML.classList.toggle("active-hidden");
    pageBody.classList.toggle("active-hidden");
    menuNavbar.classList.toggle("active-hidden");
    contentTableNav.classList.toggle("active-hidden");
    mainContent.classList.toggle("active-blurred");
});

/* Toggling table navbar */
const tableToogle = document.querySelector(".toogle_table");
const contentTableNav = document.querySelector(".content_table");

tableToogle.addEventListener("click", () => {
    tableToogle.classList.toggle("is-active");
    contentTableNav.classList.toggle("active");
});

/* Clicking to scroll to top*/
const scrollButton = document.querySelector(".scrolltop_btn");

scrollButton.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

let oldValue = 0;

window.addEventListener("scroll", function(e) {
    newValue = window.scrollY;
    if(oldValue - newValue < 0 || document.documentElement.scrollTop <= 50){
        // console.log("Down");
        scrollButton.style.opacity = "0";
    } else if(oldValue - newValue > 0) {
        // console.log("Up");
        scrollButton.style.opacity = "1";
    }
    oldValue = newValue;
});

/* Popping up image */
document.querySelectorAll(".maincontent_container img").forEach(image => {
    image.onclick = () => {
        document.querySelector(".popup_image").style.display = "block";
        document.querySelector(".popup_image img").src = image.src;
        pageHTML.style.overflow = "hidden";
        pageBody.style.overflow = "hidden";
    }
});

document.querySelector(".popup_image").addEventListener("click", () => {
    document.querySelector(".popup_image").style.display = "none";
    pageHTML.style.overflow = "visible";
    pageBody.style.overflow = "visible";
});

/* Toggling theme*/
const themeButton = document.querySelector(".theme_btn");
const themeIcon = document.querySelector("#theme_icon");

themeButton.addEventListener("click", () => {
    if (themeButton.style.color === "black") {
        themeButton.style.color = "white";
        themeButton.style.backgroundColor = "black";
        themeButton.setAttribute("title", "Switch to dark mode.");
        themeIcon.setAttribute("class", "fa fa-moon-o");
        setTheme("theme-light");
    } else {
        themeButton.style.color = "black";
        themeButton.style.backgroundColor = "white";
        themeButton.setAttribute("title", "Switch to light mode.");
        themeIcon.setAttribute("class", "fa fa-sun-o");
        setTheme("theme-dark");
    }
});

// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("scaraboghoulTheme", themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("scaraboghoulTheme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}

// Immediately invoked function to set the theme on initial load
function initialLoadingTheme() {
    if (localStorage.getItem("scaraboghoulTheme") === "theme-dark") {
        themeButton.style.color = "black";
        themeButton.style.backgroundColor = "white";
        themeButton.setAttribute("title", "Switch to light mode.");
        themeIcon.setAttribute("class", "fa fa-sun-o");
        setTheme("theme-dark");
    } else {
        themeButton.style.color = "white";
        themeButton.style.backgroundColor = "black";
        themeButton.setAttribute("title", "Switch to dark mode.");
        themeIcon.setAttribute("class", "fa fa-moon-o");
        setTheme("theme-light");
    }
}
initialLoadingTheme();

/* Saving last scarab page */
const pageTitle = document.querySelector(".page_title");

function saveLastScarabPage() {
    const pageName = pageTitle.getAttribute("title");
    localStorage.setItem("savedLastScarabPage", pageName);
}
saveLastScarabPage();

/* Opening submenu containg this page link*/
const activeNavIcon = document.querySelector("#active_nav_heading");
const activeNavList = document.querySelector("#active_nav_list");

function openRelatedSubmenu() {
    activeNavIcon.classList.toggle("active");
    activeNavList.classList.toggle("active");
}
openRelatedSubmenu();
