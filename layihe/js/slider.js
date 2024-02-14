document.addEventListener("DOMContentLoaded", function() {
    var slider = document.getElementById("mySlider");
    var track = slider.querySelector(".slider-track");
    var items = slider.querySelectorAll(".slider-item");
    var itemWidth = items[0].offsetWidth;
    var currentIndex = 0;
    var slideCount = items.length;
    var interval;


    var firstSlideClone = items[0].cloneNode(true);
    track.appendChild(firstSlideClone);

    track.style.width = itemWidth * (slideCount + 1) + "px";

    function resetSlider() {
        track.style.transition = "none";
        track.style.transform = "translateX(0)";
        setTimeout(function() {
            track.style.transition = "transform 0.5s ease";
        }, 50);
        currentIndex = 0;
    }


    function startSlider() {
        interval = setInterval(function() {
            if (currentIndex < slideCount) {
                currentIndex++;
            } else {
                currentIndex = 0;
                resetSlider();
            }
            track.style.transform = "translateX(-" + currentIndex * itemWidth + "px)";
        }, 3000);
    }

   
    window.addEventListener("resize", function() {
        itemWidth = items[0].offsetWidth;
        track.style.width = itemWidth * (slideCount + 1) + "px";
        resetSlider();
    });


    startSlider();
});
