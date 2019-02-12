h = window.innerHeight

console.log(h)

$(".home").css("height", h)

$(".beautiful").css("height", h)

var nav = $(".img-head").offset().top 
console.log(nav)


$(window).scroll(function () {
    if ($(window).scrollTop() > nav) {
        $("nav").addClass("bg-light")
        $("nav img").attr("src", "images/logo@2x.png");
        $("a").css("cssText", "color: black !important;")

    } else {
        $("nav").removeClass("bg-light")
        $("nav img").attr("src", "images/logonav.png");
        $("a").css("cssText", "color: white !important;")
        $(".dropdown-menu a").css("cssText", "color: black !important;")

    }
})

$(window).ready(function () {
    if (window.innerWidth < 992) {
        
        $("a").css("cssText", "color: black !important;")
        $("nav img").attr("src", "images/logo@2x.png");

        console.log(window.innerWidth)
    }
})
