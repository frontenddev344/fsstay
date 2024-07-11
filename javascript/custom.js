$(document).ready(function () {
    $(".open").click(function () {
        $("body").addClass("toggle");
    });
});
$(document).ready(function () {
    $(".closebutton").click(function () {
        $("body").removeClass("toggle");
    });
});

AOS.init({
    duration: 1200,
})

$(document).ready(function () {
    $(".toggle_btn").click(function () {
        var $this = $(this);
        var elem = $this.text();
        if (elem == "Katso lisää") {
            //Stuff to do when btn is in the read more state
            $this.text("Katso vähemmän");
            $this.next(".content").slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $this.text("Katso lisää");
            $this.next(".content").slideUp();
        }
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const searchIcon = document.getElementById("search-icon");
    const popup = document.getElementById("search-popup");
    const close = document.querySelector(".close");

    searchIcon.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "block";
    });

    close.addEventListener("click", function() {
        popup.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    });
});
