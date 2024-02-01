/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== SHOW CART ===============*/
/*============ MOSTRAR CARRINHO =============*/
const cart = document.getElementById('cart'),
    cartShop = document.getElementById('cart-shop'),
    cartClose = document.getElementById('cart-close')

/*===== MOSTRAR CARRINHO =====*/
/* Valida se existe constante */
/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () => {
        cart.classList.add('show-cart')
    })
}

/*===== CARRINHO OCULTO =====*/
/* Valida se existe constante */
/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () => {
        cart.classList.remove('show-cart')
    })
}

/*=============== Mostrar LOGIN ===============*/
/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
    loginButton = document.getElementById('login-button'),
    loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
    loginButton.addEventListener('click', () => {
        login.classList.add('show-login')
    })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
    loginClose.addEventListener('click', () => {
        login.classList.remove('show-login')
    })
}

/*=============== HOME SWIPER ===============*/
var homeSwiper = new Swiper(".home-swiper", {
    spaceBetween: 30,
    loop: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    // quando a rolagem for maior que 50 altura da janela de visualização, adicione a classe scroll-header à tag de cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== NEW SWIPER ===============*/
var newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 16,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: 'true',
    
});

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //quando a rolagem for superior a 350 altura da janela de visualização, adicione a classe show-scroll a uma tag com a classe scroll-top
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== LIGHT BOX ===============*/


/*=============== QUESTIONS ACCORDION - FAQ'S===============*/
const accordionItem = document.querySelectorAll('.questions__item')

accordionItem.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        
        toggleItem(item)

        if(openItem && openItem !== item){
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.questions__content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    }
    else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

    
}

/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector('.style__switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style__switcher').classList.toggle('open');
})


// Hide Style Switcher on Scroll 
window.addEventListener("scroll", () => {
    if(document.querySelector(".style__switcher").classList.contains("open")){
        document.querySelector(".style__switcher").classList.remove("open");
    }
})

/*----------------------------*/
// Theme colors
function themeColors(){
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorsContainer = document.querySelector('.js-theme-colors');
    themeColorsContainer.addEventListener("click", ({target}) => {
        if(target.classList.contains("js-theme-color-item")){
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColors();
        }
    })
    function setColors(){
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
        // console.log(path);
        if(document.querySelector(".js-theme-color-item.active")){
            document.querySelector(".js-theme-color-item.active").classList.remove("active");
        }
        document.querySelector("[data-js-theme-color=" + localStorage.getItem("color") + "]").classList.add("active");
    }
    if(localStorage.getItem("color") !== null){
        setColors();
    }
    else{
        const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
        document.querySelector("[data-js-theme-color" + defaultColor + "]").classList.add("active");
        // console.log(defaultColor)
    }
}

themeColors();



/* ===================== theme colors  

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    localStorage.setItem("color",color);
    changeColor();
}
function changeColor(){
    alternateStyle.forEach((style) =>{
        if(localStorage.getItem("color") === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}================== */

/* ====================== theme light and dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () =>{  //inicio da interação do botão dia noite
    dayNight.querySelector("i").classList.toggle("bxs-sun");
    dayNight.querySelector("i").classList.toggle("bxs-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("bxs-sun");
    }
    else
    {
        dayNight.querySelector("i").classList.add("bxs-moon");
    }
})

// ===========================================================
==========================*/
