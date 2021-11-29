document.querySelector(".more-plus").addEventListener("click", function () {
    const navMore = document.querySelector(".nav-collapse-more, .nav-collapse-more-show");
    navMore.classList.toggle("nav-collapse-more");
    navMore.classList.toggle("nav-collapse-more-show");
    console.log(navMore.classList)
});