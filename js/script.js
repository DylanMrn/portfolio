window.onload = function () {

    /////////////COOKIE
    var close_cookie = document.querySelector("#close");

    close_cookie.addEventListener('click', function () {
        var parent = document.querySelector("#bandeauCNIL");
        parent.remove()
    })

    /////////////////SCROLL

    var mybutton = document.querySelector("#myBtn");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}