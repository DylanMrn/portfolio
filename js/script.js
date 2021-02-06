window.onload = function() {

    /////////////COOKIE
    var close_cookie = document.querySelector("#close");

    close_cookie.addEventListener('click', function() {
        var parent = document.querySelector("#bandeauCNIL");
        parent.remove()
    })

    /////////////////SCROLL

    var mybutton = document.querySelector("#myBtn");

    window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    ////////////////BUTTON SCROLL

    document.querySelectorAll('input[type=checkbox]').forEach(element => element.addEventListener('click', disableOther))
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function disableOther(event) {
    //"event" is current event(click)
    //"event.target" is our clicked element
    if (event.target.checked) {
        // if current input is checked -> disable ALL inputs
        document.querySelectorAll('input[type=checkbox]').forEach(element => element.disabled = true)
            // enabling our current input
        event.target.disabled = false;
    } else {
        // if current input is NOT checked -> enabling ALL inputs
        document.querySelectorAll('input[type=checkbox]').forEach(element => element.disabled = false)
    }
}