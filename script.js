const burger = document.getElementById("burger");
let navList = document.getElementById("navList");

burger.addEventListener("click", function () {
    navList.classList.toggle("blok")
});


document.addEventListener("click", function (e) {
    if (!navList.contains(e.target) && !burger.contains(e.target)) {
        navList.classList.remove("blok");
    }
});



// scroll card promo

let promoScroll = document.getElementById("promoCard");

let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    promoScroll.classList.add('dragOn');
    startX = e.pageX;
    startScrollLeft = promoScroll.scrollLeft;
};

const dragging = (e) => {
    if(!isDragging) return;
    promoScroll.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
    isDragging = false;
    promoScroll.classList.remove('dragOn');
}

promoScroll.addEventListener('mousedown', dragStart);
promoScroll.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);


// menu card scroll
let menuList = document.getElementById("menuList");

let whenDrag = false, goX, goScrollLeft;

const menuStart = (e) => {
    whenDrag = true;
    menuList.classList.add('menuDragOn');
    goX = e.pageX;
    goScrollLeft = menuList.scrollLeft
};

const menuDrag = (e) => {
    if(!whenDrag) return;
    menuList.scrollLeft = menuList.scrollLeft - (e.pageX - goX);
};

const menuStop = () => {
    whenDrag = false;
    menuList.classList.remove('menuDragOn');
}



menuList.addEventListener('mousedown', menuStart);
menuList.addEventListener('mousemove', menuDrag);
document.addEventListener('mouseup', menuStop);