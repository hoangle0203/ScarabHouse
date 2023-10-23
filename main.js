/* Toogling menu navbar */
const menuToogle = document.querySelector(".toogle_menu");
const menuNavbar = document.querySelector(".navbar_menu");

menuToogle.addEventListener("click", () => {
    menuToogle.classList.toggle("is-active");
    menuNavbar.classList.toggle("active");
});

/* Change background image for main divs upon time */
const downloadImage = document.querySelector(".download img");
const learningImage = document.querySelector(".learning img");
let currentImage = "";
let link1 = "";
let link2 = "";
let elapsedTime = 0;

function changeDivImage(link1, link2) {
    downloadImage.src = link1;
    learningImage.src = link2;
}

function initializeDivImage() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let timeInMinutes = (Number(currentHour) * 60) + Number(currentMinute);

    if (timeInMinutes >= 0 && timeInMinutes < 90) 
        changeDivImage("images/home/Sprocket + Wrench + Cyan - Closed Wings.jpg", "images/home/Magnifier + Book + Cyan - Closed Wings.jpg");
    else if (timeInMinutes >= 90 && timeInMinutes < 180) 
        changeDivImage("images/home/Sprocket + Wrench + Blue - Closed Wings.jpg", "images/home/Magnifier + Book + Pink - Closed Wings.jpg");
    else if (timeInMinutes >= 180 && timeInMinutes < 270) 
        changeDivImage("images/home/Sprocket + Wrench + Purple - Closed Wings.jpg", "images/home/Magnifier + Book + Purple - Closed Wings.jpg");
    else if (timeInMinutes >= 270 && timeInMinutes < 360) 
        changeDivImage("images/home/Sprocket + Wrench + Black - Closed Wings.jpg", "images/home/Magnifier + Book + Black - Closed Wings.jpg");
    else if (timeInMinutes >= 360 && timeInMinutes < 450) 
        changeDivImage("images/home/Sprocket + Wrench + Silver - Open Wings.jpg", "images/home/Magnifier + Book + Silver - Open Wings.jpg");
    else if (timeInMinutes >= 450 && timeInMinutes < 540) 
        changeDivImage("images/home/Sprocket + Wrench + Red - Open Wings.jpg", "images/home/Magnifier + Book + Red - Open Wings.jpg");
    else if (timeInMinutes >= 540 && timeInMinutes < 630) 
        changeDivImage("images/home/Sprocket + Wrench + Orange - Open Wings.jpg", "images/home/Magnifier + Book + Yellow - Open Wings.jpg");
    else if (timeInMinutes >= 630 && timeInMinutes < 720) 
        changeDivImage("images/home/Sprocket + Wrench + Green - Open Wings.jpg", "images/home/Magnifier + Book + Green - Open Wings.jpg");
    else if (timeInMinutes >= 720 && timeInMinutes < 810) 
        changeDivImage("images/home/Sprocket + Wrench + Cyan - Open Wings.jpg", "images/home/Magnifier + Book + Cyan - Open Wings.jpg");
    else if (timeInMinutes >= 810 && timeInMinutes < 900) 
        changeDivImage("images/home/Sprocket + Wrench + Blue - Open Wings.jpg", "images/home/Magnifier + Book + Pink - Open Wings.jpg");
    else if (timeInMinutes >= 900 && timeInMinutes < 990) 
        changeDivImage("images/home/Sprocket + Wrench + Purple - Open Wings.jpg", "images/home/Magnifier + Book + Purple - Open Wings.jpg");
    else if (timeInMinutes >= 990 && timeInMinutes < 1080) 
        changeDivImage("images/home/Sprocket + Wrench + Black - Open Wings.jpg", "images/home/Magnifier + Book + Black - Open Wings.jpg");
    else if (timeInMinutes >= 1080 && timeInMinutes < 1170) 
        changeDivImage("images/home/Sprocket + Wrench + Silver - Closed Wings.jpg", "images/home/Magnifier + Book + Silver - Closed Wings.jpg");
    else if (timeInMinutes >= 1170 && timeInMinutes < 1260) 
        changeDivImage("images/home/Sprocket + Wrench + Red - Closed Wings.jpg", "images/home/Magnifier + Book + Red - Closed Wings.jpg");
    else if (timeInMinutes >= 1260 && timeInMinutes < 1350) 
        changeDivImage("images/home/Sprocket + Wrench + Orange - Closed Wings.jpg", "images/home/Magnifier + Book + Yellow - Closed Wings.jpg");
    else
        changeDivImage("images/home/Sprocket + Wrench + Green - Closed Wings.jpg", "images/home/Magnifier + Book + Green - Closed Wings.jpg");

}

function parseTimeToChangeDivImage() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let timeInMinutes = (Number(currentHour) * 60) + Number(currentMinute);

    if (timeInMinutes === 0) {
        link1 = "images/home/Sprocket + Wrench + Cyan - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Cyan - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 90) {
        link1 = "images/home/Sprocket + Wrench + Blue - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Pink - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 180) {
        link1 = "images/home/Sprocket + Wrench + Purple - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Purple - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 270) {
        link1 = "images/home/Sprocket + Wrench + Black - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Black - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 360) {
        link1 = "images/home/Sprocket + Wrench + Silver - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Silver - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 450) {
        link1 = "images/home/Sprocket + Wrench + Red - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Red - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 540) {
        link1 = "images/home/Sprocket + Wrench + Orange - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Yellow - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 630) {
        link1 = "images/home/Sprocket + Wrench + Green - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Green - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 720) {
        link1 = "images/home/Sprocket + Wrench + Cyan - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Cyan - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 810) {
        link1 = "images/home/Sprocket + Wrench + Blue - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Pink - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 900) {
        link1 = "images/home/Sprocket + Wrench + Purple - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Purple - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 990) {
        link1 = "images/home/Sprocket + Wrench + Black - Open Wings.jpg";
        link2 = "images/home/Magnifier + Book + Black - Open Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 1080) {
        link1 = "images/home/Sprocket + Wrench + Silver - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Silver - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 1170) {
        link1 = "images/home/Sprocket + Wrench + Red - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Red - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 1260) {
        link1 = "images/home/Sprocket + Wrench + Orange - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Yellow - Closed Wings.jpg";
        smoothenTransitionImage();
    } else if (timeInMinutes === 1350) {
        link1 = "images/home/Sprocket + Wrench + Green - Closed Wings.jpg";
        link2 = "images/home/Magnifier + Book + Green - Closed Wings.jpg";
        smoothenTransitionImage();
    }
}

function smoothenTransitionImage() {
    let elapsedTimeInNumber = Number(elapsedTime.toFixed(2));
    if (elapsedTimeInNumber === 0.05) {
        downloadImage.style.opacity = 0.8;
        learningImage.style.opacity = 0.8;
        elapsedTime += 0.05;
        console.log("2");
    } else if (elapsedTimeInNumber === 0.10) {
        downloadImage.style.opacity = 0.6;
        learningImage.style.opacity = 0.6;
        elapsedTime += 0.05;
        console.log(`3, ${elapsedTimeInNumber}`);
    } else if (elapsedTimeInNumber === 0.15) {
        downloadImage.style.opacity = 0.4;
        learningImage.style.opacity = 0.4;
        elapsedTime += 0.05;
        console.log("4");
    } else if (elapsedTimeInNumber === 0.20) {
        downloadImage.style.opacity = 0.2;
        learningImage.style.opacity = 0.2;
        elapsedTime += 0.05;
        console.log("5");
    } else if (elapsedTimeInNumber === 0.25) {
        changeDivImage(link1, link2);
        downloadImage.style.opacity = 0;
        learningImage.style.opacity = 0;
        elapsedTime += 0.05;
        console.log("6");
    } else if (elapsedTimeInNumber === 0.30) {
        downloadImage.style.opacity = 0.2;
        learningImage.style.opacity = 0.2;
        elapsedTime += 0.05;
        console.log("7");
    } else if (elapsedTimeInNumber === 0.35) {
        downloadImage.style.opacity = 0.4;
        learningImage.style.opacity = 0.4;
        elapsedTime += 0.05;
        console.log("8");
    } else if (elapsedTimeInNumber === 0.40) {
        downloadImage.style.opacity = 0.6;
        learningImage.style.opacity = 0.6;
        elapsedTime += 0.05;
        console.log("9");
    } else if (elapsedTimeInNumber === 0.45) {
        downloadImage.style.opacity = 0.8;
        learningImage.style.opacity = 0.8;
        elapsedTime += 0.05;
        console.log("10");
    } else if (elapsedTimeInNumber == 0.50) {
        downloadImage.style.opacity = 1;
        learningImage.style.opacity = 1;
        elapsedTime = 0;
        console.log("11");
        return;
    } else if (elapsedTimeInNumber === 0) {
        elapsedTime += 0.05;
        console.log("1");
    }
    setTimeout(smoothenTransitionImage, 50);
}

function callToChangeDivImage() {
    initializeDivImage();
    setInterval(parseTimeToChangeDivImage, 60000);
}

// const downloadButton = document.querySelector(".download_button");
// downloadButton.addEventListener("click", () => {
//     link1 = "images/Sprocket + Wrench + Silver - Open Wings.jpg";
//     link2 = "images/Magnifier + Book + Silver - Open Wings.jpg";
//     smoothenTransitionImage();
// });

// const learningButton = document.querySelector(".learning_button");
// learningButton.addEventListener("click", initializeDivImage);

/* Recognizing last Scarab document page */
const scarabDocumentLinks = document.querySelectorAll(".scarab_document");

for (const scarabDocumentLink of scarabDocumentLinks) {
    scarabDocumentLink.addEventListener("click", () => {
        const pageTitle = localStorage.getItem("savedLastScarabPage");
        const pageLink = `documentation/${pageTitle}.html`;
        scarabDocumentLink.setAttribute("href", pageLink);
    })
}

function prepareScarabDocument() {
    const pageTitle = localStorage.getItem("savedLastScarabPage");
    const pageLink = `documentation/${pageTitle}.html`;
    for (const scarabDocumentLink of scarabDocumentLinks) {
        scarabDocumentLink.setAttribute("href", pageLink);
    }
}
prepareScarabDocument();
 